import { Redis } from '@upstash/redis';
import crypto from 'crypto-js';
import { VoiceCacheEntry, VoiceUsage } from '@/types/voice';

class VoiceCacheService {
  private redis: Redis;
  private static instance: VoiceCacheService;

  private constructor() {
    this.redis = new Redis({
      url: process.env.UPSTASH_REDIS_URL || 'redis://localhost:6379',
      token: process.env.UPSTASH_REDIS_TOKEN || '',
    });
  }

  static getInstance(): VoiceCacheService {
    if (!VoiceCacheService.instance) {
      VoiceCacheService.instance = new VoiceCacheService();
    }
    return VoiceCacheService.instance;
  }

  // Generate cache key for voice request
  private generateCacheKey(text: string, voiceId: string): string {
    const textHash = crypto.SHA256(text.toLowerCase().trim()).toString();
    return `voice:${voiceId}:${textHash}`;
  }

  // Generate usage key for rate limiting
  private generateUsageKey(userId: string): string {
    return `usage:${userId}`;
  }

  // Get cached voice audio
  async getCachedVoice(text: string, voiceId: string): Promise<VoiceCacheEntry | null> {
    try {
      const key = this.generateCacheKey(text, voiceId);
      const cached = await this.redis.get(key);
      
      if (!cached) {
        return null;
      }

      const entry = cached as VoiceCacheEntry;
      
      // Check if cache entry has expired
      if (new Date() > new Date(entry.expiresAt)) {
        await this.redis.del(key);
        return null;
      }

      return entry;
    } catch (error) {
      console.error('Error getting cached voice:', error);
      return null;
    }
  }

  // Cache voice audio
  async cacheVoice(
    text: string,
    voiceId: string,
    audioUrl: string,
    duration: number,
    ttl: number = 86400 // 24 hours default
  ): Promise<void> {
    try {
      const key = this.generateCacheKey(text, voiceId);
      const textHash = crypto.SHA256(text.toLowerCase().trim()).toString();
      
      const entry: VoiceCacheEntry = {
        textHash,
        voiceId,
        audioUrl,
        duration,
        createdAt: new Date(),
        expiresAt: new Date(Date.now() + ttl * 1000)
      };

      await this.redis.setex(key, ttl, JSON.stringify(entry));
    } catch (error) {
      console.error('Error caching voice:', error);
    }
  }

  // Check rate limit for user
  async checkRateLimit(userId: string): Promise<{
    allowed: boolean;
    requestCount: number;
    windowStart: number;
    retryAfter?: number;
  }> {
    try {
      const key = this.generateUsageKey(userId);
      const usage = await this.redis.get(key) as VoiceUsage | null;
      
      const now = Date.now();
      const windowMs = parseInt(process.env.VOICE_RATE_LIMIT_WINDOW || '900') * 1000; // 15 minutes
      const maxRequests = parseInt(process.env.VOICE_RATE_LIMIT_MAX || '60');
      
      if (!usage) {
        // First request
        const newUsage: VoiceUsage = {
          userId,
          requestCount: 1,
          windowStart: now,
          dailyUsage: 1,
          lastReset: new Date()
        };
        
        await this.redis.setex(key, windowMs / 1000, JSON.stringify(newUsage));
        return { allowed: true, requestCount: 1, windowStart: now };
      }

      // Check if window has expired
      if (now - usage.windowStart > windowMs) {
        // Reset window
        const newUsage: VoiceUsage = {
          userId,
          requestCount: 1,
          windowStart: now,
          dailyUsage: usage.dailyUsage + 1,
          lastReset: usage.lastReset
        };
        
        await this.redis.setex(key, windowMs / 1000, JSON.stringify(newUsage));
        return { allowed: true, requestCount: 1, windowStart: now };
      }

      // Check if within rate limit
      if (usage.requestCount >= maxRequests) {
        const retryAfter = Math.ceil((usage.windowStart + windowMs - now) / 1000);
        return {
          allowed: false,
          requestCount: usage.requestCount,
          windowStart: usage.windowStart,
          retryAfter
        };
      }

      // Increment request count
      const updatedUsage: VoiceUsage = {
        ...usage,
        requestCount: usage.requestCount + 1,
        dailyUsage: usage.dailyUsage + 1
      };
      
      await this.redis.setex(key, windowMs / 1000, JSON.stringify(updatedUsage));
      
      return {
        allowed: true,
        requestCount: updatedUsage.requestCount,
        windowStart: usage.windowStart
      };
    } catch (error) {
      console.error('Error checking rate limit:', error);
      // Allow request on error to avoid blocking users
      return { allowed: true, requestCount: 0, windowStart: Date.now() };
    }
  }

  // Get cache statistics
  async getCacheStats(): Promise<{
    totalKeys: number;
    hitRate: number;
    totalSize: number;
  }> {
    try {
      // This is a simplified version - in production you'd track hits/misses
      const keys = await this.redis.keys('voice:*');
      
      return {
        totalKeys: keys.length,
        hitRate: 0.75, // Mock hit rate
        totalSize: keys.length * 1024 // Mock size calculation
      };
    } catch (error) {
      console.error('Error getting cache stats:', error);
      return { totalKeys: 0, hitRate: 0, totalSize: 0 };
    }
  }

  // Clear cache for specific voice or all
  async clearCache(voiceId?: string): Promise<void> {
    try {
      const pattern = voiceId ? `voice:${voiceId}:*` : 'voice:*';
      const keys = await this.redis.keys(pattern);
      
      if (keys.length > 0) {
        await this.redis.del(...keys);
      }
    } catch (error) {
      console.error('Error clearing cache:', error);
    }
  }

  // Get user daily usage
  async getDailyUsage(userId: string): Promise<number> {
    try {
      const key = this.generateUsageKey(userId);
      const usage = await this.redis.get(key) as VoiceUsage | null;
      
      if (!usage) return 0;
      
      // Check if it's a new day
      const today = new Date().toDateString();
      const lastReset = new Date(usage.lastReset).toDateString();
      
      if (today !== lastReset) {
        // Reset daily usage
        const updatedUsage: VoiceUsage = {
          ...usage,
          dailyUsage: 0,
          lastReset: new Date()
        };
        
        await this.redis.set(key, JSON.stringify(updatedUsage));
        return 0;
      }
      
      return usage.dailyUsage;
    } catch (error) {
      console.error('Error getting daily usage:', error);
      return 0;
    }
  }
}

export default VoiceCacheService; 