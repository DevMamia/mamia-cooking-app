"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui";

export interface MamaData {
  id: string;
  name: string;
  title: string;
  cuisine: string;
  description: string;
  signatureDish: string;
  quote: string;
  backgroundColor: string;
  primaryColor: string;
  secondaryColor: string;
  illustration: string;
}

interface MamaCardProps {
  mama: MamaData;
}

// Character data that matches the beautiful illustrated cards
const characterData: Record<string, MamaData> = {
  nonna: {
    id: 'nonna',
    name: 'Nonna Lucia',
    title: 'LUCIA',
    cuisine: 'Italian',
    description: 'Slow heat, big hugs, and an extra splash of olive oil - that\'s Nonna\'s secret to pasta and life.',
    signatureDish: 'Carbonara',
    quote: 'Ciao tesoro! In my kitchen, we cook con amore - with love.',
    backgroundColor: '#D4A574',
    primaryColor: '#8B4513',
    secondaryColor: '#DAA520',
    illustration: '🍝' // Placeholder for pasta illustration
  },
  mae: {
    id: 'mae',
    name: 'Mae Malai',
    title: 'MALAI',
    cuisine: 'Thai',
    description: 'A fiery wok and gentle smile give Malai her charm - she seasons curry (and worries) with patience and a touch of palm sugar.',
    signatureDish: 'Green Curry',
    quote: 'กินข้าวให้อร่อยนะ : "Enjoy every bite, dear."',
    backgroundColor: '#8FBC8F',
    primaryColor: '#2E7D32',
    secondaryColor: '#66BB6A',
    illustration: '🥄' // Placeholder for mortar & pestle illustration
  },
  abuela: {
    id: 'abuela',
    name: 'Abuela Rosa',
    title: 'ROSA',
    cuisine: 'Mexican',
    description: 'Stories sizzle in her skillet; smoky chiles and laughter make every meal feel like Sunday in Oaxaca.',
    signatureDish: 'Chicken Tinga',
    quote: 'Cariño! Come, let Abuela teach you the secrets of our familia!',
    backgroundColor: '#20B2AA',
    primaryColor: '#FF4500',
    secondaryColor: '#FFD700',
    illustration: '🌮' // Placeholder for tortilla illustration
  }
};

export const MamaCard = React.memo(function MamaCard({ mama }: MamaCardProps) {
  const router = useRouter();
  
  // Use the enhanced character data
  const enhancedMama = characterData[mama.id] || mama;

  const handleOpenCookbook = () => {
    router.push(`/mamas/${mama.id}/cookbook`);
  };

  return (
    <div className="w-full flex justify-center px-4">
      <div
        className="relative rounded-3xl p-8 flex flex-col cursor-pointer transform transition-transform hover:scale-105"
        style={{
          backgroundColor: enhancedMama.backgroundColor,
          height: '600px',
          width: '100%',
          maxWidth: '350px',
          flexShrink: 0,
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15), 0 10px 20px rgba(0, 0, 0, 0.1)',
          background: `linear-gradient(135deg, ${enhancedMama.backgroundColor} 0%, ${enhancedMama.secondaryColor}20 100%)`
        }}
        onClick={handleOpenCookbook}
      >
      {/* Character Name Header */}
      <div className="text-center mb-6">
        <h2 
          className="text-2xl font-bold tracking-wide"
          style={{ color: enhancedMama.primaryColor }}
        >
          {enhancedMama.name}
        </h2>
        <h1 
          className="text-4xl font-black tracking-wider mt-1"
          style={{ color: enhancedMama.primaryColor }}
        >
          {enhancedMama.title}
        </h1>
      </div>

      {/* Character Illustration */}
      <div className="flex justify-center mb-6">
        <div 
          className="rounded-full flex items-center justify-center relative"
          style={{
            width: '180px',
            height: '180px',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
            border: `4px solid ${enhancedMama.primaryColor}20`
          }}
        >
          {/* Character Illustration Placeholder */}
          <div className="text-8xl opacity-80">
            {enhancedMama.illustration}
          </div>
          
          {/* Small cultural icon */}
          <div 
            className="absolute bottom-2 right-2 w-8 h-8 rounded-full flex items-center justify-center"
            style={{ backgroundColor: enhancedMama.primaryColor }}
          >
            <span className="text-white text-sm">
              {enhancedMama.id === 'nonna' && '🇮🇹'}
              {enhancedMama.id === 'mae' && '🇹🇭'}
              {enhancedMama.id === 'abuela' && '🇲🇽'}
            </span>
          </div>
        </div>
      </div>

      {/* Character Description */}
      <div className="text-center mb-6 flex-1">
        <p 
          className="text-base leading-relaxed font-medium italic mb-6"
          style={{ color: enhancedMama.primaryColor }}
        >
          {enhancedMama.description}
        </p>

        {/* Signature Dish */}
        <div 
          className="bg-white bg-opacity-90 rounded-2xl p-4 mb-4 shadow-lg"
          style={{ borderTop: `4px solid ${enhancedMama.primaryColor}` }}
        >
          <p 
            className="text-sm font-bold uppercase tracking-wide mb-1"
            style={{ color: enhancedMama.primaryColor }}
          >
            SIGNATURE DISH
          </p>
          <p 
            className="text-xl font-black"
            style={{ color: enhancedMama.primaryColor }}
          >
            {enhancedMama.signatureDish}
          </p>
        </div>

        {/* Mama Says Quote */}
        <div 
          className="bg-white bg-opacity-90 rounded-2xl p-4 mb-6 shadow-lg"
          style={{ borderTop: `4px solid ${enhancedMama.primaryColor}` }}
        >
          <p 
            className="text-sm font-bold uppercase tracking-wide mb-2"
            style={{ color: enhancedMama.primaryColor }}
          >
            MAMA SAYS
          </p>
          <p 
            className="text-sm italic leading-relaxed"
            style={{ color: enhancedMama.primaryColor }}
          >
            {enhancedMama.quote}
          </p>
        </div>
      </div>

      {/* Action Button */}
      <div className="mt-auto">
        <Button 
          className="w-full font-bold py-4 rounded-2xl transition-all duration-300 transform hover:scale-105"
          style={{
            backgroundColor: enhancedMama.primaryColor,
            color: 'white',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            border: 'none',
            fontSize: '16px'
          }}
          onClick={(e) => {
            e.stopPropagation();
            handleOpenCookbook();
          }}
        >
          <span className="mr-2">
            {enhancedMama.id === 'nonna' && '🍝'}
            {enhancedMama.id === 'mae' && '🥄'}
            {enhancedMama.id === 'abuela' && '🌮'}
          </span>
          Open {enhancedMama.name}&rsquo;s Cookbook
        </Button>
      </div>
      </div>
    </div>
  );
}); 