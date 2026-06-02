"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "@/types";

const MAX_ITEMS = 8;

interface RecentlyViewedState {
  items: Product[];
  add: (product: Product) => void;
}

export const useRecentlyViewedStore = create<RecentlyViewedState>()(
  persist(
    (set, get) => ({
      items: [],
      add: (product) => {
        const filtered = get().items.filter((p) => p.id !== product.id);
        set({ items: [product, ...filtered].slice(0, MAX_ITEMS) });
      },
    }),
    { name: "gales-recently-viewed" }
  )
);
