"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, Heart, ShoppingBag } from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cart-store";
import { useWishlistStore } from "@/store/wishlist-store";
import { calcDiscount, formatPrice } from "@/lib/format";
import type { Product } from "@/types";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
  priority?: boolean;
}

export function ProductCard({
  product,
  onQuickView,
  priority = false,
}: ProductCardProps) {
  const addItem = useCartStore((s) => s.addItem);
  const setCartOpen = useCartStore((s) => s.setOpen);
  const { toggle, has } = useWishlistStore();
  const discount = calcDiscount(product.price, product.oldPrice);
  const wished = has(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product);
    setCartOpen(true);
    toast.success("Added to cart", { description: product.name });
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    toggle(product);
    toast.success(wished ? "Removed from wishlist" : "Added to wishlist");
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <Link href={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-muted">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority={priority}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {discount && (
            <Badge className="absolute top-3 left-3 border-0 bg-gold text-white">
              -{discount}%
            </Badge>
          )}
          {product.isNew && (
            <Badge
              variant="secondary"
              className="absolute top-3 right-3 border-0 bg-background/90 backdrop-blur-sm"
            >
              New
            </Badge>
          )}

          <div className="absolute right-3 bottom-3 left-3 flex translate-y-2 gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <Button
              size="icon-sm"
              variant="secondary"
              className="rounded-full bg-background/90 backdrop-blur-md"
              onClick={handleWishlist}
              aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
            >
              <Heart
                className={cn("size-4", wished && "fill-red-500 text-red-500")}
              />
            </Button>
            {onQuickView && (
              <Button
                size="icon-sm"
                variant="secondary"
                className="rounded-full bg-background/90 backdrop-blur-md"
                onClick={(e) => {
                  e.preventDefault();
                  onQuickView(product);
                }}
                aria-label="Quick view"
              >
                <Eye className="size-4" />
              </Button>
            )}
            <Button
              size="icon-sm"
              className="flex-1 rounded-full bg-foreground text-background hover:bg-foreground/90"
              onClick={handleAddToCart}
              aria-label="Add to cart"
            >
              <ShoppingBag className="size-4" />
            </Button>
          </div>
        </div>

        <div className="mt-4 space-y-1">
          <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            {product.category}
          </p>
          <h3 className="font-heading text-sm font-medium tracking-wide">
            {product.name}
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">{formatPrice(product.price)}</span>
            {product.oldPrice && (
              <span className="text-xs text-muted-foreground line-through">
                {formatPrice(product.oldPrice)}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
