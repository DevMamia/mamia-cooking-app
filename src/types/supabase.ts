export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          username: string
          avatar_url: string | null
          cooking_level: 'beginner' | 'intermediate' | 'advanced' | 'expert'
          dietary_preferences: string[]
          favorite_mama_id: string | null
          subscription_tier: 'free' | 'premium' | 'family'
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          username: string
          avatar_url?: string | null
          cooking_level?: 'beginner' | 'intermediate' | 'advanced' | 'expert'
          dietary_preferences?: string[]
          favorite_mama_id?: string | null
          subscription_tier?: 'free' | 'premium' | 'family'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          username?: string
          avatar_url?: string | null
          cooking_level?: 'beginner' | 'intermediate' | 'advanced' | 'expert'
          dietary_preferences?: string[]
          favorite_mama_id?: string | null
          subscription_tier?: 'free' | 'premium' | 'family'
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_profiles_favorite_mama"
            columns: ["favorite_mama_id"]
            isOneToOne: false
            referencedRelation: "mamas"
            referencedColumns: ["id"]
          }
        ]
      }
      mamas: {
        Row: {
          id: string
          name: string
          cuisine_type: 'italian' | 'mexican' | 'chinese' | 'indian' | 'japanese' | 'french' | 'thai' | 'mediterranean' | 'american' | 'korean' | 'vietnamese' | 'greek'
          description: string
          personality_traits: string[]
          signature_dish: string | null
          avatar_url: string | null
          voice_id: string | null
          accent_description: string | null
          is_permanent: boolean
          available_from: string | null
          available_until: string | null
          color_primary: string
          color_secondary: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          cuisine_type: 'italian' | 'mexican' | 'chinese' | 'indian' | 'japanese' | 'french' | 'thai' | 'mediterranean' | 'american' | 'korean' | 'vietnamese' | 'greek'
          description: string
          personality_traits?: string[]
          signature_dish?: string | null
          avatar_url?: string | null
          voice_id?: string | null
          accent_description?: string | null
          is_permanent?: boolean
          available_from?: string | null
          available_until?: string | null
          color_primary?: string
          color_secondary?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          cuisine_type?: 'italian' | 'mexican' | 'chinese' | 'indian' | 'japanese' | 'french' | 'thai' | 'mediterranean' | 'american' | 'korean' | 'vietnamese' | 'greek'
          description?: string
          personality_traits?: string[]
          signature_dish?: string | null
          avatar_url?: string | null
          voice_id?: string | null
          accent_description?: string | null
          is_permanent?: boolean
          available_from?: string | null
          available_until?: string | null
          color_primary?: string
          color_secondary?: string
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      recipes: {
        Row: {
          id: string
          mama_id: string
          title: string
          description: string
          prep_time: number
          cook_time: number
          difficulty: 'easy' | 'medium' | 'hard'
          servings: number
          hero_image_url: string | null
          ingredients: Json
          steps: Json
          cultural_notes: string | null
          voice_variations: Json
          offline_available: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          mama_id: string
          title: string
          description: string
          prep_time: number
          cook_time: number
          difficulty: 'easy' | 'medium' | 'hard'
          servings?: number
          hero_image_url?: string | null
          ingredients?: Json
          steps?: Json
          cultural_notes?: string | null
          voice_variations?: Json
          offline_available?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          mama_id?: string
          title?: string
          description?: string
          prep_time?: number
          cook_time?: number
          difficulty?: 'easy' | 'medium' | 'hard'
          servings?: number
          hero_image_url?: string | null
          ingredients?: Json
          steps?: Json
          cultural_notes?: string | null
          voice_variations?: Json
          offline_available?: boolean
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "recipes_mama_id_fkey"
            columns: ["mama_id"]
            isOneToOne: false
            referencedRelation: "mamas"
            referencedColumns: ["id"]
          }
        ]
      }
      user_progress: {
        Row: {
          id: string
          user_id: string
          recipe_id: string
          current_step: number
          completed: boolean
          started_at: string
          completed_at: string | null
          notes: string | null
        }
        Insert: {
          id?: string
          user_id: string
          recipe_id: string
          current_step?: number
          completed?: boolean
          started_at?: string
          completed_at?: string | null
          notes?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          recipe_id?: string
          current_step?: number
          completed?: boolean
          started_at?: string
          completed_at?: string | null
          notes?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_progress_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_progress_recipe_id_fkey"
            columns: ["recipe_id"]
            isOneToOne: false
            referencedRelation: "recipes"
            referencedColumns: ["id"]
          }
        ]
      }
      favorites: {
        Row: {
          id: string
          user_id: string
          recipe_id: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          recipe_id: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          recipe_id?: string
          created_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "favorites_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "favorites_recipe_id_fkey"
            columns: ["recipe_id"]
            isOneToOne: false
            referencedRelation: "recipes"
            referencedColumns: ["id"]
          }
        ]
      }
      shopping_lists: {
        Row: {
          id: string
          user_id: string
          name: string
          items: Json
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          name?: string
          items?: Json
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          name?: string
          items?: Json
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "shopping_lists_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      voice_cache: {
        Row: {
          id: string
          text_hash: string
          voice_id: string
          audio_url: string
          duration_ms: number | null
          created_at: string
          expires_at: string
        }
        Insert: {
          id?: string
          text_hash: string
          voice_id: string
          audio_url: string
          duration_ms?: number | null
          created_at?: string
          expires_at?: string
        }
        Update: {
          id?: string
          text_hash?: string
          voice_id?: string
          audio_url?: string
          duration_ms?: number | null
          created_at?: string
          expires_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      cooking_level: 'beginner' | 'intermediate' | 'advanced' | 'expert'
      difficulty_level: 'easy' | 'medium' | 'hard'
      subscription_tier: 'free' | 'premium' | 'family'
      cuisine_type: 'italian' | 'mexican' | 'chinese' | 'indian' | 'japanese' | 'french' | 'thai' | 'mediterranean' | 'american' | 'korean' | 'vietnamese' | 'greek'
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

// Helper types for easier usage
export type Profile = Database['public']['Tables']['profiles']['Row']
export type Mama = Database['public']['Tables']['mamas']['Row']
export type Recipe = Database['public']['Tables']['recipes']['Row']
export type UserProgress = Database['public']['Tables']['user_progress']['Row']
export type Favorite = Database['public']['Tables']['favorites']['Row']
export type ShoppingList = Database['public']['Tables']['shopping_lists']['Row']
export type VoiceCache = Database['public']['Tables']['voice_cache']['Row']

export type CookingLevel = Database['public']['Enums']['cooking_level']
export type DifficultyLevel = Database['public']['Enums']['difficulty_level']
export type SubscriptionTier = Database['public']['Enums']['subscription_tier']
export type CuisineType = Database['public']['Enums']['cuisine_type'] 