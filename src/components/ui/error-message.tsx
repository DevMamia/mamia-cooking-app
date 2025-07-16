import React from 'react';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

export function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <div className="text-center p-4 bg-red-50 border border-red-200 rounded-lg">
      <p className="text-red-600 mb-2">{message}</p>
      {onRetry && (
        <button 
          onClick={onRetry}
          className="text-red-700 hover:text-red-900 underline"
        >
          Try again
        </button>
      )}
    </div>
  );
}
