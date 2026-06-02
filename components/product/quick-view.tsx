"use client";

import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cart-store";
import { formatPrice } from "@/lib/format";
import type { Product } from "@/types";

interface QuickViewProps {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function QuickView({ product, open, onOpenChange }: QuickViewProps) {
  const addItem = useCartStore((s) => s.addItem);
  const setCartOpen = useCartStore((s) => s.setOpen);

  if (!product) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl gap-0 overflow-hidden p-0 sm:max-w-4xl">
        <div className="grid sm:grid-cols-2">
          <div className="relative aspect-[3/4] bg-muted">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
          <div className="flex flex-col p-6 sm:p-8">
            <DialogHeader>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {product.category}
              </p>
              <DialogTitle className="font-heading text-2xl font-light">
                {product.name}
              </DialogTitle>
            </DialogHeader>
            <p className="mt-4 line-clamp-4 text-sm text-muted-foreground">
              {product.description}
            </p>
            <p className="mt-4 text-lg font-medium">
              {formatPrice(product.price)}
            </p>
            <div className="mt-auto flex flex-col gap-2 pt-8">
              <Button
                onClick={() => {
                  addItem(product);
                  setCartOpen(true);
                  onOpenChange(false);
                  toast.success("Added to cart");
                }}
              >
                Add to Cart
              </Button>
              <Button
                variant="outline"
                render={<Link href={`/product/${product.id}`} />}
                onClick={() => onOpenChange(false)}
              >
                View Full Details
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
