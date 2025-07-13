/**
 * Sentry Mock Service
 * Development/demo service that mimics Sentry functionality
 */

interface SentryError {
  id: string;
  message: string;
  stack?: string;
  level: 'error' | 'warning' | 'info' | 'debug';
  timestamp: Date;
  user?: {
    id?: string;
    email?: string;
    username?: string;
  };
  tags: Record<string, string>;
  extra: Record<string, any>;
  fingerprint: string[];
  environment: string;
  release?: string;
  url: string;
  userAgent: string;
}

interface PerformanceEntry {
  id: string;
  operation: string;
  description: string;
  startTime: number;
  endTime: number;
  duration: number;
  tags: Record<string, string>;
  data: Record<string, any>;
  timestamp: Date;
}

interface SentryMetrics {
  totalErrors: number;
  errorRate: number;
  performanceScore: number;
  avgResponseTime: number;
  errorsByLevel: Record<string, number>;
  topErrors: Array<{ message: string; count: number; lastSeen: Date }>;
  performanceMetrics: {
    avgPageLoad: number;
    avgApiResponse: number;
    avgVoiceGeneration: number;
  };
}

class SentryMock {
  private static instance: SentryMock;
  private errors: SentryError[] = [];
  private performanceEntries: PerformanceEntry[] = [];
  private isInitialized = false;
  private currentUser: any = null;
  private tags: Record<string, string> = {};
  private context: Record<string, any> = {};
  
  static getInstance(): SentryMock {
    if (!SentryMock.instance) {
      SentryMock.instance = new SentryMock();
    }
    return SentryMock.instance;
  }

  // Initialize Sentry
  init(options: {
    dsn?: string;
    environment?: string;
    release?: string;
    tracesSampleRate?: number;
  }): void {
    console.log('🔧 Sentry Mock initialized:', {
      dsn: options.dsn?.substring(0, 20) + '...',
      environment: options.environment,
      release: options.release
    });
    
    this.isInitialized = true;
    this.tags.environment = options.environment || 'development';
    this.tags.release = options.release || 'unknown';
    
    // Set up global error handlers
    this.setupGlobalErrorHandlers();
    
    // Generate some mock historical data
    this.generateMockData();
  }

  // Capture exception
  captureException(error: Error | string, options?: {
    level?: 'error' | 'warning' | 'info' | 'debug';
    tags?: Record<string, string>;
    extra?: Record<string, any>;
    user?: any;
    fingerprint?: string[];
  }): string {
    if (!this.isInitialized) return '';

    const errorId = this.generateErrorId();
    const errorMessage = typeof error === 'string' ? error : error.message;
    const stack = typeof error === 'string' ? undefined : error.stack;

    const sentryError: SentryError = {
      id: errorId,
      message: errorMessage,
      stack,
      level: options?.level || 'error',
      timestamp: new Date(),
      user: options?.user || this.currentUser,
      tags: { ...this.tags, ...options?.tags },
      extra: { ...this.context, ...options?.extra },
      fingerprint: options?.fingerprint || [errorMessage],
      environment: this.tags.environment,
      release: this.tags.release,
      url: window.location.href,
      userAgent: navigator.userAgent
    };

    this.errors.push(sentryError);
    
    console.log('🚨 Error captured:', errorMessage, {
      id: errorId,
      level: sentryError.level
    });

    // Simulate API call delay
    setTimeout(() => {
      this.processError(sentryError);
    }, Math.random() * 200);

    return errorId;
  }

  // Capture message
  captureMessage(message: string, level: 'error' | 'warning' | 'info' | 'debug' = 'info'): string {
    return this.captureException(message, { level });
  }

  // Add breadcrumb
  addBreadcrumb(breadcrumb: {
    message: string;
    level?: 'error' | 'warning' | 'info' | 'debug';
    category?: string;
    data?: Record<string, any>;
  }): void {
    console.log('🍞 Breadcrumb added:', breadcrumb.message, {
      level: breadcrumb.level,
      category: breadcrumb.category
    });
  }

  // Set user context
  setUser(user: {
    id?: string;
    email?: string;
    username?: string;
    [key: string]: any;
  }): void {
    this.currentUser = user;
    console.log('👤 User context set:', user.id || user.email || user.username);
  }

  // Set tags
  setTag(key: string, value: string): void {
    this.tags[key] = value;
  }

