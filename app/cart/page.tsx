"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartItemRow } from "@/components/cart/cart-item";
import { EmptyState } from "@/components/empty-state";
import { useCartStore } from "@/store/cart-store";
import { formatPrice } from "@/lib/format";

export default function CartPage() {
  const { items, getTotal, clearCart } = useCartStore();
  const total = getTotal();

  if (items.length === 0) {
    return (
      <EmptyState
        title="Your bag is empty"
        description="Discover our latest collections and find something you love."
        icon={<ShoppingBag className="size-8" />}
      />
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="font-heading text-3xl font-light tracking-wide">
          Shopping Bag
        </h1>
        <Button variant="ghost" size="sm" onClick={clearCart}>
          Clear all
        </Button>
      </div>
      <div className="divide-y divide-border/40">
        {items.map((item) => (
          <CartItemRow key={item.product.id} item={item} />
        ))}
      </div>
      <div className="mt-8 space-y-4 border-t border-border/60 pt-8">
        <div className="flex justify-between text-lg font-medium">
          <span>Total</span>
          <span>{formatPrice(total)}</span>
        </div>
        <Button
          size="lg"
          className="w-full rounded-none"
          render={<Link href="/checkout" />}
        >
          Proceed to Checkout
        </Button>
        <Button
          variant="outline"
          className="w-full rounded-none"
          render={<Link href="/shop" />}
        >
          Continue Shopping
        </Button>
      </div>
    </div>
  );
}
