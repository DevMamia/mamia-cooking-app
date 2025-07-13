import { VoiceRequest, VoiceResponse, VoiceStats } from '@/types/voice';
import ElevenLabsMock, { VoiceServiceError } from './elevenlabs-mock';
import VoiceCacheService from './cache-service';
import SaltPepperService from './salt-pepper';

export class TTSService {
  private static instance: TTSService;
  private elevenLabs: ElevenLabsMock;
  private cache: VoiceCacheService;
  private saltPepper: SaltPepperService;
  private stats: VoiceStats;

  private constructor() {
    this.elevenLabs = ElevenLabsMock.getInstance();
    this.cache = VoiceCacheService.getInstance();
    this.saltPepper = SaltPepperService.getInstance();
    this.stats = {
      totalRequests: 0,
      cacheHitRate: 0,
      apiCalls: 0,
      totalCost: 0,
      averageResponseTime: 0
    };
  }

  static getInstance(): TTSService {
    if (!TTSService.instance) {
      TTSService.instance = new TTSService();
    }
    return TTSService.instance;
  }

  async generateSpeech(
    request: VoiceRequest,
    userId: string = 'anonymous'
  ): Promise<VoiceResponse> {
    const startTime = Date.now();
    this.stats.totalRequests++;

    try {
      // Check rate limiting
      const rateLimitResult = await this.cache.checkRateLimit(userId);
      if (!rateLimitResult.allowed) {
        throw new VoiceServiceError({
          code: 'RATE_LIMIT',
          message: 'Rate limit exceeded',
          ...(rateLimitResult.retryAfter && { retryAfter: rateLimitResult.retryAfter })
        });
      }

      // Check daily usage limit
      const dailyUsage = await this.cache.getDailyUsage(userId);
      const dailyLimit = parseInt(process.env.VOICE_DAILY_LIMIT || '900');
      if (dailyUsage >= dailyLimit) {
        throw new VoiceServiceError({
          code: 'QUOTA_EXCEEDED',
          message: 'Daily quota exceeded'
        });
      }

      // Generate text variation if requested
      let finalText = request.text;
      if (request.variationType) {
        const variation = this.saltPepper.generateVariation(
          request.text,
          request.voiceId,
          request.variationType
        );
        finalText = variation.finalText;
      }

      // Check cache first
      const cached = await this.cache.getCachedVoice(finalText, request.voiceId);
      if (cached) {
        this.updateStats(startTime, true, 0);
        return {
          audioUrl: cached.audioUrl,
          duration: cached.duration,
          cached: true
        };
      }

      // Generate speech using ElevenLabs mock
      const response = await this.elevenLabs.generateSpeech({
        ...request,
        text: finalText
      });

      // Cache the response
      const ttl = parseInt(process.env.VOICE_CACHE_TTL || '86400');
      await this.cache.cacheVoice(
        finalText,
        request.voiceId,
        response.audioUrl,
        response.duration,
        ttl
      );

      this.updateStats(startTime, false, response.cost || 0);
      this.stats.apiCalls++;

      return response;
    } catch (error) {
      this.updateStats(startTime, false, 0);
      throw error;
    }
  }

  // Pre-generate and cache multiple variations
  async preGenerateVariations(
    baseText: string,
    voiceId: string,
    category: string = 'instruction',
    userId: string = 'system'
  ): Promise<VoiceResponse[]> {
    const variations = this.saltPepper.generateMultipleVariations(
      baseText,
      voiceId,
      category,
      3
    );

    const responses: VoiceResponse[] = [];

    for (const variation of variations) {
      try {
        const response = await this.generateSpeech(
          {
            text: variation.finalText,
            voiceId,
            variationType: category as any
          },
          userId
        );
        responses.push(response);
      } catch (error) {
        console.error(`Failed to pre-generate variation: ${variation.finalText}`, error);
      }
    }

    return responses;
  }

  // Get available voices
  async getVoices() {
    return await this.elevenLabs.getVoices();
  }

  // Get service statistics
  async getStats(): Promise<VoiceStats & {
    cacheStats: any;
    elevenLabsStats: any;
    saltPepperStats: any;
  }> {
    const cacheStats = await this.cache.getCacheStats();
    const elevenLabsStats = this.elevenLabs.getStats();
    const saltPepperStats = this.saltPepper.getStats();

    return {
      ...this.stats,
      cacheStats,
      elevenLabsStats,
      saltPepperStats
    };
  }

  // Clear cache
  async clearCache(voiceId?: string): Promise<void> {
    await this.cache.clearCache(voiceId);
  }

  // Get user usage info
  async getUserUsage(userId: string): Promise<{
    dailyUsage: number;
    dailyLimit: number;
    rateLimitInfo: any;
  }> {
    const dailyUsage = await this.cache.getDailyUsage(userId);
    const dailyLimit = parseInt(process.env.VOICE_DAILY_LIMIT || '900');
    const rateLimitInfo = await this.cache.checkRateLimit(userId);

    return {
      dailyUsage,
      dailyLimit,
      rateLimitInfo
    };
  }

  // Health check
  async healthCheck(): Promise<{
    status: 'healthy' | 'degraded' | 'unhealthy';
    services: {
      elevenlabs: 'up' | 'down';
      cache: 'up' | 'down';
      saltPepper: 'up' | 'down';
    };
    metrics: VoiceStats;
  }> {
    const services = {
      elevenlabs: 'up' as 'up' | 'down',
      cache: 'up' as 'up' | 'down',
      saltPepper: 'up' as 'up' | 'down'
    };

    // Test ElevenLabs
    try {
      await this.elevenLabs.getVoices();
    } catch (error) {
      services.elevenlabs = 'down';
    }

    // Test cache
    try {
      await this.cache.getCacheStats();
    } catch (error) {
      services.cache = 'down';
    }

    // Test salt pepper
    try {
      this.saltPepper.getStats();
    } catch (error) {
      services.saltPepper = 'down';
    }

    const downServices = Object.values(services).filter(s => s === 'down').length;
    const status = downServices === 0 ? 'healthy' : 
                   downServices === 1 ? 'degraded' : 'unhealthy';

    return {
      status,
      services,
      metrics: this.stats
    };
  }

  private updateStats(startTime: number, cached: boolean, cost: number): void {
    const responseTime = Date.now() - startTime;
    
    // Update running averages
    this.stats.averageResponseTime = 
      (this.stats.averageResponseTime * (this.stats.totalRequests - 1) + responseTime) / 
      this.stats.totalRequests;
    
    this.stats.totalCost += cost;
    
    // Update cache hit rate
    const cacheHits = cached ? 1 : 0;
    this.stats.cacheHitRate = 
      (this.stats.cacheHitRate * (this.stats.totalRequests - 1) + cacheHits) / 
      this.stats.totalRequests;
  }

  // Reset statistics
  resetStats(): void {
    this.stats = {
      totalRequests: 0,
      cacheHitRate: 0,
      apiCalls: 0,
      totalCost: 0,
      averageResponseTime: 0
    };
    this.elevenLabs.reset();
  }
}

export default TTSService; 