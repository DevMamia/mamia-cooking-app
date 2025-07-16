import { Recipe, ApiResponse, PaginatedResponse } from '@/types';

export interface RecipesParams {
  page?: number;
  limit?: number;
  mama_id?: string;
  difficulty?: string;
  cuisine?: string;
}

export async function getRecipes(params: RecipesParams = {}): Promise<PaginatedResponse<Recipe>> {
  const searchParams = new URLSearchParams();
  
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      searchParams.append(key, value.toString());
    }
  });

  const response = await fetch(`/api/recipes?${searchParams.toString()}`);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch recipes: ${response.statusText}`);
  }
  
  return response.json();
}

export async function getRecipe(id: string): Promise<ApiResponse<Recipe>> {
  const response = await fetch(`/api/recipes/${id}`);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch recipe: ${response.statusText}`);
  }
  
  return response.json();
}
