"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui";
import { auth, User } from "@/lib/auth/auth-service";
import { User as UserIcon, Heart, ChefHat, Settings } from "lucide-react";

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [username, setUsername] = useState("");
  const [favorites, setFavorites] = useState<any[]>([]);
  const [progress, setProgress] = useState<any[]>([]);
  const [userStats, setUserStats] = useState<any>(null);

  useEffect(() => {
    // Check for mock user
    const mockUser = auth.getMockUser();
    if (mockUser) {
      setUser(mockUser);
      setIsSignedIn(true);
      loadUserData(mockUser.id);
    }
  }, []);

  const loadUserData = async (_userId: string) => {
    // Mock user data for development
    const mockStats = {
      recipesCooked: 47,
      favoritesCount: 23,
      cookingStreak: 12,
      totalCookingTime: 1440, // in minutes
      averageRating: 4.7,
      completionRate: 85
    };
    
    setUserStats(mockStats);
  };

  const handleSignIn = async () => {
    if (!username.trim()) return;
    
    const { user: newUser, error: _error } = await auth.mockSignIn(username);
    if (newUser) {
      setUser(newUser);
      setIsSignedIn(true);
      setShowSignIn(false);
      setUsername("");
      loadUserData(newUser.id);
    }
  };

  const handleSignOut = () => {
    auth.mockSignOut();
    setUser(null);
    setIsSignedIn(false);
    setFavorites([]);
    setProgress([]);
  };

  if (!isSignedIn) {
    return (
      <div className="max-w-md mx-auto space-y-6">
        <div className="text-center">
          <h1 className="text-mobile-xl font-bold mb-2" style={{ color: 'var(--terracotta)' }}>
            Your Profile
          </h1>
          <p className="text-gray-600 text-mobile">
            Sign in to track your cooking journey
          </p>
        </div>

        {!showSignIn ? (
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="text-6xl mb-4">👨‍🍳</div>
            <h3 className="text-lg font-medium mb-4">Welcome to MAMIA</h3>
            <p className="text-gray-600 mb-6">
              Track your recipes, save favorites, and continue your cooking progress
            </p>
            <Button
              onClick={() => setShowSignIn(true)}
              className="w-full bg-terracotta hover:bg-terracotta/90 text-white"
            >
              Get Started
            </Button>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-medium mb-4">Quick Demo Sign In</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Enter your name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta"
                onKeyPress={(e) => e.key === 'Enter' && handleSignIn()}
              />
              <div className="flex gap-3">
                <Button
                  onClick={handleSignIn}
                  className="flex-1 bg-terracotta hover:bg-terracotta/90 text-white"
                  disabled={!username.trim()}
                >
                  Sign In
                </Button>
                <Button
                  onClick={() => setShowSignIn(false)}
                  variant="outline"
                  className="flex-1"
                >
                  Back
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-terracotta rounded-full flex items-center justify-center text-white text-2xl">
            {user?.username?.charAt(0).toUpperCase() || <UserIcon size={24} />}
          </div>
          <div className="flex-1">
            <h1 className="text-xl font-bold">{user?.username || 'Chef'}</h1>
            <p className="text-gray-600">{user?.email}</p>
            <div className="flex items-center gap-2 mt-1">
              <ChefHat size={16} className="text-terracotta" />
              <span className="text-sm text-gray-600 capitalize">
                {user?.cooking_level || 'beginner'} cook
              </span>
            </div>
          </div>
          <Button
            onClick={handleSignOut}
            variant="outline"
            size="sm"
          >
            Sign Out
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-sm p-4 text-center">
          <div className="text-2xl font-bold text-terracotta">{userStats?.favoritesCount || 0}</div>
          <div className="text-sm text-gray-600">Favorites</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4 text-center">
          <div className="text-2xl font-bold text-terracotta">{userStats?.recipesCooked || 0}</div>
          <div className="text-sm text-gray-600">Completed</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4 text-center">
          <div className="text-2xl font-bold text-terracotta">{userStats?.completionRate || 0}%</div>
          <div className="text-sm text-gray-600">In Progress</div>
        </div>
      </div>

      {/* Favorites */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center gap-2 mb-4">
          <Heart size={20} className="text-red-500" />
          <h2 className="text-lg font-semibold">Favorite Recipes</h2>
        </div>
        {favorites.length > 0 ? (
          <div className="space-y-3">
            {favorites.map((favorite) => (
              <div key={favorite.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium">{favorite.recipe.title}</div>
                  <div className="text-sm text-gray-600">by {favorite.recipe.mama.name}</div>
                </div>
                <Button size="sm" variant="outline">
                  Cook Again
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            <Heart size={32} className="mx-auto mb-2 opacity-50" />
            <p>No favorite recipes yet</p>
            <p className="text-sm">Heart recipes to save them here</p>
          </div>
        )}
      </div>

      {/* Cooking Progress */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center gap-2 mb-4">
          <ChefHat size={20} className="text-terracotta" />
          <h2 className="text-lg font-semibold">Cooking Progress</h2>
        </div>
        {progress.length > 0 ? (
          <div className="space-y-3">
            {progress.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium">{item.recipe.title}</div>
                  <div className="text-sm text-gray-600">
                    {item.completed ? 'Completed' : `Step ${item.current_step}`}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {item.completed ? (
                    <span className="text-green-600 text-sm">✓ Done</span>
                  ) : (
                    <Button size="sm" className="bg-terracotta hover:bg-terracotta/90 text-white">
                      Continue
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            <ChefHat size={32} className="mx-auto mb-2 opacity-50" />
            <p>No cooking progress yet</p>
            <p className="text-sm">Start a recipe to track your progress</p>
          </div>
        )}
      </div>

      {/* Settings */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center gap-2 mb-4">
          <Settings size={20} className="text-gray-600" />
          <h2 className="text-lg font-semibold">Preferences</h2>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span>Cooking Level</span>
            <span className="text-terracotta capitalize">{user?.cooking_level}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Subscription</span>
            <span className="text-terracotta capitalize">{user?.subscription_tier}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Voice Guidance</span>
            <span className="text-green-600">Enabled</span>
          </div>
        </div>
      </div>
    </div>
  );
} 