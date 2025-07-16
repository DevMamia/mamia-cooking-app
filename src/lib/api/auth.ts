import { User, ApiResponse } from '../../types';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupCredentials {
  email: string;
  password: string;
  fullName?: string;
}

export interface AuthResponse {
  user: User;
  session: any;
}

export async function login(credentials: LoginCredentials): Promise<ApiResponse<AuthResponse>> {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Login failed');
  }
  
  return response.json();
}

export async function signup(credentials: SignupCredentials): Promise<ApiResponse<AuthResponse>> {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Signup failed');
  }
  
  return response.json();
}

export async function logout(): Promise<ApiResponse<null>> {
  const response = await fetch('/api/auth/logout', {
    method: 'POST',
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Logout failed');
  }
  
  return response.json();
}
