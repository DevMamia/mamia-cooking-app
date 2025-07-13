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
      className="relative rounded-2xl p-6 flex flex-col animate-scale cursor-pointer"
      style={{
        backgroundColor: mama.backgroundColor,
        height: '400px',
        width: '100%',
        maxWidth: '280px',
        margin: '0 auto',
        flexShrink: 0,
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15), 0 4px 10px rgba(0, 0, 0, 0.1)'
      }}
      onClick={handleOpenCookbook}
    >
      {/* Character Illustration Placeholder */}
      <div className="flex justify-center mb-4">
        <div 
          className="rounded-full flex items-center justify-center"
          style={{
            width: '160px',
            height: '160px',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
          }}
        >
          <div className="text-5xl">
            {mama.id === 'nonna' && '👵🏻'}
            {mama.id === 'abuela' && '👵🏽'}
            {mama.id === 'mae' && '👵🏾'}
          </div>
        </div>
      </div>

      {/* Character Info */}
      <div className="text-center text-white space-y-2 flex-1 flex flex-col justify-center">
        <h3 className="text-xl font-bold">{mama.name}</h3>
        <p className="text-base opacity-90 font-medium">{mama.cuisine} Cuisine</p>
        <p className="text-sm opacity-80 leading-relaxed px-2">
          {mama.introduction}
        </p>
        <p className="text-sm font-medium opacity-90 mt-2">
          <span className="opacity-70">Famous for:</span><br />
          {mama.signatureDish}
        </p>
      </div>

      {/* Action Button - Positioned at absolute bottom */}
      <div className="mt-4">
        <Button 
          className="w-full bg-white text-gray-800 hover:bg-gray-100 font-semibold py-3 rounded-xl transition-all duration-200"
          style={{
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
          }}
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