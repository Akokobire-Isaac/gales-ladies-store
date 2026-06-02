"use client";

import { Heart } from "lucide-react";
import { ProductGrid } from "@/components/product/product-grid";
import { EmptyState } from "@/components/empty-state";
import { useWishlistStore } from "@/store/wishlist-store";

export default function WishlistPage() {
  const items = useWishlistStore((s) => s.items);

  if (items.length === 0) {
    return (
      <EmptyState
        title="Your wishlist is empty"
        description="Save your favourite pieces by tapping the heart on any product."
        actionLabel="Browse Shop"
        actionHref="/shop"
        icon={<Heart className="size-8" />}
      />
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-8 font-heading text-3xl font-light tracking-wide">
        Wishlist ({items.length})
      </h1>
      <ProductGrid products={items} />
    </div>
  );
}