  setTags(tags: Record<string, string>): void {
    Object.assign(this.tags, tags);
  }

  // Set context
  setContext(key: string, context: Record<string, any>): void {
    this.context[key] = context;
  }

  // Performance monitoring
  startTransaction(options: {
    name: string;
    op: string;
    description?: string;
    tags?: Record<string, string>;
  }): {
    setTag: (key: string, value: string) => void;
    setData: (key: string, value: any) => void;
    finish: () => void;
  } {
    const startTime = performance.now();
    const transactionId = this.generateTransactionId();
    
    console.log('⏱️ Transaction started:', options.name, options.op);

    return {
      setTag: (key: string, value: string) => {
        console.log(`🏷️ Transaction tag set: ${key}=${value}`);
      },
      setData: (key: string, value: any) => {
        console.log(`📊 Transaction data set: ${key}=`, value);
      },
      finish: () => {
        const endTime = performance.now();
        const duration = endTime - startTime;
        
        const entry: PerformanceEntry = {
          id: transactionId,
          operation: options.op,
          description: options.description || options.name,
          startTime,
          endTime,
          duration,
          tags: { ...this.tags, ...options.tags },
          data: {},
          timestamp: new Date()
        };

        this.performanceEntries.push(entry);
        
        console.log('✅ Transaction finished:', options.name, `${duration.toFixed(2)}ms`);
      }
    };
  }

  // Profiling
  withProfiler<T>(name: string, fn: () => T): T {
    const transaction = this.startTransaction({
      name,
      op: 'function',
      description: `Profile: ${name}`
    });

    try {
      const result = fn();
      transaction.finish();
      return result;
    } catch (error) {
      this.captureException(error as Error, {
        tags: { profiler: name }
      });
      transaction.finish();
      throw error;
    }
  }

  // Session tracking
  startSession(): void {
    console.log('🎯 Session started');
    this.setTag('session_id', this.generateSessionId());
  }

  endSession(): void {
    console.log('🎯 Session ended');
  }

