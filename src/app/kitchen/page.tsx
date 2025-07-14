"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Plus, Check, Trash2, Share2, ChevronDown, ChevronUp } from "lucide-react";
import { useShoppingListStore } from "@/lib/store/shopping-list-store";
import { Button } from "@/components/ui";

const defaultCategories = [
  { id: 'produce', name: 'Produce', emoji: '🥬' },
  { id: 'meat', name: 'Meat & Fish', emoji: '🥩' },
  { id: 'dairy', name: 'Dairy', emoji: '🥛' },
  { id: 'bakery', name: 'Bakery', emoji: '🍞' },
  { id: 'pantry', name: 'Pantry', emoji: '🥫' },
  { id: 'frozen', name: 'Frozen', emoji: '🧊' },
  { id: 'other', name: 'Other', emoji: '📦' },
];

export default function KitchenPage() {
  const { items, toggleItem, removeItem, clearChecked, updateItem, getItemsByCategory } = useShoppingListStore();
  const [showAddItem, setShowAddItem] = useState(false);
  const [newItemName, setNewItemName] = useState('');
  const [newItemQuantity, setNewItemQuantity] = useState('');
  const [newItemCategory, setNewItemCategory] = useState('produce');
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['produce', 'meat', 'dairy', 'bakery', 'pantry']);
  const [editingItem, setEditingItem] = useState<string | null>(null);

  const itemsByCategory = getItemsByCategory();
  const checkedCount = items.filter(item => item.checked).length;
  const totalCount = items.length;

  const handleAddItem = () => {
    if (newItemName.trim()) {
      useShoppingListStore.getState().addItem({
        name: newItemName.trim(),
        quantity: newItemQuantity.trim() || '1',
        category: newItemCategory,
      });
      setNewItemName('');
      setNewItemQuantity('');
      setShowAddItem(false);
    }
  };

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleShare = async () => {
    const shoppingListText = Object.entries(itemsByCategory)
      .map(([category, categoryItems]) => {
        const categoryName = defaultCategories.find(c => c.id === category)?.name || category;
        const itemsList = categoryItems
          .filter(item => !item.checked)
          .map(item => `• ${item.name} ${item.quantity}`)
          .join('\n');
        return `${categoryName}:\n${itemsList}`;
      })
      .join('\n\n');

    const fullText = `MAMIA Shopping List\n\n${shoppingListText}\n\nCreated with MAMIA - Your AI Cooking Companion`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'MAMIA Shopping List',
          text: fullText,
        });
      } catch (error) {
        console.log('Share cancelled or failed');
      }
    } else {
      // Fallback to clipboard
      navigator.clipboard.writeText(fullText);
      alert('Shopping list copied to clipboard!');
    }
  };

  return (
    <div className="px-4 py-6 max-w-2xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">My Kitchen</h1>
        <p className="text-gray-600">Manage your shopping list and pantry</p>
      </div>

      {/* Shopping List Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-md overflow-hidden mb-6"
      >
        {/* Card Header */}
        <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-4 text-white">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <ShoppingCart size={24} />
              <h2 className="text-xl font-bold">Shopping List</h2>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
              >
                <Share2 size={18} />
              </button>
              <button
                onClick={() => setShowAddItem(!showAddItem)}
                className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
              >
                <Plus size={18} />
              </button>
            </div>
          </div>
          <div className="text-sm opacity-90">
            {checkedCount > 0 ? `${checkedCount} of ${totalCount} items checked` : `${totalCount} items`}
          </div>
        </div>

        {/* Add Item Form */}
        <AnimatePresence>
          {showAddItem && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="border-b border-gray-200 overflow-hidden"
            >
              <div className="p-4 space-y-3">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Item name..."
                    value={newItemName}
                    onChange={(e) => setNewItemName(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleAddItem()}
                    className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    autoFocus
                  />
                  <input
                    type="text"
                    placeholder="Qty"
                    value={newItemQuantity}
                    onChange={(e) => setNewItemQuantity(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleAddItem()}
                    className="w-20 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div className="flex gap-2 items-center">
                  <select
                    value={newItemCategory}
                    onChange={(e) => setNewItemCategory(e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    {defaultCategories.map(cat => (
                      <option key={cat.id} value={cat.id}>
                        {cat.emoji} {cat.name}
                      </option>
                    ))}
                  </select>
                  <Button
                    onClick={handleAddItem}
                    className="bg-orange-600 hover:bg-orange-700 text-white"
                  >
                    Add
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Shopping List Items by Category */}
        <div className="divide-y divide-gray-200">
          {Object.entries(itemsByCategory).map(([categoryId, categoryItems]) => {
            const category = defaultCategories.find(c => c.id === categoryId) || { id: categoryId, name: categoryId, emoji: '📦' };
            const isExpanded = expandedCategories.includes(categoryId);
            
            return (
              <div key={categoryId}>
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(categoryId)}
                  className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{category.emoji}</span>
                    <span className="font-medium text-gray-700">{category.name}</span>
                    <span className="text-sm text-gray-500">({categoryItems.length})</span>
                  </div>
                  {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>

                {/* Category Items */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      {categoryItems.map((item) => (
                        <motion.div
                          key={item.id}
                          layout
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          className={`px-4 py-3 flex items-center gap-3 border-t border-gray-100 ${
                            item.checked ? 'bg-gray-50' : ''
                          }`}
                        >
                          <button
                            onClick={() => toggleItem(item.id)}
                            className={`flex-shrink-0 w-5 h-5 rounded border-2 transition-colors ${
                              item.checked 
                                ? 'bg-orange-600 border-orange-600' 
                                : 'border-gray-300 hover:border-orange-600'
                            }`}
                          >
                            {item.checked && (
                              <Check size={16} className="text-white" />
                            )}
                          </button>

                          {editingItem === item.id ? (
                            <div className="flex-1 flex gap-2">
                              <input
                                type="text"
                                value={item.name}
                                onChange={(e) => updateItem(item.id, { name: e.target.value })}
                                onBlur={() => setEditingItem(null)}
                                onKeyPress={(e) => e.key === 'Enter' && setEditingItem(null)}
                                className="flex-1 px-2 py-1 border border-gray-200 rounded"
                                autoFocus
                              />
                              <input
                                type="text"
                                value={item.quantity}
                                onChange={(e) => updateItem(item.id, { quantity: e.target.value })}
                                onBlur={() => setEditingItem(null)}
                                onKeyPress={(e) => e.key === 'Enter' && setEditingItem(null)}
                                className="w-16 px-2 py-1 border border-gray-200 rounded"
                              />
                            </div>
                          ) : (
                            <div 
                              className={`flex-1 flex items-center justify-between ${
                                item.checked ? 'line-through text-gray-500' : ''
                              }`}
                              onClick={() => setEditingItem(item.id)}
                            >
                              <span className="font-medium">{item.name}</span>
                              <span className="text-sm text-gray-500">{item.quantity}</span>
                            </div>
                          )}

                          <button
                            onClick={() => removeItem(item.id)}
                            className="flex-shrink-0 text-gray-400 hover:text-red-600 transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {items.length === 0 && (
          <div className="p-8 text-center">
            <div className="text-4xl mb-3">🛒</div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">Your shopping list is empty</h3>
            <p className="text-gray-600 mb-4">Add items from recipes or create your own list</p>
            <Button
              onClick={() => setShowAddItem(true)}
              className="bg-orange-600 hover:bg-orange-700 text-white"
            >
              Add First Item
            </Button>
          </div>
        )}

        {/* Footer Actions */}
        {checkedCount > 0 && (
          <div className="p-4 border-t border-gray-200">
            <Button
              onClick={clearChecked}
              variant="outline"
              className="w-full"
            >
              Clear {checkedCount} Checked Items
            </Button>
          </div>
        )}
      </motion.div>

      {/* Recipe Collections (Future Feature) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-2xl shadow-md p-6 mb-6"
      >
        <h3 className="text-lg font-bold text-gray-800 mb-3">Recipe Collections</h3>
        <div className="text-center py-8">
          <div className="text-4xl mb-3">📚</div>
          <p className="text-gray-600">Save your favorite recipes here</p>
          <p className="text-sm text-gray-500 mt-2">Coming soon!</p>
        </div>
      </motion.div>

      {/* Pantry Tracker (Future Feature) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-2xl shadow-md p-6"
      >
        <h3 className="text-lg font-bold text-gray-800 mb-3">Pantry Tracker</h3>
        <div className="text-center py-8">
          <div className="text-4xl mb-3">🥫</div>
          <p className="text-gray-600">Track what's in your pantry</p>
          <p className="text-sm text-gray-500 mt-2">Coming soon!</p>
        </div>
      </motion.div>
    </div>
  );
}