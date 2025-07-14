import React from "react";

interface BrandLogoProps {
  size?: "small" | "medium" | "large";
  className?: string;
}

export function BrandLogo({ size = "medium", className = "" }: BrandLogoProps) {
  const sizeClasses = {
    small: "w-8 h-8",
    medium: "w-12 h-12",
    large: "w-16 h-16"
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Hands kneading dough - simplified version */}
        <g fill="#8B4513">
          {/* Left hand */}
          <path d="M20 45 C18 40, 22 35, 28 38 C30 40, 32 45, 30 50 C28 55, 22 52, 20 45" />
          
          {/* Right hand */}
          <path d="M80 45 C82 40, 78 35, 72 38 C70 40, 68 45, 70 50 C72 55, 78 52, 80 45" />
          
          {/* Dough/bowl */}
          <ellipse cx="50" cy="55" rx="25" ry="12" fill="#D4A574" />
          
          {/* Wooden spoon/utensil */}
          <rect x="45" y="40" width="3" height="20" rx="1.5" fill="#8B4513" />
          <ellipse cx="46.5" cy="38" rx="4" ry="2" fill="#8B4513" />
        </g>
      </svg>
    </div>
  );
}

export default BrandLogo; 