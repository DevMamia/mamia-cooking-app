import { z } from 'zod';

// Voice Generation API Schemas
export const voiceGenerateSchema = z.object({
  text: z.string()
    .min(1, 'Text is required')
    .max(5000, 'Text must be less than 5000 characters')
    .refine(text => text.trim().length > 0, 'Text cannot be empty'),
  
  voiceId: z.string()
    .regex(/^[a-zA-Z0-9-]+$/, 'Voice ID must contain only alphanumeric characters and hyphens')
    .min(1, 'Voice ID is required')
    .max(50, 'Voice ID must be less than 50 characters'),
  
  variationType: z.enum(['instruction', 'encouragement', 'timer', 'completion']).optional(),
  
  speed: z.number()
    .min(0.5, 'Speed must be at least 0.5')
    .max(2.0, 'Speed must be at most 2.0')
    .optional(),
  
  stability: z.number()
    .min(0, 'Stability must be at least 0')
    .max(1, 'Stability must be at most 1')
    .optional()
});

export const voiceActionSchema = z.enum(['voices', 'stats', 'health', 'usage']);

// Monitoring Dashboard API Schemas
export const monitoringTimeRangeSchema = z.enum(['24h', '7d', '30d']).default('7d');

export const monitoringMetricSchema = z.enum([
  'user_journey',
  'voice_analytics',
  'performance_trends',
  'error_trends',
  'offline_usage'
]).optional();

export const monitoringActionSchema = z.object({
  action: z.enum([
    'track_event',
    'report_error',
    'start_transaction',
    'acknowledge_alert',
    'clear_cache'
  ]),
  
  payload: z.object({
    // Event tracking
    event: z.string().optional(),
    properties: z.record(z.any()).optional(),
    
    // Error reporting
    error: z.any().optional(),
    options: z.record(z.any()).optional(),
    
    // Alert management
    alertId: z.string().optional(),
    
    // Cache management
    cacheType: z.enum(['voice', 'recipes', 'all']).optional()
  }).optional()
});

// User ID validation for headers
export const userIdSchema = z.string()
  .regex(/^[a-zA-Z0-9-_]+$/, 'User ID must contain only alphanumeric characters, hyphens, and underscores')
  .min(1, 'User ID is required')
  .max(128, 'User ID must be less than 128 characters')
  .default('anonymous');

// Generic pagination schema for future use
export const paginationSchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20)
});

// Validation error response type
export type ValidationError = {
  error: string;
  details: z.ZodError;
};