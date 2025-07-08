-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Create custom types
CREATE TYPE cooking_level AS ENUM ('beginner', 'intermediate', 'advanced', 'expert');
CREATE TYPE difficulty_level AS ENUM ('easy', 'medium', 'hard');
CREATE TYPE subscription_tier AS ENUM ('free', 'premium', 'family');
CREATE TYPE cuisine_type AS ENUM (
  'italian', 'mexican', 'chinese', 'indian', 'japanese', 'french', 
  'thai', 'mediterranean', 'american', 'korean', 'vietnamese', 'greek'
);

-- 1. Profiles table (extends auth.users)
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  avatar_url TEXT,
  cooking_level cooking_level DEFAULT 'beginner',
  dietary_preferences TEXT[] DEFAULT '{}',
  favorite_mama_id UUID,
  subscription_tier subscription_tier DEFAULT 'free',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Mamas table
CREATE TABLE mamas (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  cuisine_type cuisine_type NOT NULL,
  description TEXT NOT NULL,
  personality_traits TEXT[] DEFAULT '{}',
  signature_dish TEXT,
  avatar_url TEXT,
  voice_id TEXT,
  accent_description TEXT,
  is_permanent BOOLEAN DEFAULT true,
  available_from TIME,
  available_until TIME,
  color_primary TEXT DEFAULT '#F97316',
  color_secondary TEXT DEFAULT '#FB923C',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Recipes table
CREATE TABLE recipes (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  mama_id UUID REFERENCES mamas(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  prep_time INTEGER NOT NULL, -- in minutes
  cook_time INTEGER NOT NULL, -- in minutes
  difficulty difficulty_level NOT NULL,
  servings INTEGER DEFAULT 4,
  hero_image_url TEXT,
  ingredients JSONB NOT NULL DEFAULT '[]',
  steps JSONB NOT NULL DEFAULT '[]',
  cultural_notes TEXT,
  voice_variations JSONB DEFAULT '{}',
  offline_available BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. User progress table
CREATE TABLE user_progress (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  recipe_id UUID REFERENCES recipes(id) ON DELETE CASCADE NOT NULL,
  current_step INTEGER DEFAULT 0,
  completed BOOLEAN DEFAULT false,
  started_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  completed_at TIMESTAMP WITH TIME ZONE,
  notes TEXT,
  UNIQUE(user_id, recipe_id)
);

-- 5. Favorites table
CREATE TABLE favorites (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  recipe_id UUID REFERENCES recipes(id) ON DELETE CASCADE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, recipe_id)
);

-- 6. Shopping lists table
CREATE TABLE shopping_lists (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  name TEXT DEFAULT 'My Shopping List',
  items JSONB NOT NULL DEFAULT '[]',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 7. Voice cache table
CREATE TABLE voice_cache (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  text_hash TEXT UNIQUE NOT NULL,
  voice_id TEXT NOT NULL,
  audio_url TEXT NOT NULL,
  duration_ms INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  expires_at TIMESTAMP WITH TIME ZONE DEFAULT (NOW() + INTERVAL '30 days')
);

-- Add foreign key constraint for favorite_mama_id after mamas table is created
ALTER TABLE profiles 
ADD CONSTRAINT fk_profiles_favorite_mama 
FOREIGN KEY (favorite_mama_id) REFERENCES mamas(id) ON DELETE SET NULL;

-- Create indexes for better performance
CREATE INDEX idx_profiles_username ON profiles(username);
CREATE INDEX idx_profiles_subscription_tier ON profiles(subscription_tier);
CREATE INDEX idx_mamas_cuisine_type ON mamas(cuisine_type);
CREATE INDEX idx_mamas_is_permanent ON mamas(is_permanent);
CREATE INDEX idx_recipes_mama_id ON recipes(mama_id);
CREATE INDEX idx_recipes_difficulty ON recipes(difficulty);
CREATE INDEX idx_recipes_prep_time ON recipes(prep_time);
CREATE INDEX idx_recipes_cook_time ON recipes(cook_time);
CREATE INDEX idx_user_progress_user_id ON user_progress(user_id);
CREATE INDEX idx_user_progress_recipe_id ON user_progress(recipe_id);
CREATE INDEX idx_user_progress_completed ON user_progress(completed);
CREATE INDEX idx_favorites_user_id ON favorites(user_id);
CREATE INDEX idx_favorites_recipe_id ON favorites(recipe_id);
CREATE INDEX idx_shopping_lists_user_id ON shopping_lists(user_id);
CREATE INDEX idx_voice_cache_text_hash ON voice_cache(text_hash);
CREATE INDEX idx_voice_cache_voice_id ON voice_cache(voice_id);
CREATE INDEX idx_voice_cache_expires_at ON voice_cache(expires_at);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Add updated_at triggers
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_mamas_updated_at BEFORE UPDATE ON mamas 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_recipes_updated_at BEFORE UPDATE ON recipes 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_shopping_lists_updated_at BEFORE UPDATE ON shopping_lists 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column(); 