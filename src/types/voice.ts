export interface VoiceRequest {
  text: string;
  voiceId: string;
  variationType?: 'instruction' | 'encouragement' | 'timer' | 'completion';
  speed?: number;
  stability?: number;
}

export interface VoiceResponse {
  audioUrl: string;
  duration: number;
  cached: boolean;
  cost?: number;
}

export interface VoiceCacheEntry {
  textHash: string;
  voiceId: string;
  audioUrl: string;
  duration: number;
  createdAt: Date;
  expiresAt: Date;
}

export interface VoiceUsage {
  userId: string;
  requestCount: number;
  windowStart: number;
  dailyUsage: number;
  lastReset: Date;
}

export interface SaltPepperPhrase {
  id: string;
  type: 'salt' | 'pepper';
  category: 'instruction' | 'encouragement' | 'timer' | 'completion';
  text: string;
  voiceId?: string; // Optional: specific to a voice
}

export interface VoiceVariation {
  baseText: string;
  saltPhrase?: SaltPepperPhrase | undefined;
  pepperPhrase?: SaltPepperPhrase | undefined;
  finalText: string;
}

export interface MamaVoiceProfile {
  id: string;
  name: string;
  voiceId: string;
  accent: string;
  personality: string[];
  greetings: string[];
  encouragements: string[];
  completions: string[];
}

export interface VoiceError {
  code: 'RATE_LIMIT' | 'API_ERROR' | 'CACHE_ERROR' | 'QUOTA_EXCEEDED' | 'INVALID_REQUEST';
  message: string;
  retryAfter?: number;
}

export interface VoiceStats {
  totalRequests: number;
  cacheHitRate: number;
  apiCalls: number;
  totalCost: number;
  averageResponseTime: number;
} 