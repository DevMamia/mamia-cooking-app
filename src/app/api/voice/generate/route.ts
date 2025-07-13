import { NextRequest, NextResponse } from 'next/server';
import TTSService from '@/lib/voice/tts-service';
import { VoiceServiceError } from '@/lib/voice/elevenlabs-mock';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { text, voiceId, variationType, speed, stability } = body;

    // Validate required fields
    if (!text || !voiceId) {
      return NextResponse.json(
        { error: 'Missing required fields: text, voiceId' },
        { status: 400 }
      );
    }

    // Get user ID from headers or use anonymous
    const userId = request.headers.get('x-user-id') || 'anonymous';

    const ttsService = TTSService.getInstance();
    
    const response = await ttsService.generateSpeech(
      {
        text,
        voiceId,
        variationType,
        speed,
        stability
      },
      userId
    );

    return NextResponse.json(response);
  } catch (error) {
    console.error('Voice generation error:', error);

    if (error instanceof VoiceServiceError) {
      const statusCode = error.code === 'RATE_LIMIT' ? 429 :
                        error.code === 'QUOTA_EXCEEDED' ? 429 :
                        error.code === 'INVALID_REQUEST' ? 400 : 500;

      return NextResponse.json(
        { 
          error: error.message,
          code: error.code,
          retryAfter: error.retryAfter
        },
        { status: statusCode }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const action = searchParams.get('action');

    const ttsService = TTSService.getInstance();

    switch (action) {
      case 'voices':
        const voices = await ttsService.getVoices();
        return NextResponse.json(voices);

      case 'stats':
        const stats = await ttsService.getStats();
        return NextResponse.json(stats);

      case 'health':
        const health = await ttsService.healthCheck();
        return NextResponse.json(health);

      case 'usage':
        const userId = request.headers.get('x-user-id') || 'anonymous';
        const usage = await ttsService.getUserUsage(userId);
        return NextResponse.json(usage);

      default:
        return NextResponse.json(
          { error: 'Invalid action. Use: voices, stats, health, or usage' },
          { status: 400 }
        );
    }
  } catch (error) {
    console.error('Voice API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const voiceId = searchParams.get('voiceId');

    const ttsService = TTSService.getInstance();
    await ttsService.clearCache(voiceId || undefined);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Cache clear error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 