"use client";

import Link from "next/link";
import { ProductImageFrame } from "@/components/product/product-image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cart-store";
import { formatPrice } from "@/lib/format";
import type { CartItem as CartItemType } from "@/types";

export function CartItemRow({ item }: { item: CartItemType }) {
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const removeItem = useCartStore((s) => s.removeItem);

  return (
    <div className="flex gap-4 border-b border-border/40 py-4">
      <Link href={`/product/${item.product.id}`} className="shrink-0">
        <ProductImageFrame
          frameClassName="size-24 rounded-sm"
          src={item.product.image}
          alt={item.product.name}
          sizes="96px"
        />
      </Link>
      <div className="flex flex-1 flex-col">
        <Link
          href={`/product/${item.product.id}`}
          className="text-sm font-medium hover:text-gold"
        >
          {item.product.name}
        </Link>
        <p className="text-xs text-muted-foreground">{item.product.category}</p>
        <p className="mt-1 text-sm font-medium">
          {formatPrice(item.product.price)}
        </p>
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-1 rounded-full border border-border">
            <Button
              variant="ghost"
              size="icon-xs"
              onClick={() =>
                updateQuantity(item.product.id, item.quantity - 1)
              }
              aria-label="Decrease quantity"
            >
              <Minus className="size-3" />
            </Button>
            <span className="w-8 text-center text-sm tabular-nums">
              {item.quantity}
            </span>
            <Button
              variant="ghost"
              size="icon-xs"
              onClick={() =>
                updateQuantity(item.product.id, item.quantity + 1)
              }
              aria-label="Increase quantity"
            >
              <Plus className="size-3" />
            </Button>
          </div>
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={() => removeItem(item.product.id)}
            aria-label="Remove item"
          >
            <Trash2 className="size-4 text-muted-foreground" />
          </Button>
        </div>
      </div>
    </div>
  );
}
