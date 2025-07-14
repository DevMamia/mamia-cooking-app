'use client';

import { useEffect, useState, useCallback } from 'react';

interface ServiceWorkerState {
  isSupported: boolean;
  isRegistered: boolean;
  isInstalling: boolean;
  isWaitingForUpdate: boolean;
  hasUpdate: boolean;
  error: string | null;
}

export default function ServiceWorkerRegistration() {
  const [swState, setSwState] = useState<ServiceWorkerState>({
    isSupported: false,
    isRegistered: false,
    isInstalling: false,
    isWaitingForUpdate: false,
    hasUpdate: false,
    error: null,
  });

  const registerServiceWorker = useCallback(async () => {
    try {
      setSwState(prev => ({ ...prev, isInstalling: true }));

      const registration = await navigator.serviceWorker.register('/sw.js', {
        scope: '/',
      });

      console.log('✅ Service Worker registered successfully:', registration);

      // Handle different states
      if (registration.installing) {
        console.log('🔧 Service Worker installing...');
        trackInstalling(registration.installing);
      } else if (registration.waiting) {
        console.log('⏳ Service Worker waiting...');
        setSwState(prev => ({ 
          ...prev, 
          isWaitingForUpdate: true,
          hasUpdate: true 
        }));
      } else if (registration.active) {
        console.log('🚀 Service Worker active');
        setSwState(prev => ({ 
          ...prev, 
          isRegistered: true,
          isInstalling: false 
        }));
      }

      // Listen for updates
      registration.addEventListener('updatefound', () => {
        console.log('🔄 Service Worker update found');
        const newWorker = registration.installing;
        if (newWorker) {
          trackInstalling(newWorker);
        }
      });

      // Listen for controller change (new SW activated)
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        console.log('🔄 Service Worker controller changed');
        // Reload to get the new service worker
        window.location.reload();
      });

    } catch (error) {
      console.error('❌ Service Worker registration failed:', error);
      setSwState(prev => ({ 
        ...prev, 
        error: `Registration failed: ${error}`,
        isInstalling: false 
      }));
    }
  }, []);

  useEffect(() => {
    // Check if service workers are supported
    if ('serviceWorker' in navigator) {
      setSwState(prev => ({ ...prev, isSupported: true }));
      registerServiceWorker();
    } else {
      setSwState(prev => ({ 
        ...prev, 
        error: 'Service workers are not supported in this browser' 
      }));
    }
  }, [registerServiceWorker]);

  const trackInstalling = (worker: ServiceWorker) => {
    worker.addEventListener('statechange', () => {
      console.log('🔄 Service Worker state changed:', worker.state);
      
      switch (worker.state) {
        case 'installed':
          if (navigator.serviceWorker.controller) {
            // New worker installed, update available
            setSwState(prev => ({ 
              ...prev, 
              hasUpdate: true,
              isWaitingForUpdate: true,
              isInstalling: false 
            }));
          } else {
            // First install
            setSwState(prev => ({ 
              ...prev, 
              isRegistered: true,
              isInstalling: false 
            }));
          }
          break;
          
        case 'activated':
          setSwState(prev => ({ 
            ...prev, 
            isRegistered: true,
            isInstalling: false,
            hasUpdate: false,
            isWaitingForUpdate: false 
          }));
          break;
          
        case 'redundant':
          setSwState(prev => ({ 
            ...prev, 
            error: 'Service Worker became redundant',
            isInstalling: false 
          }));
          break;
      }
    });
  };

  const handleUpdate = async () => {
    if ('serviceWorker' in navigator) {
      const registration = await navigator.serviceWorker.getRegistration();
      if (registration?.waiting) {
        // Tell the waiting service worker to skip waiting
        registration.waiting.postMessage({ type: 'SKIP_WAITING' });
      }
    }
  };

  const handleCacheManagement = (action: string, payload?: any) => {
    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({
        type: action,
        payload
      });
    }
  };

  // Don't render anything in production - this is just for functionality
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  // Development UI for debugging
  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border max-w-sm z-50">
      <h3 className="font-bold text-sm mb-2">🔧 Service Worker Status</h3>
      
      <div className="text-xs space-y-1">
        <div className={`flex items-center gap-2 ${swState.isSupported ? 'text-green-600' : 'text-red-600'}`}>
          <span>{swState.isSupported ? '✅' : '❌'}</span>
          <span>Supported: {swState.isSupported ? 'Yes' : 'No'}</span>
        </div>
        
        <div className={`flex items-center gap-2 ${swState.isRegistered ? 'text-green-600' : 'text-yellow-600'}`}>
          <span>{swState.isRegistered ? '✅' : '⏳'}</span>
          <span>Registered: {swState.isRegistered ? 'Yes' : 'No'}</span>
        </div>
        
        {swState.isInstalling && (
          <div className="flex items-center gap-2 text-blue-600">
            <span>🔧</span>
            <span>Installing...</span>
          </div>
        )}
        
        {swState.hasUpdate && (
          <div className="mt-2">
            <div className="flex items-center gap-2 text-orange-600 mb-2">
              <span>🔄</span>
              <span>Update available!</span>
            </div>
            <button
              onClick={handleUpdate}
              className="bg-blue-500 text-white px-2 py-1 rounded text-xs"
            >
              Update Now
            </button>
          </div>
        )}
        
        {swState.error && (
          <div className="flex items-center gap-2 text-red-600">
            <span>❌</span>
            <span>{swState.error}</span>
          </div>
        )}
      </div>
      
      <div className="mt-3 pt-2 border-t">
        <div className="text-xs font-semibold mb-1">Cache Actions:</div>
        <div className="flex gap-1">
          <button
            onClick={() => handleCacheManagement('CLEAR_CACHE', { cacheName: 'mamia-voice-v1' })}
            className="bg-red-500 text-white px-2 py-1 rounded text-xs"
          >
            Clear Voice
          </button>
          <button
            onClick={() => handleCacheManagement('GET_CACHE_STATUS')}
            className="bg-gray-500 text-white px-2 py-1 rounded text-xs"
          >
            Status
          </button>
        </div>
      </div>
    </div>
  );
} 