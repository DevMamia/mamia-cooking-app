import { createClient } from '@supabase/supabase-js';
import { Database } from '@/types/supabase';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://demo-project.supabase.co';
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'demo-anon-key';

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY);

export interface User {
  id: string;
  email: string;
  username?: string;
  avatar_url?: string;
  cooking_level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  dietary_preferences?: string[];
  favorite_mama_id?: string;
  subscription_tier?: 'free' | 'premium' | 'family';
}

export class AuthService {
  // Sign up with email and password
  async signUp(email: string, password: string, username: string) {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            username,
            cooking_level: 'beginner'
          }
        }
      });

      if (error) throw error;
      return { user: data.user, error: null };
    } catch (error: any) {
      console.error('Sign up error:', error);
      return { user: null, error: error.message };
    }
  }

  // Sign in with email and password
  async signIn(email: string, password: string) {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) throw error;
      return { user: data.user, session: data.session, error: null };
    } catch (error: any) {
      console.error('Sign in error:', error);
      return { user: null, session: null, error: error.message };
    }
  }

  // Sign out
  async signOut() {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      return { error: null };
    } catch (error: any) {
      console.error('Sign out error:', error);
      return { error: error.message };
    }
  }

  // Get current user
  async getCurrentUser() {
    try {
      const { data: { user }, error } = await supabase.auth.getUser();
      if (error) throw error;
      return user;
    } catch (error) {
      console.error('Get user error:', error);
      return null;
    }
  }

  // Get current session
  async getCurrentSession() {
    try {
      const { data: { session }, error } = await supabase.auth.getSession();
      if (error) throw error;
      return session;
    } catch (error) {
      console.error('Get session error:', error);
      return null;
    }
  }

  // Listen to auth changes
  onAuthStateChange(callback: (event: string, session: any) => void) {
    return supabase.auth.onAuthStateChange(callback);
  }

  // Reset password
  async resetPassword(email: string) {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/reset-password`
      });
      if (error) throw error;
      return { error: null };
    } catch (error: any) {
      console.error('Reset password error:', error);
      return { error: error.message };
    }
  }

  // Update password
  async updatePassword(password: string) {
    try {
      const { error } = await supabase.auth.updateUser({ password });
      if (error) throw error;
      return { error: null };
    } catch (error: any) {
      console.error('Update password error:', error);
      return { error: error.message };
    }
  }

  // Mock authentication for development
  async mockSignIn(username: string): Promise<{ user: User | null; error: string | null }> {
    // Create a mock user for development
    const mockUser: User = {
      id: `mock-${Date.now()}`,
      email: `${username}@example.com`,
      username,
      cooking_level: 'beginner',
      dietary_preferences: [],
      subscription_tier: 'free'
    };

    // Store in localStorage for persistence
    localStorage.setItem('mamia_mock_user', JSON.stringify(mockUser));
    
    return { user: mockUser, error: null };
  }

  // Get mock user
  getMockUser(): User | null {
    try {
      const stored = localStorage.getItem('mamia_mock_user');
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  }

  // Mock sign out
  mockSignOut() {
    localStorage.removeItem('mamia_mock_user');
  }
}

export const auth = new AuthService(); 