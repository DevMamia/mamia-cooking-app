import { Redis } from '@upstash/redis';
import type { CacheEntry } from '@/types';

const REDIS_URL = process.env.UPSTASH_REDIS_URL;
const REDIS_TOKEN = process.env.UPSTASH_REDIS_TOKEN;

if (!REDIS_URL || !REDIS_TOKEN) {
  console.warn('Redis credentials not found. Cache operations will be disabled.');
}

const redis = REDIS_URL && REDIS_TOKEN ? new Redis({
  url: REDIS_URL,
  token: REDIS_TOKEN,
}) : null;

export class CacheManager {
  private static instance: CacheManager;
  private redis: Redis;

  private constructor() {
    this.redis = redis!;
  }

  public static getInstance(): CacheManager {
    if (!CacheManager.instance) {
      CacheManager.instance = new CacheManager();
    }
    return CacheManager.instance;
  }

  async get<T>(key: string): Promise<T | null> {
    if (!this.redis) return null;
    
    try {
      const cached = await this.redis.get<CacheEntry<T>>(key);
      if (!cached) return null;

      const now = Date.now();
      if (now > cached.timestamp + cached.ttl) {
        await this.redis.del(key);
        return null;
      }

      return cached.data;
    } catch (error) {
      console.error('Cache get error:', error);
      return null;
    }
  }

  async set<T>(key: string, data: T, ttl: number = 3600000): Promise<void> {
    if (!this.redis) return;
    
    try {
      const cacheEntry: CacheEntry<T> = {
        data,
        timestamp: Date.now(),
        ttl,
      };
      await this.redis.set(key, cacheEntry);
    } catch (error) {
      console.error('Cache set error:', error);
    }
  }

  async del(key: string): Promise<void> {
    if (!this.redis) return;
    
    try {
      await this.redis.del(key);
    } catch (error) {
      console.error('Cache delete error:', error);
    }
  }

  async flush(): Promise<void> {
    if (!this.redis) return;
    
    try {
      await this.redis.flushall();
    } catch (error) {
      console.error('Cache flush error:', error);
    }
  }
}

export const cache = CacheManager.getInstance(); 