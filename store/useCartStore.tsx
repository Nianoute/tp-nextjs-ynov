import { create } from "zustand";

interface ping {
  id: string;
}

interface CartStore {
  cart: ping[];
  addToCart: (item: ping) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

const useCartStore = create<CartStore>((set) => ({
  cart: [],
  addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
  removeFromCart: (id) =>
    set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),
  clearCart: () => set({ cart: [] }),
}));

export { useCartStore };
