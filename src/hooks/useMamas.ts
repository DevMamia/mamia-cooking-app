import { useState, useEffect } from 'react';
import { Mama } from '../types';
import { getMamas, MamasParams } from '../lib/api/mamas';

export function useMamas(params: MamasParams = {}) {
  const [mamas, setMamas] = useState<Mama[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMamas = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await getMamas(params);
        
        if (response.success) {
          setMamas(response.data);
        } else {
          setError(response.error || 'Failed to fetch mamas');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchMamas();
  }, [JSON.stringify(params)]);

  return { mamas, loading, error };
}
