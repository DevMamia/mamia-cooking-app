"use client";

import React from "react";
import { MamaCarousel } from "@/components/mama/MamaCarousel";

export default function MamasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 px-4">
      {/* Page Header */}
      <div className="text-center pt-8 pb-4">
        <h1 className="text-3xl font-bold mb-2" style={{ color: '#8B4513' }}>
          The Mamas
        </h1>
        <p className="text-gray-600 text-lg">
          Authentic Recipes from Traditional Cooks
        </p>
      </div>

      {/* Full screen carousel with integrated header */}
      <div className="max-w-6xl mx-auto">
        <MamaCarousel />
      </div>

      {/* Optional footer section */}
      <div className="text-center mt-16 pb-8">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-xl font-bold mb-4" style={{ color: '#8B4513' }}>
            Learn from the Best
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Each mama brings generations of authentic recipes, cultural stories, and cooking wisdom 
            directly to your kitchen. Choose your guide and start your culinary journey today.
          </p>
        </div>
      </div>
    </div>
  );
} 