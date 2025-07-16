import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '../../../lib/supabase/server';

export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient();
    const { searchParams } = new URL(request.url);
    
    const cuisine = searchParams.get('cuisine');
    
    let query = supabase
      .from('mamas')
      .select('*')
      .order('name');

    if (cuisine) {
      query = query.eq('cuisine_type', cuisine);
    }

    const { data: mamas, error } = await query;

    if (error) {
      console.error('Database error:', error);
      return NextResponse.json(
        { error: 'Failed to fetch mamas', success: false },
        { status: 500 }
      );
    }

    return NextResponse.json({
      data: mamas || [],
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
