"use client";

import { useState } from "react";
import { 
  LayoutWrapper, 
  NavigationTab, 
  PolaroidCard, 
  MamaAvatar, 
  VoiceIndicator, 
  RecipeCard,
  Button,
  Badge,
} from "@/components/ui";

export default function Home() {
  const [activeTab, setActiveTab] = useState<NavigationTab>("mamas");
  
  const handleTabChange = (tab: NavigationTab) => {
    setActiveTab(tab);
  };

  const handleProfileClick = () => {
    console.log("Profile clicked");
  };

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
            Discover authentic recipes from grandmothers around the world
          </p>
        </div>

        {/* Mama Avatars Demo */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold" style={{ color: 'var(--foreground)' }}>Meet the Mamas</h2>
          <div className="flex justify-around">
            <MamaAvatar mama="nonna" state="happy" size="large">
              <p className="text-sm font-mono">Nonna</p>
            </MamaAvatar>
            <MamaAvatar mama="abuela" state="encouraging" size="large">
              <p className="text-sm font-mono">Abuela</p>
            </MamaAvatar>
            <MamaAvatar mama="mae" state="thinking" size="large">
              <p className="text-sm font-mono">Mae</p>
            </MamaAvatar>
          </div>
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

        {/* Recipe Cards Demo */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold" style={{ color: 'var(--foreground)' }}>Featured Recipes</h2>
          <div className="grid grid-cols-1 gap-4">
            <RecipeCard
              title="Nonna's Homemade Pasta"
              description="Traditional Italian pasta made from scratch with love"
              mama="nonna"
              cookTime="45 min"
              servings={4}
              difficulty="medium"
              tags={["Italian", "Pasta", "Traditional"]}
              onSelect={() => console.log("Recipe selected")}
            />
            <RecipeCard
              title="Abuela's Empanadas"
              description="Crispy, flaky pastries filled with savory goodness"
              mama="abuela"
              cookTime="1 hour"
              servings={6}
              difficulty="hard"
              isOffline={true}
              tags={["Spanish", "Pastry", "Savory"]}
              onSelect={() => console.log("Recipe selected")}
            />
          </div>
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
