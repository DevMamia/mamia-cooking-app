"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Home, Book, ChefHat, House, ShoppingCart } from 'lucide-react';
import { useShoppingListStore } from '@/lib/store/shopping-list-store';

interface NavItem {
  href: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>;
  badge?: number;
}

const navItems: NavItem[] = [
  {
    href: '/',
    label: 'Mamas',
    icon: Home,
  },
  {
    href: '/recipes',
    label: 'Recipes',
    icon: Book,
  },
  {
    href: '/cook',
    label: 'Cook',
    icon: ChefHat,
  },
  {
    href: '/kitchen',
    label: 'My Kitchen',
    icon: House,
  },
];

export function BottomNav() {
  const pathname = usePathname();
  const shoppingListCount = useShoppingListStore((state) => state.items.filter(item => !item.checked).length);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/' || pathname === '/mamas' || pathname.startsWith('/mamas/');
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 h-16 shadow-lg">
      <div className="max-w-screen-xl mx-auto h-full">
        <div className="flex items-center justify-around h-full px-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            const showBadge = item.href === '/kitchen' && shoppingListCount > 0;
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative flex flex-col items-center justify-center h-full px-3 py-2 transition-all duration-200 active:scale-95"
              >
                <div className="relative">
                  <Icon 
                    size={24} 
                    className={`mb-1 transition-colors duration-200 ${
                      active ? 'text-orange-600' : 'text-gray-500'
                    }`}
                  />
                  {showBadge && (
                    <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                      {shoppingListCount}
                    </div>
                  )}
                </div>
                <span 
                  className={`text-xs font-medium transition-colors duration-200 ${
                    active ? 'text-orange-600' : 'text-gray-500'
                  }`}
                >
                  {item.label}
                </span>
                {active && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-orange-600 rounded-full" />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
} 