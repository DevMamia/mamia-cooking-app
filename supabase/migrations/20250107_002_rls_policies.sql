-- Enable RLS on all tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE mamas ENABLE ROW LEVEL SECURITY;
ALTER TABLE recipes ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE favorites ENABLE ROW LEVEL SECURITY;
ALTER TABLE shopping_lists ENABLE ROW LEVEL SECURITY;
ALTER TABLE voice_cache ENABLE ROW LEVEL SECURITY;

-- Create admin role check function
CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN (
    SELECT raw_user_meta_data->>'role' = 'admin'
    FROM auth.users
    WHERE id = auth.uid()
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create profile ownership check function
CREATE OR REPLACE FUNCTION is_profile_owner(profile_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN profile_id = auth.uid();
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- PROFILES TABLE POLICIES
-- Users can read their own profile
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

-- Users can insert their own profile
CREATE POLICY "Users can insert own profile" ON profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Users can update their own profile
CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

-- Admins can do everything with profiles
CREATE POLICY "Admins can manage all profiles" ON profiles
  FOR ALL USING (is_admin());

-- MAMAS TABLE POLICIES
-- Anyone can read mamas (public content)
CREATE POLICY "Anyone can view mamas" ON mamas
  FOR SELECT USING (true);

-- Only admins can insert mamas
CREATE POLICY "Admins can insert mamas" ON mamas
  FOR INSERT WITH CHECK (is_admin());

-- Only admins can update mamas
CREATE POLICY "Admins can update mamas" ON mamas
  FOR UPDATE USING (is_admin());

-- Only admins can delete mamas
CREATE POLICY "Admins can delete mamas" ON mamas
  FOR DELETE USING (is_admin());

-- RECIPES TABLE POLICIES
-- Anyone can read recipes (public content)
CREATE POLICY "Anyone can view recipes" ON recipes
  FOR SELECT USING (true);

-- Only admins can insert recipes
CREATE POLICY "Admins can insert recipes" ON recipes
  FOR INSERT WITH CHECK (is_admin());

-- Only admins can update recipes
CREATE POLICY "Admins can update recipes" ON recipes
  FOR UPDATE USING (is_admin());

-- Only admins can delete recipes
CREATE POLICY "Admins can delete recipes" ON recipes
  FOR DELETE USING (is_admin());

-- USER_PROGRESS TABLE POLICIES
-- Users can only see their own progress
CREATE POLICY "Users can view own progress" ON user_progress
  FOR SELECT USING (auth.uid() = user_id);

-- Users can insert their own progress
CREATE POLICY "Users can insert own progress" ON user_progress
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Users can update their own progress
CREATE POLICY "Users can update own progress" ON user_progress
  FOR UPDATE USING (auth.uid() = user_id);

-- Users can delete their own progress
CREATE POLICY "Users can delete own progress" ON user_progress
  FOR DELETE USING (auth.uid() = user_id);

-- Admins can manage all progress
CREATE POLICY "Admins can manage all progress" ON user_progress
  FOR ALL USING (is_admin());

-- FAVORITES TABLE POLICIES
-- Users can only see their own favorites
CREATE POLICY "Users can view own favorites" ON favorites
  FOR SELECT USING (auth.uid() = user_id);

-- Users can insert their own favorites
CREATE POLICY "Users can insert own favorites" ON favorites
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Users can delete their own favorites
CREATE POLICY "Users can delete own favorites" ON favorites
  FOR DELETE USING (auth.uid() = user_id);

-- Admins can manage all favorites
CREATE POLICY "Admins can manage all favorites" ON favorites
  FOR ALL USING (is_admin());

-- SHOPPING_LISTS TABLE POLICIES
-- Users can only see their own shopping lists
CREATE POLICY "Users can view own shopping lists" ON shopping_lists
  FOR SELECT USING (auth.uid() = user_id);

-- Users can insert their own shopping lists
CREATE POLICY "Users can insert own shopping lists" ON shopping_lists
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Users can update their own shopping lists
CREATE POLICY "Users can update own shopping lists" ON shopping_lists
  FOR UPDATE USING (auth.uid() = user_id);

-- Users can delete their own shopping lists
CREATE POLICY "Users can delete own shopping lists" ON shopping_lists
  FOR DELETE USING (auth.uid() = user_id);

-- Admins can manage all shopping lists
CREATE POLICY "Admins can manage all shopping lists" ON shopping_lists
  FOR ALL USING (is_admin());

-- VOICE_CACHE TABLE POLICIES
-- Voice cache is readable by authenticated users (for performance)
CREATE POLICY "Authenticated users can read voice cache" ON voice_cache
  FOR SELECT USING (auth.role() = 'authenticated');

-- Only admins and service role can insert voice cache
CREATE POLICY "Service role can insert voice cache" ON voice_cache
  FOR INSERT WITH CHECK (
    auth.role() = 'service_role' OR 
    is_admin()
  );

-- Only admins and service role can update voice cache
CREATE POLICY "Service role can update voice cache" ON voice_cache
  FOR UPDATE USING (
    auth.role() = 'service_role' OR 
    is_admin()
  );

-- Only admins and service role can delete voice cache
CREATE POLICY "Service role can delete voice cache" ON voice_cache
  FOR DELETE USING (
    auth.role() = 'service_role' OR 
    is_admin()
  );

-- Create function to automatically create profile on user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, username)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'username', split_part(NEW.email, '@', 1))
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to automatically create profile on user signup
CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create function to clean up expired voice cache
CREATE OR REPLACE FUNCTION cleanup_expired_voice_cache()
RETURNS INTEGER AS $$
DECLARE
  deleted_count INTEGER;
BEGIN
  DELETE FROM voice_cache WHERE expires_at < NOW();
  GET DIAGNOSTICS deleted_count = ROW_COUNT;
  RETURN deleted_count;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Grant necessary permissions
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT ALL ON ALL TABLES IN SCHEMA public TO anon, authenticated;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO anon, authenticated;
GRANT ALL ON ALL FUNCTIONS IN SCHEMA public TO anon, authenticated; 