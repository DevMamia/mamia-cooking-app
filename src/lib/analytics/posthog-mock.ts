/**
 * PostHog Mock Service
 * Development/demo service that mimics PostHog analytics functionality
 */

interface PostHogEvent {
  event: string;
  properties: Record<string, any>;
  timestamp: Date;
  distinctId: string;
  sessionId: string;
}

interface UserProfile {
  distinctId: string;
  properties: Record<string, any>;
  firstSeen: Date;
  lastSeen: Date;
  sessionCount: number;
}

interface AnalyticsMetrics {
  totalEvents: number;
  uniqueUsers: number;
  activeUsers: number;
  sessions: number;
  avgSessionDuration: number;
  topEvents: Array<{ event: string; count: number }>;
  userRetention: number;
  conversionRate: number;
}

class PostHogMock {
  private static instance: PostHogMock;
  private events: PostHogEvent[] = [];
  private users: Map<string, UserProfile> = new Map();
  private sessions: Map<string, { start: Date; end?: Date; events: number }> = new Map();
  private isInitialized = false;
  
  static getInstance(): PostHogMock {
    if (!PostHogMock.instance) {
      PostHogMock.instance = new PostHogMock();
    }
    return PostHogMock.instance;
  }

  // Initialize PostHog (mock)
  init(apiKey: string, _options?: any): void {
    console.log('🔧 PostHog Mock initialized with key:', apiKey?.substring(0, 8) + '...' || 'undefined');
    this.isInitialized = true;
    
    // Generate some mock historical data
    this.generateMockData();
  }

  // Identify user
  identify(distinctId: string, properties?: Record<string, any>): void {
    if (!this.isInitialized) return;

    const existingUser = this.users.get(distinctId);
    const now = new Date();

    if (existingUser) {
      existingUser.lastSeen = now;
      existingUser.sessionCount++;
      if (properties) {
        Object.assign(existingUser.properties, properties);
      }
    } else {
      this.users.set(distinctId, {
        distinctId,
        properties: properties || {},
        firstSeen: now,
        lastSeen: now,
        sessionCount: 1
      });
    }

    console.log('👤 User identified:', distinctId);
  }

  // Track event
  capture(event: string, properties?: Record<string, any>, _options?: any): void {
    if (!this.isInitialized) return;

    const distinctId = this.getCurrentUserId();
    const sessionId = this.getCurrentSessionId();
    
    const eventData: PostHogEvent = {
      event,
      properties: {
        ...properties,
        $current_url: window.location.href,
        $browser: navigator.userAgent,
        $viewport_height: window.innerHeight,
        $viewport_width: window.innerWidth,
        $timestamp: new Date().toISOString(),
        distinctId,
        sessionId
      },
      timestamp: new Date(),
      distinctId,
      sessionId
    };

    this.events.push(eventData);
    this.updateSessionActivity(sessionId);

    console.log('📊 Event captured:', event, properties);

    // Simulate API delay
    setTimeout(() => {
      this.processEvent(eventData);
    }, Math.random() * 100);
  }

  // Set user properties
  setPersonProperties(properties: Record<string, any>): void {
    if (!this.isInitialized) return;

    const distinctId = this.getCurrentUserId();
    const user = this.users.get(distinctId);
    
    if (user) {
      Object.assign(user.properties, properties);
    } else {
      this.identify(distinctId, properties);
    }

    console.log('👤 User properties set:', properties);
  }

  // Track page view
  trackPageView(properties?: Record<string, any>): void {
    this.capture('$pageview', {
      $current_url: window.location.href,
      $pathname: window.location.pathname,
      $search: window.location.search,
      $title: document.title,
      ...properties
    });
  }

  // Feature flags (mock)
  isFeatureEnabled(flag: string): boolean {
    // Mock feature flags
    const flags: Record<string, boolean> = {
      'voice-pre-caching': true,
      'advanced-analytics': true,
      'mama-recommendations': true,
      'offline-cooking': true,
      'social-sharing': false,
      'premium-features': false
    };

    return flags[flag] ?? false;
  }

  getFeatureFlag(flag: string): boolean | string {
    return this.isFeatureEnabled(flag);
  }

  // A/B testing
  getActiveMatchingFeatureFlags(): Record<string, boolean | string> {
    return {
      'voice-pre-caching': true,
      'advanced-analytics': true,
      'mama-recommendations': true,
      'offline-cooking': true
    };
  }

  // Cohort analysis
  addPersonToCohort(cohortId: string): void {
    const distinctId = this.getCurrentUserId();
    console.log(`👥 Added user ${distinctId} to cohort ${cohortId}`);
  }

  // Session recording (mock)
  startSessionRecording(): void {
    console.log('🎥 Session recording started (mock)');
  }

  stopSessionRecording(): void {
    console.log('🎥 Session recording stopped (mock)');
  }

  // Get analytics data
  getAnalytics(dateRange?: { start: Date; end: Date }): AnalyticsMetrics {
    const now = new Date();
    const startDate = dateRange?.start || new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000); // 30 days ago
    const endDate = dateRange?.end || now;

    const filteredEvents = this.events.filter(
      event => event.timestamp >= startDate && event.timestamp <= endDate
    );

    const uniqueUsers = new Set(filteredEvents.map(e => e.distinctId)).size;
    const eventCounts = new Map<string, number>();
    
    filteredEvents.forEach(event => {
      eventCounts.set(event.event, (eventCounts.get(event.event) || 0) + 1);
    });

