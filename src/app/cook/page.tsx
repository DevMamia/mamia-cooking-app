"use client";

import React from "react";
import { Play, Clock, Users, ChefHat } from "lucide-react";
import { Button, VoiceIndicator, MamaAvatar } from "@/components/ui";

export default function CookPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="text-center">
        <h1 className="text-mobile-xl font-bold mb-2" style={{ color: 'var(--terracotta)' }}>
          Start Cooking
        </h1>
        <p className="text-gray-600 text-mobile">
          Cook along with your favorite mama
        </p>
      </div>

      {/* Current Recipe */}
      <div className="card p-6 space-y-4">
        <div className="flex items-center space-x-3">
          <MamaAvatar mama="nonna" size="medium" state="encouraging" />
          <div className="flex-1">
            <h3 className="text-mobile-lg font-semibold" style={{ color: 'var(--warm-brown)' }}>
              Nonna&rsquo;s Pasta Bolognese
            </h3>
            <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
              <div className="flex items-center space-x-1">
                <Clock size={16} />
                <span>3 hours</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users size={16} />
                <span>6 servings</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-muted/50 rounded-lg p-4">
          <h4 className="font-semibold mb-2" style={{ color: 'var(--warm-brown)' }}>
            Step 3 of 8: Brown the meat
          </h4>
          <p className="text-mobile text-gray-700 mb-3">
            Add the ground beef and pork to the pot. Break it up with a wooden spoon and cook until browned all over.
          </p>
          <div className="flex justify-center mb-3">
            <VoiceIndicator state="listening" size="large">
              <span className="text-sm">Listening</span>
            </VoiceIndicator>
          </div>
          <p className="text-sm text-center text-gray-600">
            Say &ldquo;Next step&rdquo; when ready to continue
          </p>
        </div>

        <div className="flex space-x-2">
          <Button className="btn-secondary flex-1 touch-target">
            Previous Step
          </Button>
          <Button className="btn-primary flex-1 touch-target">
            Next Step
          </Button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="space-y-4">
        <h2 className="text-mobile-lg font-semibold" style={{ color: 'var(--warm-brown)' }}>
          Quick Actions
        </h2>
        <div className="grid grid-cols-2 gap-3">
          <Button className="btn-secondary touch-target-large flex flex-col items-center space-y-2 py-4">
            <ChefHat size={24} />
            <span>Start New Recipe</span>
          </Button>
          <Button className="btn-secondary touch-target-large flex flex-col items-center space-y-2 py-4">
            <Play size={24} />
            <span>Resume Cooking</span>
          </Button>
        </div>
      </div>

      {/* Recently Cooked */}
      <div className="space-y-4">
        <h2 className="text-mobile-lg font-semibold" style={{ color: 'var(--warm-brown)' }}>
          Recently Cooked
        </h2>
        <div className="space-y-3">
          {['Abuela\'s Empanadas', 'Mae\'s Pad Thai', 'Nonna\'s Risotto'].map((recipe, index) => (
            <div key={recipe} className="card p-4 flex items-center justify-between">
              <div>
                <h4 className="font-medium" style={{ color: 'var(--warm-brown)' }}>
                  {recipe}
                </h4>
                <p className="text-sm text-gray-600">
                  Completed {index + 1} day{index !== 0 ? 's' : ''} ago
                </p>
              </div>
              <Button className="btn-primary touch-target">
                Cook Again
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 