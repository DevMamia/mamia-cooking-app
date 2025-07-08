"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { MamaCard, MamaData } from "./MamaCard";

// Character data for the three mamas
const mamasData: MamaData[] = [
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
    cuisine: 'Spanish',
    introduction: 'With recipes passed down through her family in Valencia, Abuela Rosa shares the warmth of Spanish cuisine.',
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

export function MamaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    containScroll: 'trimSnaps',
    dragFree: false,
    loop: false,
    skipSnaps: false,
    startIndex: 0,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    onSelect();

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="space-y-6">
      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex" style={{ gap: '16px', paddingLeft: '16px', paddingRight: '16px' }}>
          {mamasData.map((mama) => (
            <MamaCard key={mama.id} mama={mama} />
          ))}
        </div>
      </div>

      {/* Progress Dots */}
      <div className="flex justify-center space-x-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? 'bg-terracotta scale-125'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            style={{
              backgroundColor: index === selectedIndex ? 'var(--terracotta)' : undefined
            }}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Selected Mama Info */}
      <div className="text-center px-4">
        <div className="card p-4 bg-white/80 backdrop-blur-sm">
          <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--warm-brown)' }}>
            {mamasData[selectedIndex]?.name}
          </h3>
          <p className="text-sm text-gray-600">
            Swipe to explore our mamas and discover their traditional recipes
          </p>
        </div>
      </div>
    </div>
  );
} 