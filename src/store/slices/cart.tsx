// src/store/store.js
import { create } from "zustand";

const useStore = create((set) => ({
  cart: [],
  isCartOpen: false,

  addToCart: (product: any) =>
    set((state: any) => {
      const existingItem = state.cart.find(
        (item: any) => item.id === product.id
      );
      if (existingItem) {
        return {
          cart: state.cart.map((item: any) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return { cart: [...state.cart, { ...product, quantity: 1 }] };
    }),

  removeFromCart: (productId: any) =>
    set((state: any) => ({
      cart: state.cart.filter((item: any) => item.id !== productId),
    })),

  updateQuantity: (productId: any, quantity: any) =>
    set((state: any) => ({
      cart: state.cart.map((item: any) =>
        item.id === productId ? { ...item, quantity } : item
      ),
    })),

  toggleCart: () => set((state: any) => ({ isCartOpen: !state.isCartOpen })),
}));

export default useStore;
