"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const LoadingSpinner = ({ size = 'md', color = 'orange' }: { 
  size?: 'sm' | 'md' | 'lg'; 
  color?: 'orange' | 'gray' | 'white';
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8', 
    lg: 'h-12 w-12'
  };

  const colorClasses = {
    orange: 'border-orange-600',
    gray: 'border-gray-600',
    white: 'border-white'
  };

  return (
    <div className={`animate-spin rounded-full border-2 border-t-transparent ${sizeClasses[size]} ${colorClasses[color]}`} />
  );
};

export const RecipeCardSkeleton = () => (
  <div className="bg-white rounded-2xl shadow-sm overflow-hidden animate-pulse">
    <div className="flex">
      <div className="w-32 h-32 bg-gray-200 flex-shrink-0" />
      <div className="flex-1 p-4">
        <div className="flex items-start justify-between mb-2">
          <div className="h-5 bg-gray-200 rounded w-3/4" />
          <div className="h-6 w-16 bg-gray-200 rounded-full" />
        </div>
        <div className="space-y-2 mb-3">
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-2/3" />
        </div>
        <div className="flex gap-4">
          <div className="h-4 w-16 bg-gray-200 rounded" />
          <div className="h-4 w-20 bg-gray-200 rounded" />
          <div className="h-4 w-12 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  </div>
);

export const ShoppingListSkeleton = () => (
  <div className="bg-white rounded-2xl shadow-md overflow-hidden">
    <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-4">
      <div className="h-6 bg-white/20 rounded w-48 mb-2" />
      <div className="h-4 bg-white/20 rounded w-24" />
    </div>
    <div className="p-4 space-y-3">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="flex items-center gap-3">
          <div className="w-5 h-5 bg-gray-200 rounded border-2" />
          <div className="flex-1 h-4 bg-gray-200 rounded" />
          <div className="w-8 h-4 bg-gray-200 rounded" />
        </div>
      ))}
    </div>
  </div>
);

export const MamaCardSkeleton = () => (
  <div className="bg-gray-200 rounded-3xl animate-pulse" style={{ height: '600px', maxWidth: '350px', margin: '0 auto' }}>
    <div className="p-8">
      <div className="text-center mb-6">
        <div className="h-8 bg-gray-300 rounded w-32 mx-auto mb-2" />
        <div className="h-12 bg-gray-300 rounded w-24 mx-auto" />
      </div>
      <div className="flex justify-center mb-6">
        <div className="w-44 h-44 bg-gray-300 rounded-full" />
      </div>
      <div className="space-y-4 mb-6">
        <div className="h-4 bg-gray-300 rounded w-full" />
        <div className="h-4 bg-gray-300 rounded w-3/4" />
        <div className="h-16 bg-gray-300 rounded w-full" />
        <div className="h-16 bg-gray-300 rounded w-full" />
      </div>
      <div className="h-12 bg-gray-300 rounded w-full" />
    </div>
  </div>
);

export const CategoryCarouselSkeleton = () => (
  <div className="flex gap-3 overflow-x-auto pb-2">
    {[1, 2, 3, 4, 5].map((i) => (
      <div key={i} className="flex flex-col items-center p-3 bg-gray-200 rounded-2xl min-w-[80px] animate-pulse">
        <div className="w-8 h-8 bg-gray-300 rounded mb-1" />
        <div className="h-3 w-12 bg-gray-300 rounded" />
      </div>
    ))}
  </div>
);

export const PageLoadingState = ({ message = "Loading..." }: { message?: string }) => (
  <div className="flex flex-col items-center justify-center min-h-96 px-4">
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <LoadingSpinner size="lg" />
      <p className="mt-4 text-gray-600 font-medium">{message}</p>
    </motion.div>
  </div>
);

export const ErrorState = ({ 
  title = "Something went wrong", 
  message = "Please try again later",
  onRetry 
}: { 
  title?: string; 
  message?: string; 
  onRetry?: () => void;
}) => (
  <div className="text-center py-12 px-4">
    <div className="text-6xl mb-4">😕</div>
    <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{message}</p>
    {onRetry && (
      <button
        onClick={onRetry}
        className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg transition-colors"
      >
        Try Again
      </button>
    )}
  </div>
);