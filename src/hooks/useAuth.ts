import { useState, useEffect } from 'react';
import { createClient } from '../lib/supabase/client';
import type { User as SupabaseUser } from '@supabase/supabase-js';
import { User } from '../types';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user ? mapSupabaseUser(user) : null);
      setLoading(false);
    };

    getUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (_, session) => {
        setUser(session?.user ? mapSupabaseUser(session.user) : null);
        setLoading(false);
      }
    );

    return () => subscription.unsubscribe();
  }, [supabase.auth]);

  return { user, loading };
}

function mapSupabaseUser(supabaseUser: SupabaseUser): User {
  return {
    id: supabaseUser.id,
    email: supabaseUser.email || '',
    name: supabaseUser.user_metadata?.full_name || supabaseUser.email || '',
    avatar_url: supabaseUser.user_metadata?.avatar_url,
    created_at: supabaseUser.created_at,
    updated_at: supabaseUser.updated_at || supabaseUser.created_at,
  };
}
