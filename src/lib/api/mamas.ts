import { Mama, ApiResponse } from '../../types';

export interface MamasParams {
  cuisine?: string;
}

export async function getMamas(params: MamasParams = {}): Promise<ApiResponse<Mama[]>> {
  const searchParams = new URLSearchParams();
  
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      searchParams.append(key, value.toString());
    }
  });

  const response = await fetch(`/api/mamas?${searchParams.toString()}`);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch mamas: ${response.statusText}`);
  }
  
  return response.json();
}
