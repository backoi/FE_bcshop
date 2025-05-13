// src/store/store.js
import { create } from "zustand";

const useCart = create((set) => ({
  cart: [],
  isCartOpen: false,

  addToCart: (product: any) => {
    console.log("product", product.productId);
    set((state: any) => {
      const existingItem = state.cart.find(
        (item: any) => item.productId === product.productId
      );

      if (existingItem) {
        console.log("co san pham, tang so luong", existingItem);
        return {
          cart: state.cart.map((item: any) =>
            item.productId === product.productId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      console.log("chua co san pham");
      return { cart: [...state.cart, { ...product, quantity: 1 }] };
    });
    console.log("add thành công");
  },

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

  toggleCart: () =>
    set((state: any) => {
      return { isCartOpen: !state.isCartOpen };
    }),
  clearCart: () => set((state: any) => ({ cart: [] })),
}));

export default useCart;
