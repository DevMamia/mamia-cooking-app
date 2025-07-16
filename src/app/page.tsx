"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  LayoutWrapper, 
  NavigationTab, 
  PolaroidCard, 
  MamaAvatar, 
  VoiceIndicator, 
  RecipeCard,
  Button,
  Badge,
  ErrorMessage,
} from "@/components/ui";
import { useAuth, useRecipes, useMamas } from "../hooks";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  const [activeTab, setActiveTab] = useState<NavigationTab>("mamas");
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  const { recipes, loading: recipesLoading, error: recipesError } = useRecipes({ limit: 6 });
  const { mamas, loading: mamasLoading, error: mamasError } = useMamas();
  
  const handleTabChange = (tab: NavigationTab) => {
    setActiveTab(tab);
  };

  const handleProfileClick = () => {
    if (user) {
      console.log("Profile clicked for user:", user.email);
    } else {
      router.push('/login');
    }
  };

  const handleRecipeSelect = (recipeId: string) => {
    console.log("Recipe selected:", recipeId);
  };

  if (authLoading) {
    return (
      <LayoutWrapper
        activeTab={activeTab}
        onTabChange={handleTabChange}
        title="MAMIA"
        onProfileClick={handleProfileClick}
      >
        <div className="space-y-8">
          <div className="text-center">
            <Skeleton className="h-8 w-64 mx-auto mb-2" />
            <Skeleton className="h-4 w-96 mx-auto" />
          </div>
          <div className="space-y-4">
            <Skeleton className="h-6 w-32" />
            <div className="flex justify-around">
              <Skeleton className="h-16 w-16 rounded-full" />
              <Skeleton className="h-16 w-16 rounded-full" />
              <Skeleton className="h-16 w-16 rounded-full" />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    );
  }

  return (
    <LayoutWrapper
      activeTab={activeTab}
      onTabChange={handleTabChange}
      title="MAMIA"
      onProfileClick={handleProfileClick}
    >
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2 font-mono" style={{ color: 'var(--primary)' }}>
            Welcome to MAMIA
          </h1>
          <p className="text-gray-600">
            {user ? `Welcome back, ${user.email}!` : 'Discover authentic recipes from grandmothers around the world'}
          </p>
        </div>

        {/* Mama Avatars */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold" style={{ color: 'var(--foreground)' }}>Meet the Mamas</h2>
          {mamasLoading ? (
            <div className="flex justify-around">
              <Skeleton className="h-16 w-16 rounded-full" />
              <Skeleton className="h-16 w-16 rounded-full" />
              <Skeleton className="h-16 w-16 rounded-full" />
            </div>
          ) : mamasError ? (
            <ErrorMessage message={`Failed to load mamas: ${mamasError}`} />
          ) : (
            <div className="flex justify-around">
              {mamas.slice(0, 3).map((mama) => (
                <MamaAvatar 
                  key={mama.id}
                  mama={mama.name.toLowerCase() as "nonna" | "abuela" | "mae"} 
                  state="happy" 
                  size="large"
                >
                  <p className="text-sm font-mono">{mama.name}</p>
                </MamaAvatar>
              ))}
            </div>
          )}
        </div>

        {/* Voice Indicators Demo */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold" style={{ color: 'var(--foreground)' }}>Voice Interface</h2>
          <div className="flex justify-around">
            <VoiceIndicator state="idle" size="medium">
              <span>Idle</span>
            </VoiceIndicator>
            <VoiceIndicator state="listening" size="medium">
              <span>Listening</span>
            </VoiceIndicator>
            <VoiceIndicator state="speaking" size="medium">
              <span>Speaking</span>
            </VoiceIndicator>
          </div>
        </div>

        {/* Recipe Cards */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold" style={{ color: 'var(--foreground)' }}>Featured Recipes</h2>
          {recipesLoading ? (
            <div className="grid grid-cols-1 gap-4">
              <Skeleton className="h-64 w-full" />
              <Skeleton className="h-64 w-full" />
            </div>
          ) : recipesError ? (
            <ErrorMessage message={`Failed to load recipes: ${recipesError}`} />
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {recipes.slice(0, 2).map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  title={recipe.title}
                  description={recipe.description}
                  mama={recipe.mamas?.name.toLowerCase() as "nonna" | "abuela" | "mae" || "nonna"}
                  cookTime={`${recipe.prep_time + recipe.cook_time} min`}
                  servings={recipe.servings}
                  difficulty={recipe.difficulty_level}
                  tags={recipe.tags || []}
                  onSelect={() => handleRecipeSelect(recipe.id)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Polaroid Cards Demo */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold" style={{ color: 'var(--foreground)' }}>Recipe Gallery</h2>
          <div className="grid grid-cols-2 gap-4">
            <PolaroidCard
              caption="Fresh ingredients for pasta"
              tiltDirection="left"
              onTap={() => console.log("Polaroid tapped")}
            >
              <div className="w-full h-full bg-gradient-to-br from-orange-200 to-green-200 flex items-center justify-center">
                <span className="text-gray-500">📸</span>
              </div>
            </PolaroidCard>
            <PolaroidCard
              caption="Kneading the dough"
              tiltDirection="right"
              onTap={() => console.log("Polaroid tapped")}
            >
              <div className="w-full h-full bg-gradient-to-br from-green-200 to-orange-200 flex items-center justify-center">
                <span className="text-gray-500">👩‍🍳</span>
              </div>
            </PolaroidCard>
          </div>
        </div>

        {/* Color Palette Demo */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold" style={{ color: 'var(--foreground)' }}>Color Palette</h2>
          <div className="grid grid-cols-2 gap-2">
            <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}>
              <Badge>Primary - Terracotta</Badge>
            </div>
            <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-foreground)' }}>
              <Badge>Accent - Sage Green</Badge>
            </div>
            <div className="p-4 rounded-lg border border-gray-300" style={{ backgroundColor: 'var(--card)', color: 'var(--card-foreground)' }}>
              <Badge variant="outline">Card Background</Badge>
            </div>
            <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--muted)', color: 'var(--muted-foreground)' }}>
              <Badge variant="secondary">Muted</Badge>
            </div>
          </div>
        </div>

        {/* Kitchen-Safe Components Demo */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold" style={{ color: 'var(--foreground)' }}>Kitchen Mode</h2>
          <div className="space-y-2">
            <Button className="kitchen-button w-full">
              Start Cooking
            </Button>
            <Button variant="outline" className="kitchen-button w-full">
              Add to Shopping List
            </Button>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
}
