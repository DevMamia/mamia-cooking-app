import { ApiResponse } from '@/types';
import type { Recipe } from '@/types';

export interface Favorite {
  id: string;
  user_id: string;
  recipe_id: string;
  created_at: string;
  recipes?: Recipe;
}

export async function getFavorites(): Promise<ApiResponse<Favorite[]>> {
  const response = await fetch('/api/favorites');
  
  if (!response.ok) {
    throw new Error(`Failed to fetch favorites: ${response.statusText}`);
  }
  
  return response.json();
}

export async function addFavorite(recipe_id: string): Promise<ApiResponse<Favorite>> {
  const response = await fetch('/api/favorites', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ recipe_id }),
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to add favorite');
  }
  
  return response.json();
}

export async function removeFavorite(recipe_id: string): Promise<ApiResponse<null>> {
  const response = await fetch(`/api/favorites/${recipe_id}`, {
    method: 'DELETE',
  });
  
  if (!response.ok) {
    throw new Error(`Failed to remove favorite: ${response.statusText}`);
  }
  
  return response.json();
}
