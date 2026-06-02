"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "@/types";

interface WishlistState {
  items: Product[];
  toggle: (product: Product) => void;
  remove: (productId: string) => void;
  has: (productId: string) => boolean;
  clear: () => void;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],
      toggle: (product) => {
        const exists = get().has(product.id);
        if (exists) {
          set((s) => ({
            items: s.items.filter((p) => p.id !== product.id),
          }));
        } else {
          set((s) => ({ items: [...s.items, product] }));
        }
      },
      remove: (productId) => {
        set((s) => ({
          items: s.items.filter((p) => p.id !== productId),
        }));
      },
      has: (productId) => get().items.some((p) => p.id === productId),
      clear: () => set({ items: [] }),
    }),
    { name: "gales-wishlist" }
  )
);
