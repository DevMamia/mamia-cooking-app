"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { db } from "@/lib/database/supabase-service";
import { Button } from "@/components/ui";
import { ArrowLeft, Clock, Users, ChefHat, Heart } from "lucide-react";

interface Recipe {
  id: string;
  title: string;
  description: string;
  prep_time: number;
  cook_time: number;
  difficulty: 'easy' | 'medium' | 'hard';
  servings: number;
  hero_image_url?: string;
  ingredients: Array<{
    name: string;
    amount: string;
    notes?: string;
  }>;
  steps: Array<{
    step: number;
    instruction: string;
    duration?: number;
  }>;
  cultural_notes?: string;
  mamas: {
    id: string;
    name: string;
    cuisine_type: string;
    voice_id: string;
    accent_description: string;
    color_primary: string;
    color_secondary: string;
  };
}

export default function RecipeDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const loadRecipe = async () => {
      if (!params.id) return;
      
      try {
        setLoading(true);
        const data = await db.getRecipeById(params.id as string);
        if (data) {
          // Transform the data to match our Recipe interface
          const transformedRecipe: any = {
            ...data,
            mamas: {
              ...data.mamas,
              voice_id: (data.mamas as any).voice_id || data.mamas.name.toLowerCase().replace(/\s+/g, '-'),
              accent_description: (data.mamas as any).accent_description || 'Traditional accent'
            }
          };
          setRecipe(transformedRecipe);
        }
      } catch (error) {
        console.error('Error loading recipe:', error);
      } finally {
        setLoading(false);
      }
    };

    loadRecipe();
  }, [params.id]);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleStartCooking = () => {
    if (recipe) {
      router.push(`/cook/${recipe.id}`);
    }
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    // TODO: Implement actual favorite functionality with authentication
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-terracotta"></div>
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Recipe not found
        </h3>
        <p className="text-gray-600 mb-4">
          The recipe you're looking for doesn't exist or has been removed.
        </p>
        <Button
          onClick={() => router.push('/recipes')}
          className="bg-terracotta hover:bg-terracotta/90 text-white"
        >
          Browse Recipes
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header with Back Button */}
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft size={20} />
          Back
        </Button>
        <Button
          variant="ghost"
          onClick={toggleFavorite}
          className={`flex items-center gap-2 ${
            isFavorite ? 'text-red-500' : 'text-gray-600'
          }`}
        >
          <Heart size={20} fill={isFavorite ? 'currentColor' : 'none'} />
          {isFavorite ? 'Saved' : 'Save'}
        </Button>
      </div>

      {/* Recipe Hero */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        {/* Recipe Image */}
        <div className="h-64 bg-gray-200 relative">
          {recipe.hero_image_url ? (
            <Image
              src={recipe.hero_image_url}
              alt={recipe.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <div className="text-8xl">🍳</div>
            </div>
          )}
          
          {/* Difficulty Badge */}
          <div className="absolute top-4 right-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(recipe.difficulty)}`}>
              {recipe.difficulty}
            </span>
          </div>

          {/* Mama Badge */}
          <div className="absolute bottom-4 left-4">
            <span 
              className="px-3 py-1 rounded-full text-sm font-medium text-white"
              style={{ backgroundColor: recipe.mamas.color_primary }}
            >
              By {recipe.mamas.name}
            </span>
          </div>
        </div>

        {/* Recipe Info */}
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-2">{recipe.title}</h1>
          <p className="text-gray-600 mb-4">{recipe.description}</p>

          {/* Recipe Stats */}
          <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{recipe.prep_time + recipe.cook_time} min total</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={16} />
              <span>{recipe.servings} servings</span>
            </div>
            <div className="flex items-center gap-2">
              <ChefHat size={16} />
              <span className="capitalize">{recipe.difficulty}</span>
            </div>
          </div>

          {/* Time Breakdown */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="text-lg font-semibold text-terracotta">{recipe.prep_time} min</div>
              <div className="text-sm text-gray-600">Prep Time</div>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="text-lg font-semibold text-terracotta">{recipe.cook_time} min</div>
              <div className="text-sm text-gray-600">Cook Time</div>
            </div>
          </div>

          {/* Start Cooking Button */}
          <Button
            onClick={handleStartCooking}
            className="w-full bg-terracotta hover:bg-terracotta/90 text-white py-3 text-lg font-medium"
          >
            Start Cooking with {recipe.mamas.name}
          </Button>
        </div>
      </div>

      {/* Ingredients */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">Ingredients</h2>
        <div className="space-y-3">
          {recipe.ingredients.map((ingredient, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-terracotta rounded-full mt-2 flex-shrink-0"></div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium">{ingredient.amount}</span>
                  <span>{ingredient.name}</span>
                </div>
                {ingredient.notes && (
                  <div className="text-sm text-gray-600 italic">
                    {ingredient.notes}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">Instructions</h2>
        <div className="space-y-4">
          {recipe.steps.map((step, index) => (
            <div key={index} className="flex gap-4">
              <div 
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-medium"
                style={{ backgroundColor: recipe.mamas.color_primary }}
              >
                {step.step}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium">{step.instruction}</span>
                  {step.duration && (
                    <span className="text-sm text-gray-500">
                      ({step.duration} min)
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cultural Notes */}
      {recipe.cultural_notes && (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Cultural Notes</h2>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700 italic">{recipe.cultural_notes}</p>
          </div>
        </div>
      )}

      {/* Mama Info */}
      <div 
        className="rounded-lg p-6 text-white"
        style={{ backgroundColor: recipe.mamas.color_primary }}
      >
        <h2 className="text-xl font-semibold mb-2">About {recipe.mamas.name}</h2>
        <p className="mb-4 opacity-90">
          Specializes in {recipe.mamas.cuisine_type} cuisine with {recipe.mamas.accent_description.toLowerCase()}
        </p>
        <Button
          onClick={() => router.push(`/mamas/${recipe.mamas.id}/cookbook`)}
          className="bg-white text-gray-800 hover:bg-gray-100"
        >
          View {recipe.mamas.name}'s Cookbook
        </Button>
      </div>
    </div>
  );
} 