"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Home, Book, ChefHat, House } from 'lucide-react';

interface NavItem {
  href: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>;
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

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/' || pathname === '/mamas' || pathname.startsWith('/mamas/');
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="bottom-nav">
      <div className="mobile-container h-full">
        <div className="flex items-center justify-around h-full px-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-item ${active ? 'active' : ''} animate-scale`}
              >
                <Icon 
                  size={24} 
                  className={`mb-1 transition-colors duration-200 ${
                    active ? 'text-terracotta' : 'text-gray-600'
                  }`}
                  style={active ? { color: 'var(--terracotta)' } : {}}
                />
                <span 
                  className={`text-xs font-medium transition-colors duration-200 ${
                    active ? 'text-terracotta' : 'text-gray-600'
                  }`}
                  style={active ? { color: 'var(--terracotta)' } : {}}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
} 