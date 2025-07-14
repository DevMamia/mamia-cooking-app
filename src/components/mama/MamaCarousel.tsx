"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { MamaCard, MamaData } from "./MamaCard";

export function MamaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mamasData, setMamasData] = useState<MamaData[]>([]);
  const [loading, setLoading] = useState(true);

  // Enhanced character data that matches the beautiful illustrated cards
  const getEnhancedMamasData = (): MamaData[] => [
    {
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
      illustration: '🍝'
    },
    {
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
      illustration: '🥄'
    },
    {
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
      illustration: '🌮'
    }
  ];

  // Load mamas data
  useEffect(() => {
    const loadMamas = async () => {
      try {
        setLoading(true);
        
        // Use the enhanced character data directly
        const enhancedMamas = getEnhancedMamasData();
        setMamasData(enhancedMamas);
        
        // Optionally, you can still fetch from database and merge with enhanced data
        // const dbMamas = await db.getMamas();
        // const mergedMamas = enhancedMamas.map(enhanced => {
        //   const dbMama = dbMamas.find(db => db.id === enhanced.id);
        //   return { ...enhanced, ...dbMama };
        // });
        // setMamasData(mergedMamas);
        
      } catch (error) {
        console.error('Error loading mamas:', error);
        // Use enhanced data as fallback
        setMamasData(getEnhancedMamasData());
      } finally {
        setLoading(false);
      }
    };

    loadMamas();
  }, []);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-terracotta"></div>
      </div>
    );
  }

  return (
    <div className="relative w-full py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2" style={{ color: '#8B4513' }}>
          Choose Your Cooking Guide
        </h2>
        <p className="text-gray-600 italic">
          Learn authentic recipes from traditional cooks
        </p>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {mamasData.map((mama, index) => (
            <div key={mama.id} className="flex-[0_0_100%] min-w-0 px-4">
              <MamaCard mama={mama} />
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {mamasData.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === selectedIndex 
                ? 'bg-amber-600 w-8' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            onClick={() => {
              if (emblaApi) emblaApi.scrollTo(index);
            }}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center mt-6 space-x-4">
        <button
          className="px-4 py-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
          onClick={() => emblaApi?.scrollPrev()}
        >
          <span className="text-2xl">←</span>
        </button>
        <button
          className="px-4 py-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
          onClick={() => emblaApi?.scrollNext()}
        >
          <span className="text-2xl">→</span>
        </button>
      </div>
    </div>
  );
} 