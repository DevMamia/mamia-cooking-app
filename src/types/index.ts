export interface User {
  id: string;
  email: string;
  name: string;
  avatar_url?: string;
  created_at: string;
  updated_at: string;
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  error?: string;
  message?: string;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  ingredients: Ingredient[];
  instructions: Instruction[];
  prep_time: number;
  cook_time: number;
  servings: number;
  difficulty_level: 'easy' | 'medium' | 'hard';
  cuisine_type: string;
  image_url?: string;
  mama_id: string;
  created_at: string;
  updated_at: string;
  tags: string[];
  nutrition_info?: Nutrition;
  mamas?: Mama;
}

export interface Ingredient {
  id: string;
  name: string;
  amount: number;
  unit: string;
  notes?: string;
}

export interface Instruction {
  id: string;
  step: number;
  description: string;
  duration?: number;
  temperature?: number;
  image_url?: string;
}

export interface Nutrition {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  sugar: number;
  sodium: number;
}

export interface Mama {
  id: string;
  name: string;
  cuisine_type: string;
  personality_traits: string[];
  voice_id?: string;
  accent_description?: string;
  cultural_notes?: string;
  created_at: string;
  updated_at: string;
}

export interface KitchenTimer {
  id: string;
  name: string;
  duration: number;
  remaining: number;
  is_active: boolean;
  created_at: string;
}

export interface CookingSession {
  id: string;
  recipe_id: string;
  user_id: string;
  current_step: number;
  timers: KitchenTimer[];
  notes: string;
  started_at: string;
  completed_at?: string;
  status: 'active' | 'paused' | 'completed' | 'cancelled';
}

export interface VoiceCommand {
  id: string;
  command: string;
  action: 'next_step' | 'previous_step' | 'start_timer' | 'pause_timer' | 'repeat_instruction' | 'add_note';
  parameters?: Record<string, unknown>;
  timestamp: string;
}


export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface SearchFilters {
  cuisine?: string;
  difficulty?: Recipe['difficulty_level'];
  prep_time?: number;
  cook_time?: number;
  dietary_restrictions?: string[];
  tags?: string[];
}

export interface CacheEntry<T> {
  data: T;
  timestamp: number;
  ttl: number;
}

export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

export interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
}    