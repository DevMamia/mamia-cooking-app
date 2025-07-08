"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui";

export interface MamaData {
  id: string;
  name: string;
  cuisine: string;
  introduction: string;
  signatureDish: string;
  backgroundColor: string;
  primaryColor: string;
}

interface MamaCardProps {
  mama: MamaData;
}

export function MamaCard({ mama }: MamaCardProps) {
  const router = useRouter();

  const handleOpenCookbook = () => {
    router.push(`/mamas/${mama.id}/cookbook`);
  };

  return (
    <div 
      className="relative rounded-2xl p-6 flex flex-col justify-between animate-scale cursor-pointer shadow-lg"
      style={{ 
        backgroundColor: mama.backgroundColor,
        height: '400px',
        width: '280px',
        flexShrink: 0
      }}
      onClick={handleOpenCookbook}
    >
      {/* Character Illustration Placeholder */}
      <div className="flex justify-center mb-4">
        <div 
          className="rounded-full flex items-center justify-center shadow-md"
          style={{
            width: '200px',
            height: '200px',
            backgroundColor: 'rgba(255, 255, 255, 0.9)'
          }}
        >
          <div className="text-6xl">
            {mama.id === 'nonna' && '👵🏻'}
            {mama.id === 'abuela' && '👵🏽'}
            {mama.id === 'mae' && '👵🏾'}
          </div>
        </div>
      </div>

      {/* Character Info */}
      <div className="text-center text-white space-y-2">
        <h3 className="text-2xl font-bold">{mama.name}</h3>
        <p className="text-lg opacity-90">{mama.cuisine} Cuisine</p>
        <p className="text-sm opacity-80 leading-relaxed">
          {mama.introduction}
        </p>
        <p className="text-sm font-medium opacity-90">
          Famous for: {mama.signatureDish}
        </p>
      </div>

      {/* Action Button */}
      <div className="mt-auto">
        <Button 
          className="w-full bg-white text-gray-800 hover:bg-gray-100 font-semibold py-3 rounded-xl transition-all duration-200 shadow-md"
          onClick={(e) => {
            e.stopPropagation();
            handleOpenCookbook();
          }}
        >
          Open {mama.name}&rsquo;s Cookbook
        </Button>
      </div>
    </div>
  );
} 