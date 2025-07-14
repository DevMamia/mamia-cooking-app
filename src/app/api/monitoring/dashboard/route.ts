import { NextRequest, NextResponse } from 'next/server';
import { monitoringTimeRangeSchema, monitoringMetricSchema, monitoringActionSchema } from '@/lib/validation/api-schemas';
import { validateBody, sanitizeInput } from '@/lib/validation/validate';
import { withAdminAuth } from '@/lib/auth/middleware';

// Mock services - we'll initialize them dynamically to avoid server-side issues
let PostHogMock: any = null;
let SentryMock: any = null;

// Dynamically import services only when needed
async function getServices() {
  if (!PostHogMock) {
    const { default: PostHogMockClass } = await import('@/lib/analytics/posthog-mock');
    PostHogMock = PostHogMockClass;
  }
  if (!SentryMock) {
    const { default: SentryMockClass } = await import('@/lib/monitoring/sentry-mock');
    SentryMock = SentryMockClass;
  }
  
  return {
    posthog: PostHogMock.getInstance(),
    sentry: SentryMock.getInstance()
  };
}

export async function GET(request: NextRequest) {
  return withAdminAuth(request, async () => {
    try {
    const { searchParams } = new URL(request.url);
    
    // Validate query parameters
    const timeRangeParam = searchParams.get('timeRange');
    const metricParam = searchParams.get('metric');
    
    const timeRange = monitoringTimeRangeSchema.parse(timeRangeParam);
    const metric = metricParam ? monitoringMetricSchema.parse(metricParam) : undefined;

    // Calculate date range
    const now = new Date();
    const daysBack = timeRange === '24h' ? 1 : 
                     timeRange === '7d' ? 7 : 
                     timeRange === '30d' ? 30 : 7;
    
    const startDate = new Date(now.getTime() - daysBack * 24 * 60 * 60 * 1000);

    const { posthog, sentry } = await getServices();

    // Get specific metric if requested
    if (metric) {
      return NextResponse.json(await getSpecificMetric(metric, { start: startDate, end: now }));
    }

    // Get comprehensive dashboard data
    const [analytics, health] = await Promise.all([
      posthog.getAnalytics({ start: startDate, end: now }),
      sentry.checkHealth()
    ]);

    const dashboardData = {
      timeRange,
      lastUpdated: new Date().toISOString(),
      
      // User Analytics
      analytics: {
        totalUsers: analytics.uniqueUsers,
        activeUsers: analytics.activeUsers,
        newUsers: Math.floor(analytics.uniqueUsers * 0.3), // Mock new users
        userRetention: analytics.userRetention,
        sessions: analytics.sessions,
        avgSessionDuration: analytics.avgSessionDuration,
        conversionRate: analytics.conversionRate
      },

      // App Performance
      performance: {
        status: health.status,
        performanceScore: health.metrics.performanceScore,
        avgResponseTime: health.metrics.avgResponseTime,
        errorRate: health.metrics.errorRate,
        uptime: 0.997, // Mock uptime
        
        // Specific metrics
        voiceGeneration: {
          avgTime: health.metrics.performanceMetrics.avgVoiceGeneration,
          successRate: 0.96,
          cacheHitRate: 0.78
        },
        
        offlineSupport: {
          cacheSize: '45.2MB',
          cachedRecipes: 23,
          cachedVoiceFiles: 156,
          offlineSessions: 12
        }
      },

      // Error Tracking
      errors: {
        total: health.metrics.totalErrors,
        byLevel: health.metrics.errorsByLevel,
        topErrors: health.metrics.topErrors,
        resolved: Math.floor(health.metrics.totalErrors * 0.85), // Mock resolved
        issues: health.issues
      },

      // Feature Usage
      features: {
        voiceInstructions: {
          usage: 0.87,
          satisfaction: 4.6,
          mostUsedVoice: 'nonna-lucia'
        },
        
        offlineCooking: {
          usage: 0.34,
          satisfaction: 4.8,
          avgOfflineTime: '23 minutes'
        },
        
        recipeCompletion: {
          rate: 0.73,
          avgTime: '45 minutes',
          mostPopular: 'pasta-bolognese'
        }
      },

      // Real-time Events
      realtimeEvents: analytics.topEvents.slice(0, 5),

      // System Health
      systemHealth: {
        database: 'healthy',
        cache: 'healthy',
        voiceService: 'healthy',
        analytics: 'healthy',
        monitoring: 'healthy'
      },

      // Alerts
      alerts: health.issues.map((issue: string) => ({
        id: Math.random().toString(36).substr(2, 9),
        type: 'warning',
        message: issue,
        timestamp: new Date().toISOString(),
        acknowledged: false
      }))
    };

      return NextResponse.json(dashboardData);
    } catch (error) {
      console.error('Dashboard API error:', error);
      return NextResponse.json(
        { error: 'Failed to fetch dashboard data' },
        { status: 500 }
      );
    }
  });
}

