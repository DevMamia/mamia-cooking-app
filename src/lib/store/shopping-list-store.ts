import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface ShoppingItem {
  id: string;
  name: string;
  quantity: string;
  unit?: string;
  category: string;
  checked: boolean;
  recipeId?: string;
  recipeName?: string;
}

interface ShoppingListStore {
  items: ShoppingItem[];
  addItem: (item: Omit<ShoppingItem, 'id' | 'checked'>) => void;
  addItems: (items: Omit<ShoppingItem, 'id' | 'checked'>[]) => void;
  removeItem: (id: string) => void;
  toggleItem: (id: string) => void;
  updateItem: (id: string, updates: Partial<ShoppingItem>) => void;
  clearChecked: () => void;
  clearAll: () => void;
  getItemsByCategory: () => { [category: string]: ShoppingItem[] };
}

export const useShoppingListStore = create<ShoppingListStore>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (item) => set((state) => ({
        items: [...state.items, {
          ...item,
          id: `item-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          checked: false
        }]
      })),
      
      addItems: (newItems) => set((state) => ({
        items: [...state.items, ...newItems.map(item => ({
          ...item,
          id: `item-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          checked: false
        }))]
      })),
      
      removeItem: (id) => set((state) => ({
        items: state.items.filter(item => item.id !== id)
      })),
      
      toggleItem: (id) => set((state) => ({
        items: state.items.map(item =>
          item.id === id ? { ...item, checked: !item.checked } : item
        )
      })),
      
      updateItem: (id, updates) => set((state) => ({
        items: state.items.map(item =>
          item.id === id ? { ...item, ...updates } : item
        )
      })),
      
      clearChecked: () => set((state) => ({
        items: state.items.filter(item => !item.checked)
      })),
      
      clearAll: () => set({ items: [] }),
      
      getItemsByCategory: () => {
        const state = get();
        if (!state) return {};
        return state.items.reduce((acc, item) => {
          if (!acc[item.category]) {
            acc[item.category] = [];
          }
          acc[item.category].push(item);
          return acc;
        }, {} as { [category: string]: ShoppingItem[] });
      }
    }),
    {
      name: 'mamia-shopping-list',
    }
  )
);