    const topEvents = Array.from(eventCounts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([event, count]) => ({ event, count }));

    return {
      totalEvents: filteredEvents.length,
      uniqueUsers,
      activeUsers: Math.floor(uniqueUsers * 0.7), // Mock active users
      sessions: this.sessions.size,
      avgSessionDuration: this.calculateAvgSessionDuration(),
      topEvents,
      userRetention: 0.65, // Mock retention rate
      conversionRate: 0.12 // Mock conversion rate
    };
  }

  // Get user journey
  getUserJourney(distinctId: string): PostHogEvent[] {
    return this.events
      .filter(event => event.distinctId === distinctId)
      .sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());
  }

  // Funnel analysis
  getFunnelAnalysis(steps: string[]): Array<{ step: string; users: number; conversionRate: number }> {
    const totalUsers = this.users.size;
    
    return steps.map((step, index) => {
      // Mock funnel data with decreasing conversion
      const conversionRate = Math.max(0.1, 1 - (index * 0.25));
      const users = Math.floor(totalUsers * conversionRate);
      
      return {
        step,
        users,
        conversionRate: index === 0 ? 1 : conversionRate
      };
    });
  }

  // Reset data (for testing)
  reset(): void {
    this.events = [];
    this.users.clear();
    this.sessions.clear();
    console.log('🔄 PostHog Mock data reset');
  }

  // Private helper methods
  private getCurrentUserId(): string {
    // In a real app, this would come from authentication
    return localStorage.getItem('mamia_user_id') || this.generateUserId();
  }

  private generateUserId(): string {
    const userId = 'user_' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem('mamia_user_id', userId);
    return userId;
  }

  private getCurrentSessionId(): string {
    const sessionKey = 'mamia_session_id';
    let sessionId = sessionStorage.getItem(sessionKey);
    
    if (!sessionId) {
      sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6);
      sessionStorage.setItem(sessionKey, sessionId);
      
      // Initialize session
      this.sessions.set(sessionId, {
        start: new Date(),
        events: 0
      });
    }
    
    return sessionId;
  }

  private updateSessionActivity(sessionId: string): void {
    const session = this.sessions.get(sessionId);
    if (session) {
      session.events++;
      session.end = new Date();
    }
  }

  private calculateAvgSessionDuration(): number {
    let totalDuration = 0;
    let completedSessions = 0;

    this.sessions.forEach(session => {
      if (session.end) {
        totalDuration += session.end.getTime() - session.start.getTime();
        completedSessions++;
      }
    });

    return completedSessions > 0 ? totalDuration / completedSessions / 1000 : 0; // seconds
  }

  private processEvent(event: PostHogEvent): void {
    // Mock event processing - in real PostHog this would be sent to servers
    
    // Special handling for cooking events
    if (event.event.includes('cooking_')) {
      this.processCookingEvent(event);
    }
    
    // Update user properties based on events
    if (event.event === 'recipe_completed') {
      this.updateUserCookingStats(event.distinctId);
    }
  }

  private processCookingEvent(event: PostHogEvent): void {
    // Mock cooking-specific analytics
    console.log('🍳 Processing cooking event:', event.event);
    
    // Track cooking progression
    if (event.event === 'cooking_step_completed') {
      const stepNumber = event.properties.step_number;
      const recipeId = event.properties.recipe_id;
      
      // Mock step completion analytics
      console.log(`📊 Step ${stepNumber} completed for recipe ${recipeId}`);
    }
  }

  private updateUserCookingStats(distinctId: string): void {
    const user = this.users.get(distinctId);
    if (user) {
      const completedRecipes = (user.properties.completed_recipes || 0) + 1;
      user.properties.completed_recipes = completedRecipes;
      
      // Update skill level based on completed recipes
      if (completedRecipes >= 20) {
        user.properties.skill_level = 'advanced';
      } else if (completedRecipes >= 5) {
        user.properties.skill_level = 'intermediate';
      } else {
        user.properties.skill_level = 'beginner';
      }
    }
  }

  private generateMockData(): void {
    // Generate some historical data for demonstration
    const events = [
      'app_opened', 'recipe_viewed', 'cooking_started', 'cooking_step_completed',
      'recipe_completed', 'mama_selected', 'voice_instruction_played',
      'ingredient_checked', 'timer_set', 'recipe_shared'
    ];

    const users = ['user_001', 'user_002', 'user_003', 'user_004', 'user_005'];
    const now = new Date();

    // Generate events for the last 7 days
    for (let day = 7; day >= 0; day--) {
      const date = new Date(now.getTime() - day * 24 * 60 * 60 * 1000);
      
      // Generate 10-50 events per day
      const eventCount = Math.floor(Math.random() * 40) + 10;
      
      for (let i = 0; i < eventCount; i++) {
        const event = events[Math.floor(Math.random() * events.length)];
        const user = users[Math.floor(Math.random() * users.length)];
        const sessionId = `session_${date.getDate()}_${user}`;
        
        this.events.push({
          event,
          properties: {
            distinctId: user,
            sessionId,
            timestamp: date.toISOString()
          },
          timestamp: date,
          distinctId: user,
          sessionId
        });
      }
    }

    console.log(`📊 Generated ${this.events.length} mock events for demonstration`);
  }
}

export default PostHogMock;
export type { PostHogEvent, UserProfile, AnalyticsMetrics }; 