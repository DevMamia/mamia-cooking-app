"use client";

import React, { useEffect, useState } from "react";
import { db } from "@/lib/database/supabase-service";
import { Button } from "@/components/ui";
import { useRouter } from "next/navigation";

interface Recipe {
  id: string;
  title: string;
  description: string;
  prep_time: number;
  cook_time: number;
  difficulty: 'easy' | 'medium' | 'hard';
  servings: number;
  hero_image_url?: string;
  mamas: {
    id: string;
    name: string;
    cuisine_type: string;
    color_primary: string;
    color_secondary: string;
  };
}

export default function RecipesPage() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCuisine, setSelectedCuisine] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const router = useRouter();

  useEffect(() => {
    const loadRecipes = async () => {
      try {
        setLoading(true);
        const data = await db.getRecipes();
        setRecipes(data as Recipe[]);
      } catch (error) {
        console.error('Error loading recipes:', error);
      } finally {
        setLoading(false);
      }
    };

    loadRecipes();
  }, []);

  const filteredRecipes = recipes.filter(recipe => {
    const cuisineMatch = selectedCuisine === 'all' || recipe.mamas.cuisine_type === selectedCuisine;
    const difficultyMatch = selectedDifficulty === 'all' || recipe.difficulty === selectedDifficulty;
    return cuisineMatch && difficultyMatch;
  });

  const uniqueCuisines = [...new Set(recipes.map(recipe => recipe.mamas.cuisine_type))];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleRecipeClick = (recipeId: string) => {
    router.push(`/recipes/${recipeId}`);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-terracotta"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="text-center">
        <h1 className="text-mobile-xl font-bold mb-2" style={{ color: 'var(--terracotta)' }}>
          Discover Recipes
        </h1>
        <p className="text-gray-600 text-mobile">
          Browse authentic recipes from our traditional cooks
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <div className="space-y-4">
          {/* Cuisine Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cuisine Type
            </label>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCuisine('all')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  selectedCuisine === 'all'
                    ? 'bg-terracotta text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All
              </button>
              {uniqueCuisines.map(cuisine => (
                <button
                  key={cuisine}
                  onClick={() => setSelectedCuisine(cuisine)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors capitalize ${
                    selectedCuisine === cuisine
                      ? 'bg-terracotta text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cuisine}
                </button>
              ))}
            </div>
          </div>

          {/* Difficulty Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Difficulty Level
            </label>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedDifficulty('all')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  selectedDifficulty === 'all'
                    ? 'bg-terracotta text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All
              </button>
              {['easy', 'medium', 'hard'].map(difficulty => (
                <button
                  key={difficulty}
                  onClick={() => setSelectedDifficulty(difficulty)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors capitalize ${
                    selectedDifficulty === difficulty
                      ? 'bg-terracotta text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {difficulty}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="text-center text-gray-600 text-sm">
        Showing {filteredRecipes.length} of {recipes.length} recipes
      </div>

      {/* Recipe Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecipes.map(recipe => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => handleRecipeClick(recipe.id)}
          >
            {/* Recipe Image */}
            <div className="h-48 bg-gray-200 relative">
              {recipe.hero_image_url ? (
                <img
                  src={recipe.hero_image_url}
                  alt={recipe.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <div className="text-6xl">🍳</div>
                </div>
              )}
              
              {/* Difficulty Badge */}
              <div className="absolute top-2 right-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(recipe.difficulty)}`}>
                  {recipe.difficulty}
                </span>
              </div>

              {/* Mama Badge */}
              <div className="absolute bottom-2 left-2">
                <span 
                  className="px-2 py-1 rounded-full text-xs font-medium text-white"
                  style={{ backgroundColor: recipe.mamas.color_primary }}
                >
                  {recipe.mamas.name}
                </span>
              </div>
            </div>

            {/* Recipe Info */}
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                {recipe.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {recipe.description}
              </p>

              {/* Recipe Stats */}
              <div className="flex justify-between items-center text-sm text-gray-500">
                <div className="flex items-center gap-4">
                  <span>⏱️ {recipe.prep_time + recipe.cook_time} min</span>
                  <span>👥 {recipe.servings} servings</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-4">
                <Button
                  className="w-full bg-terracotta hover:bg-terracotta/90 text-white"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRecipeClick(recipe.id);
                  }}
                >
                  View Recipe
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredRecipes.length === 0 && !loading && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No recipes found
          </h3>
          <p className="text-gray-600 mb-4">
            Try adjusting your filters to see more recipes
          </p>
          <Button
            onClick={() => {
              setSelectedCuisine('all');
              setSelectedDifficulty('all');
            }}
            className="bg-terracotta hover:bg-terracotta/90 text-white"
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
} 