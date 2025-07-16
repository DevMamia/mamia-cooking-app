import { useState, useEffect } from 'react';
import { getFavorites, Favorite } from '../lib/api/favorites';

export function useFavorites() {
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await getFavorites();
        
        if (response.success) {
          setFavorites(response.data);
        } else {
          setError(response.error || 'Failed to fetch favorites');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  const refetch = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await getFavorites();
      
      if (response.success) {
        setFavorites(response.data);
      } else {
        setError(response.error || 'Failed to fetch favorites');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return { favorites, loading, error, refetch };
}
