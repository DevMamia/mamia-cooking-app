/**
 * Supabase Database Service
 * Handles all database operations with fallback mock data
 */
import { createClient } from '@supabase/supabase-js';
import { Database } from '../../types/supabase';

// Environment configuration
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error('Missing required environment variables: NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY');
}

// Client-side Supabase client
export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY);

// Server-side Supabase client (with service key)
export const supabaseAdmin = SUPABASE_SERVICE_KEY 
  ? createClient<Database>(SUPABASE_URL, SUPABASE_SERVICE_KEY)
  : null;

// Database service class
export class DatabaseService {
  private client: typeof supabase;
  private adminClient: typeof supabaseAdmin;

  constructor() {
    this.client = supabase;
    this.adminClient = supabaseAdmin;
  }

  // Mamas operations
  async getMamas() {
    const { data, error } = await this.client
      .from('mamas')
      .select('*')
      .order('created_at', { ascending: true });

    if (error) {
      console.error('Error fetching mamas:', error);
      return this.getFallbackMamas();
    }

    return data || this.getFallbackMamas();
  }

  async getMamaById(id: string) {
    const { data, error } = await this.client
      .from('mamas')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching mama:', error);
      return this.getFallbackMamaById(id);
    }

    return data || this.getFallbackMamaById(id);
  }

  // Recipes operations
  async getRecipes(mamaId?: string) {
    let query = this.client
      .from('recipes')
      .select(`
        *,
        mamas (
          id,
          name,
          cuisine_type,
          color_primary,
          color_secondary
        )
      `)
      .order('created_at', { ascending: false });

    if (mamaId) {
      query = query.eq('mama_id', mamaId);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching recipes:', error);
      return this.getFallbackRecipes(mamaId);
    }

    return data || this.getFallbackRecipes(mamaId);
  }

  async getRecipeById(id: string) {
    const { data, error } = await this.client
      .from('recipes')
      .select(`
        *,
        mamas (
          id,
          name,
          cuisine_type,
          voice_id,
          accent_description,
          color_primary,
          color_secondary
        )
      `)
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching recipe:', error);
      return this.getFallbackRecipeById(id);
    }

    return data || this.getFallbackRecipeById(id);
  }

  // User operations (requires authentication)
  async getUserProfile(userId: string) {
    const { data, error } = await this.client
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();

    if (error) {
      console.error('Error fetching user profile:', error);
      return null;
    }

    return data;
  }

  async updateUserProfile(userId: string, updates: any) {
    const { data, error } = await this.client
      .from('profiles')
      .update(updates)
      .eq('id', userId)
      .select()
      .single();

    if (error) {
      console.error('Error updating user profile:', error);
      return null;
    }

    return data;
  }

  // Favorites operations
  async getUserFavorites(userId: string) {
    const { data, error } = await this.client
      .from('favorites')
      .select(`
        *,
        recipes (
          *,
          mamas (
            id,
            name,
            cuisine_type,
            color_primary
          )
        )
      `)
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching favorites:', error);
      return [];
    }

    return data || [];
  }

  async addFavorite(userId: string, recipeId: string) {
    const { data, error } = await this.client
      .from('favorites')
      .insert({ user_id: userId, recipe_id: recipeId })
      .select()
      .single();

    if (error) {
      console.error('Error adding favorite:', error);
      return null;
    }

    return data;
  }

  async removeFavorite(userId: string, recipeId: string) {
    const { error } = await this.client
      .from('favorites')
      .delete()
      .eq('user_id', userId)
      .eq('recipe_id', recipeId);

    if (error) {
      console.error('Error removing favorite:', error);
      return false;
    }

    return true;
  }

  // User progress operations
  async getUserProgress(userId: string, recipeId?: string) {
    let query = this.client
      .from('user_progress')
      .select(`
        *,
        recipes (
          id,
          title,
          prep_time,
          cook_time,
          mamas (
            name,
            cuisine_type
          )
        )
      `)
      .eq('user_id', userId)
      .order('started_at', { ascending: false });

    if (recipeId) {
      query = query.eq('recipe_id', recipeId);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching user progress:', error);
      return [];
    }

    return data || [];
  }

  async updateUserProgress(userId: string, recipeId: string, updates: any) {
    const { data, error } = await this.client
      .from('user_progress')
      .upsert({
        user_id: userId,
        recipe_id: recipeId,
        ...updates
      })
      .select()
      .single();

    if (error) {
      console.error('Error updating user progress:', error);
      return null;
    }

    return data;
  }

  // Voice cache operations
  async getVoiceCache(key: string) {
    const { data, error } = await this.client
      .from('voice_cache')
      .select('*')
      .eq('cache_key', key)
      .gt('expires_at', new Date().toISOString())
      .single();

    if (error) {
      return null;
    }

    return data;
  }

  async setVoiceCache(key: string, audioData: string, metadata: any) {
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 24); // 24 hour expiry

    const { data, error } = await this.adminClient
      .from('voice_cache')
      .upsert({
        text_hash: key,
        audio_data: audioData,
        metadata,
        expires_at: expiresAt.toISOString()
      })
      .select()
      .single();

    if (error) {
      console.error('Error setting voice cache:', error);
      return null;
    }

    return data;
  }

  // Fallback data methods (for when database is not available)
  private getFallbackMamas() {
    return [
      {
        id: 'nonna',
        name: 'Nonna Lucia',
        cuisine_type: 'italian',
        description: 'Slow heat, big hugs, and an extra splash of olive oil - that\'s Nonna\'s secret to pasta and life.',
        personality_traits: ['warm', 'patient', 'storytelling', 'traditional', 'nurturing'],
        signature_dish: 'Carbonara',
        avatar_url: '/images/mamas/nonna-lucia.jpg',
        voice_id: 'nonna-lucia',
        accent_description: 'Gentle Italian accent with melodic intonation',
        color_primary: '#8B4513',
        color_secondary: '#DAA520',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      },
      {
        id: 'abuela',
        name: 'Abuela Rosa',
        cuisine_type: 'mexican',
        description: 'Stories sizzle in her skillet; smoky chiles and laughter make every meal feel like Sunday in Oaxaca.',
        personality_traits: ['energetic', 'passionate', 'cultural', 'spicy', 'festive'],
        signature_dish: 'Chicken Tinga',
        avatar_url: '/images/mamas/abuela-rosa.jpg',
        voice_id: 'abuela-rosa',
        accent_description: 'Warm Spanish accent with rhythmic speech patterns',
        color_primary: '#FF4500',
        color_secondary: '#FFD700',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      },
      {
        id: 'mae',
        name: 'Mae Malai',
        cuisine_type: 'thai',
        description: 'A fiery wok and gentle smile give Malai her charm - she seasons curry (and worries) with patience and a touch of palm sugar.',
        personality_traits: ['precise', 'mindful', 'seasonal', 'minimalist', 'respectful'],
        signature_dish: 'Green Curry',
        avatar_url: '/images/mamas/mae-malai.jpg',
        voice_id: 'mae-malai',
        accent_description: 'Calm Thai accent with deliberate pacing',
        color_primary: '#2E7D32',
        color_secondary: '#66BB6A',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }
    ];
  }

  private getFallbackMamaById(id: string) {
    const mamas = this.getFallbackMamas();
    return mamas.find(mama => mama.id === id) || mamas[0];
  }

  private getFallbackRecipes(mamaId?: string) {
    const recipes = [
      {
        id: 'recipe-1',
        mama_id: 'nonna',
        title: 'Classic Spaghetti Carbonara',
        description: 'A traditional Roman pasta dish with eggs, cheese, pancetta, and black pepper.',
        prep_time: 15,
        cook_time: 20,
        difficulty: 'medium' as const,
        servings: 4,
        hero_image_url: '/images/recipes/carbonara.jpg',
        ingredients: [
          { name: 'Spaghetti', amount: '400g', notes: 'Use high-quality pasta' },
          { name: 'Pancetta', amount: '150g', notes: 'Diced' },
          { name: 'Eggs', amount: '3 large', notes: 'Room temperature' },
          { name: 'Pecorino Romano', amount: '100g', notes: 'Freshly grated' },
          { name: 'Black pepper', amount: '1 tsp', notes: 'Freshly ground' }
        ],
        steps: [
          { step: 1, instruction: 'Bring a large pot of salted water to boil', duration: 5 },
          { step: 2, instruction: 'Cook pancetta in a large skillet until crispy', duration: 8 },
          { step: 3, instruction: 'Beat eggs with cheese and pepper in a bowl', duration: 3 },
          { step: 4, instruction: 'Cook spaghetti until al dente', duration: 10 },
          { step: 5, instruction: 'Toss hot pasta with pancetta and egg mixture', duration: 2 },
          { step: 6, instruction: 'Serve immediately with extra cheese', duration: 1 }
        ],
        cultural_notes: 'Carbonara originated in Rome and should never contain cream!',
        offline_available: true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        mamas: {
          id: 'nonna',
          name: 'Nonna Lucia',
          cuisine_type: 'italian',
          color_primary: '#C8102E',
          color_secondary: '#FF6B47'
        }
      },
      {
        id: 'recipe-2',
        mama_id: 'abuela',
        title: 'Authentic Paella Valenciana',
        description: 'Traditional Spanish paella with saffron, chicken, rabbit, and vegetables.',
        prep_time: 30,
        cook_time: 45,
        difficulty: 'hard' as const,
        servings: 6,
        hero_image_url: '/images/recipes/paella.jpg',
        ingredients: [
          { name: 'Bomba rice', amount: '400g', notes: 'Or Arborio rice' },
          { name: 'Chicken', amount: '1 whole', notes: 'Cut into pieces' },
          { name: 'Saffron', amount: '1g', notes: 'Soaked in warm broth' },
          { name: 'Green beans', amount: '200g', notes: 'Trimmed' },
          { name: 'Lima beans', amount: '200g', notes: 'Fresh or frozen' },
          { name: 'Olive oil', amount: '100ml', notes: 'Extra virgin' }
        ],
        steps: [
          { step: 1, instruction: 'Heat olive oil in paella pan', duration: 3 },
          { step: 2, instruction: 'Brown chicken pieces on all sides', duration: 15 },
          { step: 3, instruction: 'Add green beans and lima beans', duration: 5 },
          { step: 4, instruction: 'Add rice and stir to coat', duration: 3 },
          { step: 5, instruction: 'Add saffron broth slowly', duration: 5 },
          { step: 6, instruction: 'Simmer without stirring for 20 minutes', duration: 20 }
        ],
        cultural_notes: 'Paella originated in Valencia and traditionally includes rabbit and snails.',
        offline_available: true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        mamas: {
          id: 'abuela',
          name: 'Abuela Rosa',
          cuisine_type: 'mexican',
          color_primary: '#FF6B47',
          color_secondary: '#FFB347'
        }
      },
      {
        id: 'recipe-3',
        mama_id: 'mae',
        title: 'Pad Thai with Tamarind',
        description: 'Authentic Thai stir-fried noodles with sweet, sour, and savory flavors.',
        prep_time: 20,
        cook_time: 15,
        difficulty: 'medium' as const,
        servings: 4,
        hero_image_url: '/images/recipes/pad-thai.jpg',
        ingredients: [
          { name: 'Rice noodles', amount: '400g', notes: 'Soaked until soft' },
          { name: 'Shrimp', amount: '200g', notes: 'Peeled and deveined' },
          { name: 'Tamarind paste', amount: '3 tbsp', notes: 'Authentic flavor' },
          { name: 'Fish sauce', amount: '2 tbsp', notes: 'High quality' },
          { name: 'Palm sugar', amount: '2 tbsp', notes: 'Or brown sugar' },
          { name: 'Bean sprouts', amount: '200g', notes: 'Fresh' }
        ],
        steps: [
          { step: 1, instruction: 'Soak rice noodles in warm water', duration: 10 },
          { step: 2, instruction: 'Heat oil in wok over high heat', duration: 2 },
          { step: 3, instruction: 'Add shrimp and cook until pink', duration: 3 },
          { step: 4, instruction: 'Push to one side, scramble eggs', duration: 2 },
          { step: 5, instruction: 'Add noodles and sauce mixture', duration: 5 },
          { step: 6, instruction: 'Toss with bean sprouts and peanuts', duration: 3 }
        ],
        cultural_notes: 'Pad Thai is Thailand\'s national dish, balancing sweet, sour, and salty flavors.',
        offline_available: true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        mamas: {
          id: 'mae',
          name: 'Mae Malai',
          cuisine_type: 'thai',
          color_primary: '#228B22',
          color_secondary: '#90EE90'
        }
      }
    ];

    if (mamaId) {
      return recipes.filter(recipe => recipe.mama_id === mamaId);
    }

    return recipes;
  }

  private getFallbackRecipeById(id: string) {
    const recipes = this.getFallbackRecipes();
    return recipes.find(recipe => recipe.id === id) || recipes[0];
  }
}

// Export singleton instance
export const db = new DatabaseService(); 