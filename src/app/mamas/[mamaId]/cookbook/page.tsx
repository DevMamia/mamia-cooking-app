"use client";

import React from "react";
import { useParams } from "next/navigation";
import { ChevronLeft, Heart } from "lucide-react";
import { Button, RecipeCard } from "@/components/ui";
import { MamaType } from "@/components/ui/mama-avatar";
import Link from "next/link";

// Mock data for mama-specific recipes
const mamaRecipes = {
  nonna: {
    name: "Nonna Lucia",
    cuisine: "Italian",
    backgroundColor: "#C8102E",
    recipes: [
      {
        title: "Nonna's Classic Bolognese",
        description: "A rich, slow-cooked sauce that's perfect with fresh pasta",
        cookTime: "3 hours",
        servings: 6,
        difficulty: "medium" as const,
        tags: ["Italian", "Pasta", "Traditional"]
      },
      {
        title: "Homemade Ravioli",
        description: "Delicate pasta parcels filled with ricotta and spinach",
        cookTime: "2 hours",
        servings: 4,
        difficulty: "hard" as const,
        tags: ["Italian", "Pasta", "Handmade"]
      },
      {
        title: "Tiramisu della Nonna",
        description: "The classic Italian dessert made with love",
        cookTime: "30 min",
        servings: 8,
        difficulty: "easy" as const,
        tags: ["Italian", "Dessert", "Coffee"]
      }
    ]
  },
  abuela: {
    name: "Abuela Rosa",
    cuisine: "Spanish",
    backgroundColor: "#FF6B47",
    recipes: [
      {
        title: "Paella Valenciana",
        description: "Traditional Spanish rice dish with saffron and seafood",
        cookTime: "45 min",
        servings: 8,
        difficulty: "hard" as const,
        tags: ["Spanish", "Rice", "Seafood"]
      },
      {
        title: "Gazpacho Andaluz",
        description: "Refreshing cold soup perfect for summer",
        cookTime: "20 min",
        servings: 6,
        difficulty: "easy" as const,
        tags: ["Spanish", "Soup", "Cold"]
      },
      {
        title: "Churros con Chocolate",
        description: "Crispy fried dough with rich chocolate sauce",
        cookTime: "45 min",
        servings: 4,
        difficulty: "medium" as const,
        tags: ["Spanish", "Dessert", "Fried"]
      }
    ]
  },
  mae: {
    name: "Mae Malai",
    cuisine: "Thai",
    backgroundColor: "#228B22",
    recipes: [
      {
        title: "Pad Thai with Tamarind",
        description: "Quick and authentic Thai stir-fried noodles",
        cookTime: "20 min",
        servings: 4,
        difficulty: "easy" as const,
        tags: ["Thai", "Noodles", "Quick"]
      },
      {
        title: "Green Curry with Coconut",
        description: "Spicy and aromatic curry with fresh herbs",
        cookTime: "35 min",
        servings: 6,
        difficulty: "medium" as const,
        tags: ["Thai", "Curry", "Spicy"]
      },
      {
        title: "Tom Yum Goong",
        description: "Hot and sour soup with shrimp",
        cookTime: "25 min",
        servings: 4,
        difficulty: "easy" as const,
        tags: ["Thai", "Soup", "Seafood"]
      }
    ]
  }
};

export default function MamaCookbookPage() {
  const params = useParams();
  const mamaId = params.mamaId as string;
  
  const mama = mamaRecipes[mamaId as keyof typeof mamaRecipes];
  
  if (!mama) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-800">Mama not found</h1>
        <Link href="/mamas">
          <Button className="mt-4">Back to Mamas</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header with Back Button */}
      <div className="flex items-center space-x-3">
        <Link href="/mamas">
          <Button variant="outline" size="sm" className="touch-target">
            <ChevronLeft size={20} />
          </Button>
        </Link>
        <div className="flex-1">
          <h1 className="text-mobile-xl font-bold" style={{ color: mama.backgroundColor }}>
            {mama.name}&rsquo;s Cookbook
          </h1>
          <p className="text-gray-600 text-mobile">
            {mama.cuisine} Traditional Recipes
          </p>
        </div>
      </div>

      {/* Mama's Signature Style */}
      <div 
        className="card p-6 text-white rounded-2xl"
        style={{ backgroundColor: mama.backgroundColor }}
      >
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold mb-2">{mama.name}</h2>
            <p className="opacity-90">
              Authentic {mama.cuisine} recipes passed down through generations
            </p>
          </div>
          <div className="text-5xl">
            {mamaId === 'nonna' && '👵🏻'}
            {mamaId === 'abuela' && '👵🏽'}
            {mamaId === 'mae' && '👵🏾'}
          </div>
        </div>
      </div>

      {/* Recipe Stats */}
      <div className="grid grid-cols-3 gap-3">
        <div className="card p-4 text-center">
          <div className="text-2xl font-bold" style={{ color: mama.backgroundColor }}>
            {mama.recipes.length}
          </div>
          <div className="text-sm text-gray-600">Recipes</div>
        </div>
        <div className="card p-4 text-center">
          <div className="text-2xl font-bold" style={{ color: mama.backgroundColor }}>
            {mama.cuisine}
          </div>
          <div className="text-sm text-gray-600">Cuisine</div>
        </div>
        <div className="card p-4 text-center">
          <div className="text-2xl font-bold" style={{ color: mama.backgroundColor }}>
            <Heart className="w-6 h-6 mx-auto" fill="currentColor" />
          </div>
          <div className="text-sm text-gray-600">Made with Love</div>
        </div>
      </div>

      {/* Recipe Collection */}
      <div className="space-y-4">
        <h2 className="text-mobile-lg font-semibold" style={{ color: 'var(--warm-brown)' }}>
          {mama.name}&rsquo;s Recipes
        </h2>
        <div className="space-y-4">
          {mama.recipes.map((recipe, index) => (
            <RecipeCard
              key={index}
              title={recipe.title}
              description={recipe.description}
              mama={mamaId as MamaType}
              cookTime={recipe.cookTime}
              servings={recipe.servings}
              difficulty={recipe.difficulty}
              tags={recipe.tags}
              onSelect={() => console.log(`Selected ${recipe.title}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 