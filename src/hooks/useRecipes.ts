import { useState, useEffect } from 'react';
import { Recipe } from '../types';
import { getRecipes, RecipesParams } from '../lib/api/recipes';

export function useRecipes(params: RecipesParams = {}) {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0
  });

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await getRecipes(params);
        
        if (response.success) {
          setRecipes(response.data);
          if (response.pagination) {
            setPagination(response.pagination);
          }
        } else {
          setError(response.error || 'Failed to fetch recipes');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [JSON.stringify(params)]);

  return { recipes, loading, error, pagination };
}
