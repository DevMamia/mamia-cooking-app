// MAMIA Service Worker - Offline-First Cooking Experience
// Version 1.0.0

const CACHE_NAME = 'mamia-v1';
const VOICE_CACHE_NAME = 'mamia-voice-v1';
const RECIPE_CACHE_NAME = 'mamia-recipes-v1';

// Core app files to cache
const CORE_CACHE_FILES = [
  '/',
  '/mamas',
  '/recipes',
  '/cook',
  '/kitchen',
  '/profile',
  '/_next/static/css/app/layout.css',
  '/_next/static/chunks/webpack.js',
  '/_next/static/chunks/main-app.js',
  '/favicon.ico'
];

// Voice files and audio assets
const VOICE_CACHE_FILES = [
  // Will be populated dynamically with voice URLs
];

// Recipe data and images
const RECIPE_CACHE_FILES = [
  // Will be populated dynamically with recipe data
];

// Install event - cache core files
self.addEventListener('install', (event) => {
  console.log('🔧 MAMIA Service Worker installing...');
  
  event.waitUntil(
    Promise.all([
      // Cache core app files
      caches.open(CACHE_NAME).then((cache) => {
        console.log('📦 Caching core app files');
        return cache.addAll(CORE_CACHE_FILES);
      }),
      
      // Initialize voice cache
      caches.open(VOICE_CACHE_NAME).then((cache) => {
        console.log('🎙️ Initializing voice cache');
        return Promise.resolve();
      }),
      
      // Initialize recipe cache
      caches.open(RECIPE_CACHE_NAME).then((cache) => {
        console.log('🍳 Initializing recipe cache');
        return Promise.resolve();
      })
    ]).then(() => {
      console.log('✅ MAMIA Service Worker installed successfully');
      // Force activation
      return self.skipWaiting();
    })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('🚀 MAMIA Service Worker activating...');
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          // Delete old caches
          if (cacheName !== CACHE_NAME && 
              cacheName !== VOICE_CACHE_NAME && 
              cacheName !== RECIPE_CACHE_NAME) {
            console.log('🗑️ Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('✅ MAMIA Service Worker activated');
      // Take control of all pages
      return self.clients.claim();
    })
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  // Handle different types of requests
  if (url.pathname.startsWith('/api/voice/')) {
    // Voice API - cache with network first strategy
    event.respondWith(handleVoiceRequest(request));
  } else if (url.pathname.startsWith('/api/recipes/')) {
    // Recipe API - cache with stale while revalidate
    event.respondWith(handleRecipeRequest(request));
  } else if (url.pathname.includes('audio') || url.pathname.includes('.mp3')) {
    // Audio files - cache first strategy
    event.respondWith(handleAudioRequest(request));
  } else if (url.pathname.startsWith('/_next/static/')) {
    // Static assets - cache first strategy
    event.respondWith(handleStaticRequest(request));
  } else {
    // App routes - network first with fallback
    event.respondWith(handleAppRequest(request));
  }
});

// Voice request handler - prioritize cache for offline cooking
async function handleVoiceRequest(request) {
  const url = new URL(request.url);
  
  try {
    // For voice generation, check cache first during cooking mode
    if (url.searchParams.get('offline') === 'true') {
      const cachedResponse = await caches.match(request, { 
        cacheName: VOICE_CACHE_NAME 
      });
      
      if (cachedResponse) {
        console.log('🎙️ Serving cached voice:', request.url);
        return cachedResponse;
      }
    }
    
    // Try network first
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      // Cache successful voice responses
      const cache = await caches.open(VOICE_CACHE_NAME);
      cache.put(request, networkResponse.clone());
      console.log('🎙️ Cached voice response:', request.url);
    }
    
    return networkResponse;
  } catch (error) {
    console.log('🎙️ Network failed, checking voice cache:', error);
    
    // Fallback to cache
    const cachedResponse = await caches.match(request, { 
      cacheName: VOICE_CACHE_NAME 
    });
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return offline voice message
    return new Response(JSON.stringify({
      error: 'Voice service unavailable offline',
      offline: true,
      fallback: 'Please check your connection and try again'
    }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

// Recipe request handler - stale while revalidate
async function handleRecipeRequest(request) {
  const cache = await caches.open(RECIPE_CACHE_NAME);
  
  try {
    // Get from cache first
    const cachedResponse = await cache.match(request);
    
    // Fetch from network in background
    const networkPromise = fetch(request).then((networkResponse) => {
      if (networkResponse.ok) {
        cache.put(request, networkResponse.clone());
        console.log('🍳 Updated recipe cache:', request.url);
      }
      return networkResponse;
    });
    
    // Return cached version immediately if available
    if (cachedResponse) {
      console.log('🍳 Serving cached recipe:', request.url);
      networkPromise.catch(() => {}); // Ignore network errors
      return cachedResponse;
    }
    
    // Wait for network if no cache
    return await networkPromise;
  } catch (error) {
    console.log('🍳 Recipe request failed:', error);
    
    // Try cache as fallback
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return offline recipe list
    return new Response(JSON.stringify({
      error: 'Recipes unavailable offline',
      offline: true,
      cached_recipes: await getCachedRecipeList()
    }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

// Audio request handler - cache first
async function handleAudioRequest(request) {
  const cache = await caches.open(VOICE_CACHE_NAME);
  
  try {
    // Check cache first
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      console.log('🔊 Serving cached audio:', request.url);
      return cachedResponse;
    }
    
    // Fetch from network
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      // Cache audio files
      cache.put(request, networkResponse.clone());
      console.log('🔊 Cached audio file:', request.url);
    }
    
    return networkResponse;
  } catch (error) {
    console.log('🔊 Audio request failed:', error);
    
    // Return audio unavailable response
    return new Response('Audio unavailable offline', {
      status: 503,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
}

// Static assets handler - cache first
async function handleStaticRequest(request) {
  const cache = await caches.open(CACHE_NAME);
  
  try {
    // Check cache first
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Fetch from network
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    // Try cache as fallback
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    throw error;
  }
}

// App routes handler - network first with fallback
async function handleAppRequest(request) {
  const cache = await caches.open(CACHE_NAME);
  
  try {
    // Try network first
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      // Cache successful responses
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.log('📱 Network failed for app route:', request.url);
    
    // Fallback to cache
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Fallback to offline page
    return cache.match('/') || new Response('Offline - Please check your connection', {
      status: 503,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
}

// Helper function to get cached recipe list
async function getCachedRecipeList() {
  const cache = await caches.open(RECIPE_CACHE_NAME);
  const keys = await cache.keys();
  
  return keys
    .filter(request => request.url.includes('/api/recipes/'))
    .map(request => ({
      url: request.url,
      cached: true
    }));
}

// Background sync for voice pre-caching
self.addEventListener('sync', (event) => {
  if (event.tag === 'voice-precache') {
    console.log('🔄 Background sync: Pre-caching voice files');
    event.waitUntil(preCacheVoiceFiles());
  }
});

// Pre-cache common voice files
async function preCacheVoiceFiles() {
  try {
    const response = await fetch('/api/voice/generate?action=common-phrases');
    const phrases = await response.json();
    
    const cache = await caches.open(VOICE_CACHE_NAME);
    
    for (const phrase of phrases) {
      try {
        const voiceResponse = await fetch('/api/voice/generate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            text: phrase.text,
            voiceId: phrase.voiceId,
            variationType: phrase.category
          })
        });
        
        if (voiceResponse.ok) {
          await cache.put(`voice-${phrase.id}`, voiceResponse.clone());
          console.log('✅ Pre-cached voice phrase:', phrase.text.substring(0, 30));
        }
      } catch (error) {
        console.error('❌ Failed to pre-cache phrase:', phrase.text, error);
      }
    }
  } catch (error) {
    console.error('❌ Voice pre-caching failed:', error);
  }
}

// Message handling for cache management
self.addEventListener('message', (event) => {
  const { type, payload } = event.data;
  
  switch (type) {
    case 'CACHE_VOICE':
      cacheVoiceFile(payload.url, payload.key);
      break;
      
    case 'CACHE_RECIPE':
      cacheRecipeData(payload.recipe);
      break;
      
    case 'CLEAR_CACHE':
      clearSpecificCache(payload.cacheName);
      break;
      
    case 'GET_CACHE_STATUS':
      getCacheStatus().then(status => {
        event.ports[0].postMessage(status);
      });
      break;
      
    default:
      console.log('Unknown message type:', type);
  }
});

// Cache voice file
async function cacheVoiceFile(url, key) {
  try {
    const cache = await caches.open(VOICE_CACHE_NAME);
    const response = await fetch(url);
    
    if (response.ok) {
      await cache.put(key, response);
      console.log('✅ Cached voice file:', key);
    }
  } catch (error) {
    console.error('❌ Failed to cache voice file:', error);
  }
}

// Cache recipe data
async function cacheRecipeData(recipe) {
  try {
    const cache = await caches.open(RECIPE_CACHE_NAME);
    const response = new Response(JSON.stringify(recipe), {
      headers: { 'Content-Type': 'application/json' }
    });
    
    await cache.put(`recipe-${recipe.id}`, response);
    console.log('✅ Cached recipe:', recipe.title);
  } catch (error) {
    console.error('❌ Failed to cache recipe:', error);
  }
}

// Clear specific cache
async function clearSpecificCache(cacheName) {
  try {
    await caches.delete(cacheName);
    console.log('✅ Cleared cache:', cacheName);
  } catch (error) {
    console.error('❌ Failed to clear cache:', error);
  }
}

// Get cache status
async function getCacheStatus() {
  try {
    const cacheNames = await caches.keys();
    const status = {};
    
    for (const cacheName of cacheNames) {
      const cache = await caches.open(cacheName);
      const keys = await cache.keys();
      status[cacheName] = {
        size: keys.length,
        keys: keys.map(key => key.url)
      };
    }
    
    return status;
  } catch (error) {
    console.error('❌ Failed to get cache status:', error);
    return {};
  }
}

console.log('🎙️ MAMIA Service Worker loaded - Ready for offline cooking!'); 