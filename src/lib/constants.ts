export const API_ENDPOINTS = {
  RECIPES: '/api/recipes',
  MAMAS: '/api/mamas',
  AUTH: {
    LOGIN: '/api/auth/login',
    SIGNUP: '/api/auth/signup',
    LOGOUT: '/api/auth/logout',
  },
  PROFILES: '/api/profiles',
  FAVORITES: '/api/favorites',
  HEALTH: '/api/health',
} as const;

export const CACHE_KEYS = {
  RECIPES: 'recipes',
  MAMAS: 'mamas',
  USER: 'user',
  FAVORITES: 'favorites',
} as const;

export const DEFAULT_PAGINATION = {
  PAGE: 1,
  LIMIT: 10,
} as const;

export const MAMA_TYPES = ['nonna', 'abuela', 'mae'] as const;
export const DIFFICULTY_LEVELS = ['easy', 'medium', 'hard'] as const;
