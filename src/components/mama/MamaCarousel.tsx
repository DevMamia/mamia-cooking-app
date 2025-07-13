"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { MamaCard, MamaData } from "./MamaCard";
import { db } from "@/lib/database/supabase-service";

export function MamaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mamasData, setMamasData] = useState<MamaData[]>([]);
  const [loading, setLoading] = useState(true);

  // Load mamas data from database
  useEffect(() => {
    const loadMamas = async () => {
      try {
        setLoading(true);
        const mamas = await db.getMamas();
        
        // Transform database data to MamaData format
        const transformedMamas: MamaData[] = mamas.map(mama => ({
          id: mama.id,
          name: mama.name,
          cuisine: mama.cuisine_type,
          introduction: mama.description,
          signatureDish: mama.signature_dish || 'Signature dish',
          backgroundColor: mama.color_primary || '#E35336',
          primaryColor: mama.color_primary || '#E35336'
        }));
        
        setMamasData(transformedMamas);
      } catch (error) {
        console.error('Error loading mamas:', error);
        // Fallback data if database fails
        const fallbackMamas: MamaData[] = [
          {
            id: 'nonna',
            name: 'Nonna Lucia',
            cuisine: 'Italian',
            introduction: 'From the hills of Tuscany, Nonna Lucia brings generations of authentic Italian cooking to your kitchen.',
            signatureDish: 'Homemade Pasta with Bolognese',
            backgroundColor: '#C8102E',
            primaryColor: '#C8102E'
          },
          {
            id: 'abuela',
            name: 'Abuela Rosa',
            cuisine: 'Mexican',
            introduction: 'With recipes passed down through her family, Abuela Rosa shares the vibrant flavors of Mexican cuisine.',
            signatureDish: 'Paella Valenciana',
            backgroundColor: '#FF6B47',
            primaryColor: '#FF6B47'
          },
          {
            id: 'mae',
            name: 'Mae Malai',
            cuisine: 'Thai',
            introduction: 'From the bustling markets of Bangkok, Mae Malai brings the authentic flavors of Thailand to your table.',
            signatureDish: 'Pad Thai with Tamarind',
            backgroundColor: '#228B22',
            primaryColor: '#228B22'
          }
        ];
        setMamasData(fallbackMamas);
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
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {mamasData.map((mama, index) => (
            <div key={mama.id} className="flex-[0_0_100%] min-w-0 px-4">
              <MamaCard mama={mama} />
            </div>
          ))}
        </div>
      </div>

      {/* Carousel dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {mamasData.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === selectedIndex 
                ? 'bg-terracotta' 
                : 'bg-gray-300'
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
} 