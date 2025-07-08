"use client";

import React from "react";
import { Search, Filter } from "lucide-react";
import { Button, RecipeCard } from "@/components/ui";

export default function RecipesPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="text-center">
        <h1 className="text-mobile-xl font-bold mb-2" style={{ color: 'var(--terracotta)' }}>
          Discover Recipes
        </h1>
        <p className="text-gray-600 text-mobile">
          Find your next favorite meal
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <div className="flex items-center space-x-2">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search recipes..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg touch-target focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent"
              style={{ backgroundColor: 'var(--card)' }}
            />
          </div>
          <Button className="btn-secondary touch-target">
            <Filter size={20} />
          </Button>
        </div>
      </div>

      {/* Quick Categories */}
      <div className="space-y-3">
        <h2 className="text-mobile-lg font-semibold" style={{ color: 'var(--warm-brown)' }}>
          Categories
        </h2>
        <div className="flex space-x-2 overflow-x-auto scrollbar-hide">
          {['Italian', 'Spanish', 'Thai', 'Quick', 'Healthy', 'Desserts'].map((category) => (
            <Button
              key={category}
              variant="outline"
              className="whitespace-nowrap touch-target"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Featured Recipes */}
      <div className="space-y-4">
        <h2 className="text-mobile-lg font-semibold" style={{ color: 'var(--warm-brown)' }}>
          Featured Recipes
        </h2>
        <div className="space-y-4">
          <RecipeCard
            title="Nonna's Classic Bolognese"
            description="A rich, slow-cooked sauce that's perfect with fresh pasta"
            mama="nonna"
            cookTime="3 hours"
            servings={6}
            difficulty="medium"
            tags={["Italian", "Pasta", "Traditional"]}
            onSelect={() => console.log("Recipe selected")}
          />
          <RecipeCard
            title="Abuela's Paella Valenciana"
            description="Traditional Spanish rice dish with saffron and seafood"
            mama="abuela"
            cookTime="45 min"
            servings={8}
            difficulty="hard"
            tags={["Spanish", "Rice", "Seafood"]}
            onSelect={() => console.log("Recipe selected")}
          />
          <RecipeCard
            title="Mae's Pad Thai"
            description="Quick and authentic Thai stir-fried noodles"
            mama="mae"
            cookTime="20 min"
            servings={4}
            difficulty="easy"
            tags={["Thai", "Noodles", "Quick"]}
            onSelect={() => console.log("Recipe selected")}
          />
        </div>
      </div>
    </div>
  );
} 