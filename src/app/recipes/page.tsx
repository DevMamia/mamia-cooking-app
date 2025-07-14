"use client";

import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { db } from "@/lib/database/supabase-service";
import { Button } from "@/components/ui";
import { useRouter } from "next/navigation";
import { Search, Clock, Users, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { RecipeCardSkeleton, CategoryCarouselSkeleton, ErrorState } from "@/components/LoadingStates";

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

const categories = [
  { id: 'all', name: 'All', emoji: '🍽️' },
  { id: 'breakfast', name: 'Breakfast', emoji: '🥞' },
  { id: 'lunch', name: 'Lunch', emoji: '🥗' },
  { id: 'dinner', name: 'Dinner', emoji: '🍖' },
  { id: 'dessert', name: 'Dessert', emoji: '🍰' },
  { id: 'snacks', name: 'Snacks', emoji: '🍿' },
  { id: 'drinks', name: 'Drinks', emoji: '🥤' },
];

export default function RecipesPage() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedCuisine, setSelectedCuisine] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const loadRecipes = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await db.getRecipes();
        setRecipes(data as Recipe[]);
      } catch (error) {
        console.error('Error loading recipes:', error);
        setError('Failed to load recipes. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    loadRecipes();
  }, []);

  const filteredRecipes = useMemo(() => {
    return recipes.filter(recipe => {
      const matchesSearch = searchQuery === '' || 
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.mamas.name.toLowerCase().includes(searchQuery.toLowerCase());
      
      const cuisineMatch = selectedCuisine === 'all' || recipe.mamas.cuisine_type === selectedCuisine;
      const difficultyMatch = selectedDifficulty === 'all' || recipe.difficulty === selectedDifficulty;
      
      return matchesSearch && cuisineMatch && difficultyMatch;
    });
  }, [recipes, searchQuery, selectedCuisine, selectedDifficulty]);

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

  // Get recipe of the week (random for now)
  const recipeOfTheWeek = recipes.length > 0 ? recipes[Math.floor(Math.random() * recipes.length)] : null;

  if (loading) {
    return (
      <div className="pb-4">
        <div className="px-4 py-3">
          <div className="h-12 bg-gray-200 rounded-full animate-pulse" />
        </div>
        <div className="px-4 mt-6">
          <div className="h-6 bg-gray-200 rounded w-48 mb-3 animate-pulse" />
          <CategoryCarouselSkeleton />
        </div>
        <div className="px-4 mt-6 space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <RecipeCardSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <ErrorState 
        title="Failed to load recipes"
        message={error}
        onRetry={() => window.location.reload()}
      />
    );
  }

  return (
    <div className="pb-4">
      {/* Search Bar */}
      <div className="sticky top-0 bg-gradient-to-br from-orange-50 to-pink-50 z-40 px-4 py-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search recipes, ingredients, or mamas..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white rounded-full shadow-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Recipe of the Week */}
      {recipeOfTheWeek && searchQuery === '' && (
        <div className="px-4 mt-4">
          <h2 className="text-lg font-bold mb-3 text-gray-800">Recipe of the Week ⭐</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-orange-100 to-pink-100 rounded-2xl p-4 shadow-md"
            onClick={() => handleRecipeClick(recipeOfTheWeek.id)}
          >
            <div className="flex gap-4">
              <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                {recipeOfTheWeek.hero_image_url ? (
                  <Image
                    src={recipeOfTheWeek.hero_image_url}
                    alt={recipeOfTheWeek.title}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="w-full h-full bg-orange-200 flex items-center justify-center text-3xl">
                    🍳
                  </div>
                )}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800 mb-1">{recipeOfTheWeek.title}</h3>
                <p className="text-sm text-gray-600 mb-2 line-clamp-2">{recipeOfTheWeek.description}</p>
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {recipeOfTheWeek.prep_time + recipeOfTheWeek.cook_time}min
                  </span>
                  <span className="flex items-center gap-1">
                    <Users size={12} />
                    {recipeOfTheWeek.servings}
                  </span>
                  <span className={`px-2 py-0.5 rounded-full ${getDifficultyColor(recipeOfTheWeek.difficulty)}`}>
                    {recipeOfTheWeek.difficulty}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Categories Carousel */}
      {searchQuery === '' && (
        <div className="mt-6 px-4">
          <h2 className="text-lg font-bold mb-3 text-gray-800">Categories</h2>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map(category => (
              <motion.button
                key={category.id}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex flex-col items-center p-3 rounded-2xl min-w-[80px] transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-orange-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-200'
                }`}
              >
                <span className="text-2xl mb-1">{category.emoji}</span>
                <span className="text-xs font-medium">{category.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      )}

      {/* Filter Pills */}
      <div className="px-4 mt-4">
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="px-3 py-1.5 bg-white rounded-full text-sm font-medium text-gray-700 border border-gray-200 flex items-center gap-1"
          >
            Filters {showFilters ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
          </button>
          
          {selectedCuisine !== 'all' && (
            <span className="px-3 py-1.5 bg-orange-100 rounded-full text-sm font-medium text-orange-800 capitalize">
              {selectedCuisine} ✕
            </span>
          )}
          
          {selectedDifficulty !== 'all' && (
            <span className="px-3 py-1.5 bg-orange-100 rounded-full text-sm font-medium text-orange-800 capitalize">
              {selectedDifficulty} ✕
            </span>
          )}
        </div>

        {/* Expanded Filters */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="mt-3 space-y-3 bg-white rounded-xl p-4 border border-gray-200">
                {/* Cuisine Filter */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Cuisine</label>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setSelectedCuisine('all')}
                      className={`px-3 py-1 rounded-full text-sm ${
                        selectedCuisine === 'all'
                          ? 'bg-orange-600 text-white'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      All
                    </button>
                    {uniqueCuisines.map(cuisine => (
                      <button
                        key={cuisine}
                        onClick={() => setSelectedCuisine(cuisine)}
                        className={`px-3 py-1 rounded-full text-sm capitalize ${
                          selectedCuisine === cuisine
                            ? 'bg-orange-600 text-white'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {cuisine}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Difficulty Filter */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Difficulty</label>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setSelectedDifficulty('all')}
                      className={`px-3 py-1 rounded-full text-sm ${
                        selectedDifficulty === 'all'
                          ? 'bg-orange-600 text-white'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      All
                    </button>
                    {['easy', 'medium', 'hard'].map(difficulty => (
                      <button
                        key={difficulty}
                        onClick={() => setSelectedDifficulty(difficulty)}
                        className={`px-3 py-1 rounded-full text-sm capitalize ${
                          selectedDifficulty === difficulty
                            ? 'bg-orange-600 text-white'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {difficulty}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Results Count */}
      <div className="px-4 mt-4 text-sm text-gray-600">
        {filteredRecipes.length} recipes found
      </div>

      {/* Recipe Cards - Swipeable Stack */}
      <div className="px-4 mt-4 space-y-4">
        {filteredRecipes.map((recipe, index) => (
          <motion.div
            key={recipe.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white rounded-2xl shadow-sm overflow-hidden"
            onClick={() => handleRecipeClick(recipe.id)}
          >
            <div className="flex">
              {/* Recipe Image */}
              <div className="w-32 h-32 relative flex-shrink-0">
                {recipe.hero_image_url ? (
                  <Image
                    src={recipe.hero_image_url}
                    alt={recipe.title}
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-4xl">
                    🍳
                  </div>
                )}
                {/* Difficulty Badge */}
                <div className="absolute top-2 left-2">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getDifficultyColor(recipe.difficulty)}`}>
                    {recipe.difficulty}
                  </span>
                </div>
              </div>

              {/* Recipe Info */}
              <div className="flex-1 p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-gray-800 line-clamp-1 flex-1">
                    {recipe.title}
                  </h3>
                  <span 
                    className="px-2 py-1 rounded-full text-xs font-medium text-white ml-2 flex-shrink-0"
                    style={{ backgroundColor: recipe.mamas.color_primary }}
                  >
                    {recipe.mamas.name}
                  </span>
                </div>
                
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {recipe.description}
                </p>

                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {recipe.prep_time + recipe.cook_time}min
                  </span>
                  <span className="flex items-center gap-1">
                    <Users size={14} />
                    {recipe.servings} servings
                  </span>
                  <span className="flex items-center gap-1">
                    <Star size={14} className="text-yellow-500" />
                    4.8
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {filteredRecipes.length === 0 && !loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12 px-4"
        >
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-lg font-bold text-gray-800 mb-2">
            No recipes found
          </h3>
          <p className="text-gray-600 mb-4">
            Try adjusting your search or filters
          </p>
          <Button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setSelectedCuisine('all');
              setSelectedDifficulty('all');
            }}
            className="bg-orange-600 hover:bg-orange-700 text-white"
          >
            Clear All Filters
          </Button>
        </motion.div>
      )}
    </div>
  );
}