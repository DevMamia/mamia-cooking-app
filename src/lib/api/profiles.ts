import { User, ApiResponse } from '@/types';

export async function getProfile(): Promise<ApiResponse<User>> {
  const response = await fetch('/api/profiles');
  
  if (!response.ok) {
    throw new Error(`Failed to fetch profile: ${response.statusText}`);
  }
  
  return response.json();
}

export async function updateProfile(updates: Partial<User>): Promise<ApiResponse<User>> {
  const response = await fetch('/api/profiles', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updates),
  });
  
  if (!response.ok) {
    throw new Error(`Failed to update profile: ${response.statusText}`);
  }
  
  return response.json();
}
