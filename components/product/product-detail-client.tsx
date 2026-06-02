"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Heart, Minus, Plus, ShoppingBag } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { ProductGallery } from "./product-gallery";
import { ProductGrid } from "./product-grid";
import { RecentlyViewed } from "./recently-viewed";
import { useCartStore } from "@/store/cart-store";
import { useWishlistStore } from "@/store/wishlist-store";
import { useRecentlyViewedStore } from "@/store/recently-viewed-store";
import { calcDiscount, formatPrice } from "@/lib/format";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/types";

interface ProductDetailClientProps {
  product: Product;
  related: Product[];
}

export function ProductDetailClient({
  product,
  related,
}: ProductDetailClientProps) {
  const [qty, setQty] = useState(1);
  const addItem = useCartStore((s) => s.addItem);
  const setCartOpen = useCartStore((s) => s.setOpen);
  const { toggle, has } = useWishlistStore();
  const addRecent = useRecentlyViewedStore((s) => s.add);
  const wished = has(product.id);
  const discount = calcDiscount(product.price, product.oldPrice);
  const images = product.images ?? [product.image];

  useEffect(() => {
    addRecent(product);
  }, [product, addRecent]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2">
        <ProductGallery images={images} name={product.name} />
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            {product.category}
          </p>
          <h1 className="mt-2 font-heading text-3xl font-light tracking-wide sm:text-4xl">
            {product.name}
          </h1>
          <div className="mt-4 flex items-center gap-3">
            <span className="text-2xl font-medium">
              {formatPrice(product.price)}
            </span>
            {product.oldPrice && (
              <span className="text-lg text-muted-foreground line-through">
                {formatPrice(product.oldPrice)}
              </span>
            )}
            {discount && (
              <Badge className="border-0 bg-gold text-white">-{discount}%</Badge>
            )}
          </div>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            {product.description}
          </p>

          <div className="mt-8 flex items-center gap-3">
            <span className="text-sm font-medium">Quantity</span>
            <div className="flex items-center rounded-full border border-border">
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={() => setQty(Math.max(1, qty - 1))}
                aria-label="Decrease quantity"
              >
                <Minus className="size-4" />
              </Button>
              <span className="w-10 text-center tabular-nums">{qty}</span>
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={() => setQty(qty + 1)}
                aria-label="Increase quantity"
              >
                <Plus className="size-4" />
              </Button>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="flex-1 rounded-none"
              onClick={() => {
                addItem(product, qty);
                setCartOpen(true);
                toast.success("Added to cart");
              }}
            >
              <ShoppingBag className="size-4" />
              Add to Cart
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-none"
              onClick={() => {
                toggle(product);
                toast.success(
                  wished ? "Removed from wishlist" : "Added to wishlist"
                );
              }}
              aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
            >
              <Heart
                className={wished ? "fill-red-500 text-red-500" : undefined}
              />
            </Button>
          </div>

          <Button
            variant="link"
            className="mt-4 px-0"
            render={<Link href="/checkout" />}
          >
            Proceed to checkout →
          </Button>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20 border-t border-border/60 pt-16">
          <h2 className="mb-8 font-heading text-2xl font-light tracking-wide">
            You May Also Like
          </h2>
          <ProductGrid products={related} />
        </section>
      )}

      <RecentlyViewed excludeId={product.id} />
    </div>
  );
}
