import { NextRequest, NextResponse } from 'next/server';
import { z, ZodError } from 'zod';

export type ValidationResult<T> = 
  | { success: true; data: T }
  | { success: false; error: NextResponse };

/**
 * Validates request body against a Zod schema
 */
export async function validateBody<T>(
  request: NextRequest,
  schema: z.ZodSchema<T>
): Promise<ValidationResult<T>> {
  try {
    const body = await request.json();
    const data = schema.parse(body);
    return { success: true, data };
  } catch (error) {
    if (error instanceof ZodError) {
      return {
        success: false,
        error: NextResponse.json(
          {
            error: 'Validation failed',
            details: error.errors.map(err => ({
              field: err.path.join('.'),
              message: err.message
            }))
          },
          { status: 400 }
        )
      };
    }
    
    return {
      success: false,
      error: NextResponse.json(
        { error: 'Invalid JSON body' },
        { status: 400 }
      )
    };
  }
}

/**
 * Validates query parameters against a Zod schema
 */
export function validateQuery<T>(
  searchParams: URLSearchParams,
  schema: z.ZodSchema<T>
): ValidationResult<T> {
  try {
    const params = Object.fromEntries(searchParams.entries());
    const data = schema.parse(params);
    return { success: true, data };
  } catch (error) {
    if (error instanceof ZodError) {
      return {
        success: false,
        error: NextResponse.json(
          {
            error: 'Invalid query parameters',
            details: error.errors.map(err => ({
              field: err.path.join('.'),
              message: err.message
            }))
          },
          { status: 400 }
        )
      };
    }
    
    return {
      success: false,
      error: NextResponse.json(
        { error: 'Invalid query parameters' },
        { status: 400 }
      )
    };
  }
}

/**
 * Validates headers against a Zod schema
 */
export function validateHeaders<T>(
  headers: Headers,
  schema: z.ZodSchema<T>,
  headerNames: string[]
): ValidationResult<T> {
  try {
    const headerData: Record<string, string | null> = {};
    headerNames.forEach(name => {
      headerData[name] = headers.get(name);
    });
    
    const data = schema.parse(headerData);
    return { success: true, data };
  } catch (error) {
    if (error instanceof ZodError) {
      return {
        success: false,
        error: NextResponse.json(
          {
            error: 'Invalid headers',
            details: error.errors.map(err => ({
              field: err.path.join('.'),
              message: err.message
            }))
          },
          { status: 400 }
        )
      };
    }
    
    return {
      success: false,
      error: NextResponse.json(
        { error: 'Invalid headers' },
        { status: 400 }
      )
    };
  }
}

/**
 * Sanitizes string input to prevent XSS
 */
export function sanitizeString(input: string): string {
  return input
    .replace(/[<>]/g, '') // Remove angle brackets
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+\s*=/gi, '') // Remove event handlers
    .trim();
}

/**
 * Validates and sanitizes user input
 */
export function sanitizeInput<T extends Record<string, any>>(data: T): T {
  const sanitized = { ...data };
  
  Object.keys(sanitized).forEach(key => {
    if (typeof sanitized[key] === 'string') {
      sanitized[key] = sanitizeString(sanitized[key]);
    } else if (typeof sanitized[key] === 'object' && sanitized[key] !== null) {
      sanitized[key] = sanitizeInput(sanitized[key]);
    }
  });
  
  return sanitized;
}