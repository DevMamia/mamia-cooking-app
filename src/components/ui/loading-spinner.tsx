import React from 'react';

export function LoadingSpinner({ size = "medium" }: { size?: "small" | "medium" | "large" }) {
  const sizeClasses = {
    small: "h-4 w-4",
    medium: "h-8 w-8", 
    large: "h-12 w-12"
  };

  return (
    <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-primary ${sizeClasses[size]}`} />
  );
}
