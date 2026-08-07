import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = {
  id: string;
  name: string;
  price: number | string;
  image: string;
  selectedSize?: string;
  selectedColor?: string;
  quantity: number;
};

function parsePrice(price: number | string): number {
  if (typeof price === "number") return price;
  const numeric = price.replace(/[^0-9]/g, "");
  return numeric ? parseInt(numeric, 10) : 0;
}

type CartState = {
  items: Record<string, CartItem>;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getSubtotal: () => number;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: {},

      addItem: (newItem) => {
        set((state) => {
          const existingItem = state.items[newItem.id];
          const newQuantity = existingItem
            ? existingItem.quantity + newItem.quantity
            : newItem.quantity;

          return {
            items: {
              ...state.items,
              [newItem.id]: { ...newItem, quantity: newQuantity }
            }
          };
        });
      },

      removeItem: (id) => {
        set((state) => {
          const newItems = { ...state.items };
          delete newItems[id];
          return { items: newItems };
        });
      },

      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id);
          return;
        }

        set((state) => {
          const existingItem = state.items[id];
          if (!existingItem) return state;

          return {
            items: {
              ...state.items,
              [id]: { ...existingItem, quantity }
            }
          };
        });
      },

      clearCart: () => {
        set({ items: {} });
      },

      getTotalItems: () => {
        return Object.values(get().items).reduce((total, item) => total + item.quantity, 0);
      },

      getSubtotal: () => {
        return Object.values(get().items).reduce(
          (total, item) => total + parsePrice(item.price) * item.quantity,
          0
        );
      }
    }),
    {
      name: "cart-storage"
    }
  )
);
