import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '../../../lib/supabase/server';

export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient();
    const { searchParams } = new URL(request.url);
    
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const mamaId = searchParams.get('mama_id');
    const difficulty = searchParams.get('difficulty');
    const cuisine = searchParams.get('cuisine');
    
    let query = supabase
      .from('recipes')
      .select(`
        *,
        mamas (
          id,
          name,
          cuisine_type,
          personality_traits,
          voice_id,
          accent_description
        )
      `)
      .order('created_at', { ascending: false });

    if (mamaId) {
      query = query.eq('mama_id', mamaId);
    }
    
    if (difficulty) {
      query = query.eq('difficulty_level', difficulty);
    }
    
    if (cuisine) {
      query = query.eq('mamas.cuisine_type', cuisine);
    }

    const from = (page - 1) * limit;
    const to = from + limit - 1;
    
    const { data: recipes, error, count } = await query
      .range(from, to)
      .limit(limit);

    if (error) {
      console.error('Database error:', error);
      return NextResponse.json(
        { error: 'Failed to fetch recipes', success: false },
        { status: 500 }
      );
    }

    return NextResponse.json({
      data: recipes || [],
      success: true,
      pagination: {
        page,
        limit,
        total: count || 0,
        totalPages: Math.ceil((count || 0) / limit)
      }
    });

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error', success: false },
      { status: 500 }
    );
  }
}
