"use client";

import React from 'react';
import { User } from 'lucide-react';

export function MobileHeader() {
  return (
    <header className="mobile-header">
      <div className="mobile-container h-full">
        <div className="flex items-center justify-between h-full px-4">
          {/* MAMIA Logo/Brand */}
          <div className="flex items-center">
            <h1 
              className="text-2xl font-bold"
              style={{ color: 'var(--terracotta)' }}
            >
              MAMIA
            </h1>
          </div>
          
          {/* Profile Icon */}
          <button 
            className="touch-target flex items-center justify-center rounded-full hover:bg-muted/50 transition-colors"
            aria-label="Profile"
          >
            <User 
              size={24} 
              className="text-gray-600 hover:text-terracotta transition-colors"
            />
          </button>
        </div>
      </div>
    </header>
  );
} 