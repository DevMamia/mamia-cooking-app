"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { db } from "@/lib/database/supabase-service";
import { Button } from "@/components/ui";
import { ArrowLeft, Clock, Users, ChefHat, Heart, ShoppingCart, Check } from "lucide-react";
import { useShoppingListStore } from "@/lib/store/shopping-list-store";
import { motion, AnimatePresence } from "framer-motion";

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
  const [selectedIngredients, setSelectedIngredients] = useState<Set<number>>(new Set());
  const [showAddedNotification, setShowAddedNotification] = useState(false);
  const { addItems } = useShoppingListStore();

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

  const toggleIngredient = (index: number) => {
    const newSelected = new Set(selectedIngredients);
    if (newSelected.has(index)) {
      newSelected.delete(index);
    } else {
      newSelected.add(index);
    }
    setSelectedIngredients(newSelected);
  };

  const selectAllIngredients = () => {
    if (selectedIngredients.size === recipe?.ingredients.length) {
      setSelectedIngredients(new Set());
    } else {
      setSelectedIngredients(new Set(recipe?.ingredients.map((_, i) => i)));
    }
  };

  const categorizeIngredient = (name: string): string => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes('meat') || lowerName.includes('chicken') || lowerName.includes('beef') || lowerName.includes('pork') || lowerName.includes('fish')) {
      return 'meat';
    } else if (lowerName.includes('milk') || lowerName.includes('cheese') || lowerName.includes('yogurt') || lowerName.includes('butter')) {
      return 'dairy';
    } else if (lowerName.includes('bread') || lowerName.includes('flour')) {
      return 'bakery';
    } else if (lowerName.includes('vegetable') || lowerName.includes('tomato') || lowerName.includes('onion') || lowerName.includes('garlic')) {
      return 'produce';
    } else {
      return 'pantry';
    }
  };

  const handleAddToShoppingList = () => {
    if (!recipe || selectedIngredients.size === 0) return;

    const itemsToAdd = Array.from(selectedIngredients).map(index => {
      const ingredient = recipe.ingredients[index];
      if (!ingredient) return null;
      return {
        name: ingredient.name,
        quantity: ingredient.amount,
        category: categorizeIngredient(ingredient.name),
        recipeId: recipe.id,
        recipeName: recipe.title
      };
    }).filter(Boolean) as Array<{
      name: string;
      quantity: string;
      category: string;
      recipeId: string;
      recipeName: string;
    }>;

    addItems(itemsToAdd);
    setSelectedIngredients(new Set());
    setShowAddedNotification(true);
    setTimeout(() => setShowAddedNotification(false), 3000);
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
    <div className="space-y-6 relative">
      {/* Added to Cart Notification */}
      <AnimatePresence>
        {showAddedNotification && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg z-50 flex items-center gap-2"
          >
            <Check size={20} />
            <span>Added to shopping list!</span>
          </motion.div>
        )}
      </AnimatePresence>

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
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Ingredients</h2>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={selectAllIngredients}
              className="text-sm"
            >
              {selectedIngredients.size === recipe.ingredients.length ? 'Deselect All' : 'Select All'}
            </Button>
            <Button
              onClick={handleAddToShoppingList}
              disabled={selectedIngredients.size === 0}
              className="bg-orange-600 hover:bg-orange-700 text-white text-sm flex items-center gap-2"
            >
              <ShoppingCart size={16} />
              Add {selectedIngredients.size > 0 ? `(${selectedIngredients.size})` : ''} to List
            </Button>
          </div>
        </div>
        
        <div className="space-y-2">
          {recipe.ingredients.map((ingredient, index) => (
            <motion.div
              key={index}
              whileTap={{ scale: 0.98 }}
              className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                selectedIngredients.has(index) ? 'bg-orange-50 border-orange-200' : 'bg-gray-50'
              } border`}
              onClick={() => toggleIngredient(index)}
            >
              <button
                className={`flex-shrink-0 w-5 h-5 rounded border-2 mt-0.5 transition-colors ${
                  selectedIngredients.has(index) 
                    ? 'bg-orange-600 border-orange-600' 
                    : 'border-gray-300 hover:border-orange-600'
                }`}
              >
                {selectedIngredients.has(index) && (
                  <Check size={16} className="text-white" />
                )}
              </button>
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
            </motion.div>
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