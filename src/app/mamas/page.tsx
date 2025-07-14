"use client";

import React from "react";
import { MamaCarousel } from "@/components/mama/MamaCarousel";

export default function MamasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Full screen carousel */}
      <div className="w-full">
        <MamaCarousel />
      </div>
    </div>
  );
} 