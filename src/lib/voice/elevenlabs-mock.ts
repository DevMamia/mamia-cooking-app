import { VoiceRequest, VoiceResponse } from '@/types/voice';

const MOCK_VOICES = {
  'nonna-lucia': {
    name: 'Nonna Lucia',
    accent: 'Italian',
    baseDelay: 800,
    errorRate: 0.02
  },
  'abuela-rosa': {
    name: 'Abuela Rosa',
    accent: 'Spanish',
    baseDelay: 750,
    errorRate: 0.01
  },
  'mae-malai': {
    name: 'Mae Malai',
    accent: 'Thai',
    baseDelay: 900,
    errorRate: 0.03
  }
};

// Custom error class for voice errors
class VoiceServiceError extends Error {
  public code: 'RATE_LIMIT' | 'API_ERROR' | 'CACHE_ERROR' | 'QUOTA_EXCEEDED' | 'INVALID_REQUEST';
  public retryAfter?: number;

  constructor(error: {
    code: 'RATE_LIMIT' | 'API_ERROR' | 'CACHE_ERROR' | 'QUOTA_EXCEEDED' | 'INVALID_REQUEST';
    message: string;
    retryAfter?: number;
  }) {
    super(error.message);
    this.name = 'VoiceServiceError';
    this.code = error.code;
    if (error.retryAfter !== undefined) {
      this.retryAfter = error.retryAfter;
    }
  }
}

export class ElevenLabsMock {
  private static instance: ElevenLabsMock;
  private requestCount = 0;
  private totalCost = 0;

  static getInstance(): ElevenLabsMock {
    if (!ElevenLabsMock.instance) {
      ElevenLabsMock.instance = new ElevenLabsMock();
    }
    return ElevenLabsMock.instance;
  }

  async generateSpeech(request: VoiceRequest): Promise<VoiceResponse> {
    this.requestCount++;
    
    const voice = MOCK_VOICES[request.voiceId as keyof typeof MOCK_VOICES];
    if (!voice) {
      throw new VoiceServiceError({
        code: 'INVALID_REQUEST',
        message: `Voice ID ${request.voiceId} not found`
      });
    }

    // Simulate API delay
    const delay = voice.baseDelay + Math.random() * 500;
    await new Promise(resolve => setTimeout(resolve, delay));

    // Simulate occasional errors
    if (Math.random() < voice.errorRate) {
      throw new VoiceServiceError({
        code: 'API_ERROR',
        message: 'ElevenLabs API temporarily unavailable'
      });
    }

    // Simulate rate limiting (every 100th request)
    if (this.requestCount % 100 === 0) {
      throw new VoiceServiceError({
        code: 'RATE_LIMIT',
        message: 'Rate limit exceeded',
        retryAfter: 60
      });
    }

    // Calculate mock duration based on text length
    const wordsPerMinute = 150;
    const wordCount = request.text.split(' ').length;
    const duration = Math.max(1, Math.round((wordCount / wordsPerMinute) * 60 * 1000));

    // Calculate mock cost (ElevenLabs pricing: ~$0.30 per 1000 characters)
    const cost = (request.text.length / 1000) * 0.30;
    this.totalCost += cost;

    // Generate mock audio URL
    const audioUrl = `https://mock-audio-cdn.com/mamia/${request.voiceId}/${Date.now()}.mp3`;

    return {
      audioUrl,
      duration,
      cached: false,
      cost
    };
  }

  async getVoices() {
    return Object.entries(MOCK_VOICES).map(([id, voice]) => ({
      voice_id: id,
      name: voice.name,
      accent: voice.accent,
      category: 'premade',
      labels: {},
      description: `${voice.accent} accent voice for ${voice.name}`,
      preview_url: `https://mock-audio-cdn.com/previews/${id}.mp3`,
      available_for_tiers: ['free', 'starter', 'creator', 'pro'],
      settings: {
        stability: 0.75,
        similarity_boost: 0.75,
        style: 0.0,
        use_speaker_boost: true
      }
    }));
  }

  getStats() {
    return {
      totalRequests: this.requestCount,
      totalCost: this.totalCost,
      averageDelay: 850
    };
  }

  reset() {
    this.requestCount = 0;
    this.totalCost = 0;
  }
}

export { VoiceServiceError };
export default ElevenLabsMock; 