export async function POST(request: NextRequest) {
  return withAdminAuth(request, async () => {
    try {
    // Validate request body
    const validation = await validateBody(request, monitoringActionSchema);
    if (!validation.success) {
      return validation.error;
    }
    
    // Sanitize input
    const sanitizedData = sanitizeInput(validation.data);
    const { action, payload } = sanitizedData;

    const { posthog, sentry } = await getServices();

    switch (action) {
      case 'track_event':
        if (payload?.event) {
          posthog.capture(payload.event, payload.properties);
        }
        return NextResponse.json({ success: true });

      case 'report_error':
        if (payload?.error) {
          const errorId = sentry.captureException(payload.error, payload.options);
          return NextResponse.json({ success: true, errorId });
        }
        return NextResponse.json({ success: true });

      case 'start_transaction':
        // In a real implementation, this would return a transaction object
        return NextResponse.json({ 
          success: true, 
          transactionId: 'txn_' + Date.now() 
        });

      case 'acknowledge_alert':
        // Mock alert acknowledgment
        return NextResponse.json({ success: true });

      case 'clear_cache':
        // Mock cache clearing
        if (payload?.cacheType) {
          console.log('Cache cleared for:', payload.cacheType);
        }
        return NextResponse.json({ success: true });

      default:
        return NextResponse.json(
          { error: 'Unknown action' },
          { status: 400 }
        );
      }
    } catch (error) {
      console.error('Dashboard action error:', error);
      return NextResponse.json(
        { error: 'Failed to process action' },
        { status: 500 }
      );
    }
  });
}

// Helper function to get specific metrics
async function getSpecificMetric(metric: string, dateRange: { start: Date; end: Date }) {
  const { posthog, sentry } = await getServices();

  switch (metric) {
    case 'user_journey':
      // Mock user journey data
      console.log('Getting user journey data from:', posthog ? 'PostHog' : 'mock');
      return {
        metric: 'user_journey',
        data: [
          { step: 'app_opened', users: 1000, dropoff: 0 },
          { step: 'mama_selected', users: 850, dropoff: 0.15 },
          { step: 'recipe_viewed', users: 720, dropoff: 0.15 },
          { step: 'cooking_started', users: 580, dropoff: 0.19 },
          { step: 'recipe_completed', users: 420, dropoff: 0.28 }
        ]
      };

    case 'voice_analytics':
      return {
        metric: 'voice_analytics',
        data: {
          totalRequests: 2847,
          cacheHitRate: 0.78,
          avgGenerationTime: 1.2,
          byVoice: {
            'nonna-lucia': { requests: 1200, satisfaction: 4.7 },
            'abuela-rosa': { requests: 980, satisfaction: 4.6 },
            'mae-malai': { requests: 667, satisfaction: 4.5 }
          },
          errors: 23,
          successRate: 0.96
        }
      };

    case 'performance_trends':
      const performanceData = sentry.getPerformanceData();
      return {
        metric: 'performance_trends',
        data: {
          daily: generateDailyTrends(performanceData, dateRange),
          byOperation: generateMockOperationData()
        }
      };

    case 'error_trends':
      const errors = sentry.getRecentErrors(100);
      return {
        metric: 'error_trends',
        data: {
          daily: generateErrorTrends(errors, dateRange),
          byType: generateMockErrorTypes()
        }
      };

    case 'offline_usage':
      return {
        metric: 'offline_usage',
        data: {
          offlineSessions: 156,
          avgOfflineTime: 23.4, // minutes
          cacheEfficiency: 0.89,
          mostCachedRecipes: [
            { recipe: 'pasta-bolognese', cacheHits: 45 },
            { recipe: 'paella-valenciana', cacheHits: 38 },
            { recipe: 'pad-thai', cacheHits: 32 }
          ],
          storageUsage: {
            total: '45.2MB',
            recipes: '12.8MB',
            voice: '28.7MB',
            other: '3.7MB'
          }
        }
      };

    default:
      return { error: 'Unknown metric' };
  }
}

// Helper functions for data processing
function generateDailyTrends(_data: any[], dateRange: { start: Date; end: Date }) {
  const days = Math.ceil((dateRange.end.getTime() - dateRange.start.getTime()) / (24 * 60 * 60 * 1000));
  const trends = [];

  for (let i = 0; i < days; i++) {
    const date = new Date(dateRange.start.getTime() + i * 24 * 60 * 60 * 1000);
    trends.push({
      date: date.toISOString().split('T')[0],
      value: Math.floor(Math.random() * 100) + 50 // Mock data
    });
  }

  return trends;
}

function generateMockOperationData() {
  return [
    { operation: 'navigation', avgDuration: 850, count: 45 },
    { operation: 'http', avgDuration: 320, count: 123 },
    { operation: 'voice', avgDuration: 1200, count: 67 },
    { operation: 'db', avgDuration: 180, count: 89 },
    { operation: 'render', avgDuration: 95, count: 234 }
  ];
}

function generateErrorTrends(_errors: any[], dateRange: { start: Date; end: Date }) {
  const days = Math.ceil((dateRange.end.getTime() - dateRange.start.getTime()) / (24 * 60 * 60 * 1000));
  const trends = [];

  for (let i = 0; i < days; i++) {
    const date = new Date(dateRange.start.getTime() + i * 24 * 60 * 60 * 1000);
    trends.push({
      date: date.toISOString().split('T')[0],
      errors: Math.floor(Math.random() * 10),
      critical: Math.floor(Math.random() * 3)
    });
  }

  return trends;
}

function generateMockErrorTypes() {
  return [
    { type: 'network', count: 12 },
    { type: 'voice', count: 8 },
    { type: 'storage', count: 5 },
    { type: 'render', count: 3 },
    { type: 'unknown', count: 2 }
  ];
} 