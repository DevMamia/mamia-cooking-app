import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function GET() {
  try {
    const supabase = await createClient();

    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json(
        { error: 'Unauthorized', success: false },
        { status: 401 }
      );
    }

    const { data: favorites, error } = await supabase
      .from('favorites')
      .select(`
        *,
        recipes (
          *,
          mamas (
            id,
            name,
            cuisine_type,
            personality_traits
          )
        )
      `)
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Database error:', error);
      return NextResponse.json(
        { error: 'Failed to fetch favorites', success: false },
        { status: 500 }
      );
    }

    return NextResponse.json({
      data: favorites || [],
      success: true
    });

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error', success: false },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();

    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json(
        { error: 'Unauthorized', success: false },
        { status: 401 }
      );
    }

    const { recipe_id } = await request.json();

    if (!recipe_id) {
      return NextResponse.json(
        { error: 'Recipe ID is required', success: false },
        { status: 400 }
      );
    }

    const { data: favorite, error } = await supabase
      .from('favorites')
      .insert({
        user_id: user.id,
        recipe_id
      })
      .select()
      .single();

    if (error) {
      if (error.code === '23505') {
        return NextResponse.json(
          { error: 'Recipe already in favorites', success: false },
          { status: 409 }
        );
      }
      
      console.error('Database error:', error);
      return NextResponse.json(
        { error: 'Failed to add favorite', success: false },
        { status: 500 }
      );
    }

    return NextResponse.json({
      data: favorite,
      success: true
    });

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error', success: false },
      { status: 500 }
    );
  }
}
