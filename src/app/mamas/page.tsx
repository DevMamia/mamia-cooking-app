"use client";

import React from "react";
import { MamaCarousel } from "@/components/mama/MamaCarousel";

export default function MamasPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="text-center">
        <h1 className="text-mobile-xl font-bold mb-2" style={{ color: 'var(--terracotta)' }}>
          The Mamas
        </h1>
        <p className="text-gray-600 text-mobile">
          Authentic Recipes from Traditional Cooks
        </p>
      </div>

      {/* Mama Carousel */}
      <MamaCarousel />
    </div>
  );
} 