"use client";

import React from "react";
import { Heart, BookOpen, ShoppingCart, Clock, Star } from "lucide-react";
import { Button, Badge, MamaAvatar } from "@/components/ui";

export default function KitchenPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="text-center">
        <h1 className="text-mobile-xl font-bold mb-2" style={{ color: 'var(--terracotta)' }}>
          My Kitchen
        </h1>
        <p className="text-gray-600 text-mobile">
          Your saved recipes and cooking progress
        </p>
      </div>

      {/* Kitchen Stats */}
      <div className="grid grid-cols-3 gap-3">
        <div className="card p-4 text-center">
          <div className="text-2xl font-bold" style={{ color: 'var(--terracotta)' }}>
            12
          </div>
          <div className="text-sm text-gray-600">Recipes Saved</div>
        </div>
        <div className="card p-4 text-center">
          <div className="text-2xl font-bold" style={{ color: 'var(--terracotta)' }}>
            8
          </div>
          <div className="text-sm text-gray-600">Recipes Cooked</div>
        </div>
        <div className="card p-4 text-center">
          <div className="text-2xl font-bold" style={{ color: 'var(--terracotta)' }}>
            4.8
          </div>
          <div className="text-sm text-gray-600">Avg Rating</div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="space-y-4">
        <h2 className="text-mobile-lg font-semibold" style={{ color: 'var(--warm-brown)' }}>
          Quick Actions
        </h2>
        <div className="grid grid-cols-2 gap-3">
          <Button className="btn-secondary touch-target-large flex flex-col items-center space-y-2 py-4">
            <Heart size={24} />
            <span>Saved Recipes</span>
          </Button>
          <Button className="btn-secondary touch-target-large flex flex-col items-center space-y-2 py-4">
            <ShoppingCart size={24} />
            <span>Shopping List</span>
          </Button>
          <Button className="btn-secondary touch-target-large flex flex-col items-center space-y-2 py-4">
            <BookOpen size={24} />
            <span>Recipe History</span>
          </Button>
          <Button className="btn-secondary touch-target-large flex flex-col items-center space-y-2 py-4">
            <Clock size={24} />
            <span>Meal Planner</span>
          </Button>
        </div>
      </div>

      {/* Favorite Mamas */}
      <div className="space-y-4">
        <h2 className="text-mobile-lg font-semibold" style={{ color: 'var(--warm-brown)' }}>
          Your Favorite Mamas
        </h2>
        <div className="flex justify-around">
          <div className="text-center">
            <MamaAvatar mama="nonna" size="large" state="happy" />
            <p className="text-sm mt-2 font-medium">Nonna</p>
            <div className="flex items-center justify-center mt-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-xs text-gray-600 ml-1">5 recipes</span>
            </div>
          </div>
          <div className="text-center">
            <MamaAvatar mama="abuela" size="large" state="encouraging" />
            <p className="text-sm mt-2 font-medium">Abuela</p>
            <div className="flex items-center justify-center mt-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-xs text-gray-600 ml-1">4 recipes</span>
            </div>
          </div>
          <div className="text-center">
            <MamaAvatar mama="mae" size="large" state="thinking" />
            <p className="text-sm mt-2 font-medium">Mae</p>
            <div className="flex items-center justify-center mt-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-xs text-gray-600 ml-1">3 recipes</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="space-y-4">
        <h2 className="text-mobile-lg font-semibold" style={{ color: 'var(--warm-brown)' }}>
          Recent Activity
        </h2>
        <div className="space-y-3">
          <div className="card p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--terracotta)' }}></div>
                <div>
                  <h4 className="font-medium" style={{ color: 'var(--warm-brown)' }}>
                    Cooked Nonna&rsquo;s Bolognese
                  </h4>
                  <p className="text-sm text-gray-600">2 hours ago</p>
                </div>
              </div>
              <Badge variant="outline">Completed</Badge>
            </div>
          </div>
          
          <div className="card p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                <div>
                  <h4 className="font-medium" style={{ color: 'var(--warm-brown)' }}>
                    Saved Mae&rsquo;s Curry Recipe
                  </h4>
                  <p className="text-sm text-gray-600">1 day ago</p>
                </div>
              </div>
              <Badge>Saved</Badge>
            </div>
          </div>
          
          <div className="card p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                <div>
                  <h4 className="font-medium" style={{ color: 'var(--warm-brown)' }}>
                    Added ingredients to shopping list
                  </h4>
                  <p className="text-sm text-gray-600">3 days ago</p>
                </div>
              </div>
              <Badge variant="secondary">Shopping</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 