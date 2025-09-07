'use client'

import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export interface CartItem {
  id: string
  name: string
  price: number
  imageUrl: string
  quantity: number
}

interface CartStore {
  items: CartItem[]
  // Computed values (stored as state, not getters)
  totalItems: number
  subtotal: number
  tax: number
  shipping: number
  total: number
  // Actions
  addItem: (item: Omit<CartItem, 'quantity'>) => void
  updateQuantity: (id: string, quantity: number) => void
  removeItem: (id: string) => void
  clearCart: () => void
  // Internal action to recalculate totals
  _recalculate: () => void
  // Utility functions
  getItem: (id: string) => CartItem | undefined
  isInCart: (id: string) => boolean
}

const TAX_RATE = 0.18 // 18% GST (Goods and Services Tax in India)
const FREE_SHIPPING_THRESHOLD = 300 // ₹300 for free shipping
const SHIPPING_COST = 99 // ₹99 shipping cost

// Helper function to calculate totals
const calculateTotals = (items: CartItem[]) => {
  const totalItems = items.reduce((total, item) => total + item.quantity, 0)
  const subtotal = items.reduce((total, item) => total + (item.price * item.quantity), 0)
  const tax = subtotal * TAX_RATE
  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST
  const total = subtotal + tax + shipping
  
  return { totalItems, subtotal, tax, shipping, total }
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      // Initial computed values
      totalItems: 0,
      subtotal: 0,
      tax: 0,
      shipping: SHIPPING_COST,
      total: SHIPPING_COST,

      // Internal action to recalculate totals
      _recalculate: () => {
        const state = get()
        const totals = calculateTotals(state.items)
        set({
          totalItems: totals.totalItems,
          subtotal: totals.subtotal,
          tax: totals.tax,
          shipping: totals.shipping,
          total: totals.total,
        })
      },

      // Actions
      addItem: (newItem) => {
        set((state) => {
          const existingItem = state.items.find(item => item.id === newItem.id)
          
          let newItems: CartItem[]
          if (existingItem) {
            // If item already exists, increase quantity
            newItems = state.items.map(item =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          } else {
            // Add new item with quantity 1
            newItems = [...state.items, { ...newItem, quantity: 1 }]
          }
          
          const totals = calculateTotals(newItems)
          return {
            items: newItems,
            ...totals
          }
        })
      },

      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          // If quantity is 0 or negative, remove the item
          get().removeItem(id)
          return
        }
        
        set((state) => {
          const newItems = state.items.map(item =>
            item.id === id ? { ...item, quantity } : item
          )
          const totals = calculateTotals(newItems)
          return {
            items: newItems,
            ...totals
          }
        })
      },

      removeItem: (id) => {
        set((state) => {
          const newItems = state.items.filter(item => item.id !== id)
          const totals = calculateTotals(newItems)
          return {
            items: newItems,
            ...totals
          }
        })
      },

      clearCart: () => {
        const totals = calculateTotals([])
        set({ 
          items: [],
          ...totals
        })
      },

      // Utility functions
      getItem: (id) => {
        return get().items.find(item => item.id === id)
      },

      isInCart: (id) => {
        return get().items.some(item => item.id === id)
      },
    }),
    {
      name: 'bloom-ai-cart', // localStorage key
      storage: createJSONStorage(() => localStorage),
      // Only persist the items array, computed values will be recalculated
      partialize: (state) => ({ items: state.items }),
      // Merge function to recalculate totals after rehydration
      merge: (persistedState, currentState) => {
        const items = (persistedState as any)?.items || []
        const totals = calculateTotals(items)
        return {
          ...currentState,
          items,
          ...totals,
        }
      },
    }
  )
)
