import { NextRequest, NextResponse } from 'next/server';
import TTSService from '@/lib/voice/tts-service';
import { VoiceServiceError } from '@/lib/voice/elevenlabs-mock';
import { voiceGenerateSchema, userIdSchema } from '@/lib/validation/api-schemas';
import { validateBody, sanitizeInput } from '@/lib/validation/validate';

export async function POST(request: NextRequest) {
  try {
    // Validate request body
    const validation = await validateBody(request, voiceGenerateSchema);
    if (!validation.success) {
      return validation.error;
    }

    // Sanitize input data
    const sanitizedData = sanitizeInput(validation.data);
    const { text, voiceId, variationType, speed, stability } = sanitizedData;

    // Validate and get user ID from headers
    const userIdHeader = request.headers.get('x-user-id');
    const userId = userIdSchema.parse(userIdHeader);

    const ttsService = TTSService.getInstance();
    
    const response = await ttsService.generateSpeech(
      {
        text,
        voiceId,
        ...(variationType && { variationType }),
        ...(speed !== undefined && { speed }),
        ...(stability !== undefined && { stability })
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

    // Validate action parameter
    const validActions = ['voices', 'stats', 'health', 'usage'];
    if (!action || !validActions.includes(action)) {
      return NextResponse.json(
        { error: 'Invalid action. Use: voices, stats, health, or usage' },
        { status: 400 }
      );
    }

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
        const userIdHeader = request.headers.get('x-user-id');
        const userId = userIdSchema.parse(userIdHeader);
        const usage = await ttsService.getUserUsage(userId);
        return NextResponse.json(usage);

      default:
        return NextResponse.json(
          { error: 'Invalid action' },
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

    // Validate voiceId if provided
    if (voiceId && !/^[a-zA-Z0-9-]+$/.test(voiceId)) {
      return NextResponse.json(
        { error: 'Invalid voice ID format' },
        { status: 400 }
      );
    }

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