  // Health check
  checkHealth(): {
    status: 'healthy' | 'degraded' | 'unhealthy';
    issues: string[];
    metrics: SentryMetrics;
  } {
    const now = new Date();
    const last24Hours = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    
    const recentErrors = this.errors.filter(error => error.timestamp >= last24Hours);
    const recentPerformance = this.performanceEntries.filter(entry => entry.timestamp >= last24Hours);
    
    const errorRate = recentErrors.length / Math.max(1, recentPerformance.length);
    const avgResponseTime = recentPerformance.length > 0 
      ? recentPerformance.reduce((sum, entry) => sum + entry.duration, 0) / recentPerformance.length
      : 0;

    const issues: string[] = [];
    
    if (errorRate > 0.05) issues.push('High error rate detected');
    if (avgResponseTime > 2000) issues.push('Slow response times detected');
    
    const criticalErrors = recentErrors.filter(error => error.level === 'error').length;
    if (criticalErrors > 10) issues.push('Multiple critical errors');

    const status = issues.length === 0 ? 'healthy' : 
                   issues.length === 1 ? 'degraded' : 'unhealthy';

    const errorsByLevel = recentErrors.reduce((acc, error) => {
      acc[error.level] = (acc[error.level] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const errorCounts = new Map<string, { count: number; lastSeen: Date }>();
    recentErrors.forEach(error => {
      const existing = errorCounts.get(error.message);
      if (existing) {
        existing.count++;
        if (error.timestamp > existing.lastSeen) {
          existing.lastSeen = error.timestamp;
        }
      } else {
        errorCounts.set(error.message, { count: 1, lastSeen: error.timestamp });
      }
    });

    const topErrors = Array.from(errorCounts.entries())
      .sort((a, b) => b[1].count - a[1].count)
      .slice(0, 5)
      .map(([message, data]) => ({
        message,
        count: data.count,
        lastSeen: data.lastSeen
      }));

    const performanceByOp = recentPerformance.reduce((acc, entry) => {
      if (!acc[entry.operation]) acc[entry.operation] = [];
      acc[entry.operation].push(entry.duration);
      return acc;
    }, {} as Record<string, number[]>);

    const avgDuration = (durations: number[]) => 
      durations.length > 0 ? durations.reduce((a, b) => a + b, 0) / durations.length : 0;

    return {
      status,
      issues,
      metrics: {
        totalErrors: recentErrors.length,
        errorRate,
        performanceScore: Math.max(0, 100 - (avgResponseTime / 20) - (errorRate * 100)),
        avgResponseTime,
        errorsByLevel,
        topErrors,
        performanceMetrics: {
          avgPageLoad: avgDuration(performanceByOp['navigation'] || []),
          avgApiResponse: avgDuration(performanceByOp['http'] || []),
          avgVoiceGeneration: avgDuration(performanceByOp['voice'] || [])
        }
      }
    };
  }

  // Get error details
  getError(errorId: string): SentryError | null {
    return this.errors.find(error => error.id === errorId) || null;
  }

  // Get recent errors
  getRecentErrors(limit: number = 50): SentryError[] {
    return this.errors
      .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
      .slice(0, limit);
  }

  // Get performance data
  getPerformanceData(operation?: string): PerformanceEntry[] {
    const entries = operation 
      ? this.performanceEntries.filter(entry => entry.operation === operation)
      : this.performanceEntries;
    
    return entries.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
  }

  // Clear data (for testing)
  clear(): void {
    this.errors = [];
    this.performanceEntries = [];
    console.log('🔄 Sentry Mock data cleared');
  }

  // Private methods
  private setupGlobalErrorHandlers(): void {
    // Global error handler
    window.addEventListener('error', (event) => {
      this.captureException(event.error || event.message, {
        extra: {
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno
        }
      });
    });

    // Unhandled promise rejection handler
    window.addEventListener('unhandledrejection', (event) => {
      this.captureException(event.reason, {
        level: 'error',
        tags: { type: 'unhandled_promise_rejection' }
      });
    });
  }

  private processError(error: SentryError): void {
    // Mock error processing
    console.log('🔍 Processing error:', error.id);
    
    // Simulate grouping similar errors
    const similarErrors = this.errors.filter(e => 
      e.fingerprint.some(f => error.fingerprint.includes(f)) && e.id !== error.id
    );
    
    if (similarErrors.length > 0) {
      console.log(`🔗 Grouped with ${similarErrors.length} similar errors`);
    }
  }

  private generateErrorId(): string {
    return 'error_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6);
  }

  private generateTransactionId(): string {
    return 'txn_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6);
  }

  private generateSessionId(): string {
    return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 8);
  }

  private generateMockData(): void {
    // Generate some historical errors and performance data
    const errorMessages = [
      'Network request failed',
      'Voice generation timeout',
      'Recipe not found',
      'IndexedDB quota exceeded',
      'Service worker registration failed',
      'Invalid recipe format',
      'Audio playback error'
    ];

    const operations = ['navigation', 'http', 'voice', 'db', 'render'];
    const now = new Date();

    // Generate errors for the last 7 days
    for (let day = 7; day >= 0; day--) {
      const date = new Date(now.getTime() - day * 24 * 60 * 60 * 1000);
      
      // Generate 0-5 errors per day
      const errorCount = Math.floor(Math.random() * 6);
      
      for (let i = 0; i < errorCount; i++) {
        const message = errorMessages[Math.floor(Math.random() * errorMessages.length)];
        const level = Math.random() > 0.7 ? 'error' : 'warning';
        
        this.errors.push({
          id: this.generateErrorId(),
          message,
          level: level as any,
          timestamp: date,
          tags: { ...this.tags },
          extra: {},
          fingerprint: [message],
          environment: this.tags.environment,
          url: 'https://mamia.app',
          userAgent: navigator.userAgent
        });
      }

      // Generate performance entries
      const perfCount = Math.floor(Math.random() * 20) + 10;
      
      for (let i = 0; i < perfCount; i++) {
        const operation = operations[Math.floor(Math.random() * operations.length)];
        const duration = Math.random() * 2000 + 100; // 100-2100ms
        
        this.performanceEntries.push({
          id: this.generateTransactionId(),
          operation,
          description: `Mock ${operation} operation`,
          startTime: date.getTime(),
          endTime: date.getTime() + duration,
          duration,
          tags: { ...this.tags },
          data: {},
          timestamp: date
        });
      }
    }

    console.log(`🚨 Generated ${this.errors.length} mock errors and ${this.performanceEntries.length} performance entries`);
  }
}

export default SentryMock;
export type { SentryError, PerformanceEntry, SentryMetrics }; 