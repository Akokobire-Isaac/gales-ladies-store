"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ProductCard } from "./product-card";
import { formatProductPrice } from "@/lib/format";
import { getRelatedProducts } from "@/lib/products";
import { openProductWhatsApp } from "@/lib/whatsapp";
import type { Product } from "@/types";
import { cn } from "@/lib/utils";

interface QuickViewProps {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onQuickView?: (product: Product) => void;
}

export function QuickView({
  product,
  open,
  onOpenChange,
  onQuickView,
}: QuickViewProps) {
  const [activeImage, setActiveImage] = useState(0);

  if (!product) return null;

  const images = product.images ?? [product.image];
  const related = getRelatedProducts(product, 4);

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        if (!next) setActiveImage(0);
        onOpenChange(next);
      }}
    >
      <DialogContent
        key={product.id}
        className="max-h-[95vh] max-w-5xl gap-0 overflow-y-auto p-0 sm:max-w-6xl"
      >
        <div className="grid lg:grid-cols-2">
          <div className="space-y-3 p-4 sm:p-6">
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-muted">
              <Image
                src={images[activeImage]}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            {images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {images.map((img, i) => (
                  <button
                    key={img}
                    type="button"
                    onClick={() => setActiveImage(i)}
                    className={cn(
                      "relative size-16 shrink-0 overflow-hidden rounded-lg border-2 transition-colors sm:size-20",
                      activeImage === i
                        ? "border-gold"
                        : "border-transparent opacity-70 hover:opacity-100"
                    )}
                    aria-label={`View image ${i + 1}`}
                  >
                    <Image
                      src={img}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col border-t border-border/60 p-6 sm:p-8 lg:border-t-0 lg:border-l">
            <DialogHeader>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
                {product.category}
              </p>
              <DialogTitle className="font-heading text-2xl font-light tracking-wide sm:text-3xl">
                {product.name}
              </DialogTitle>
            </DialogHeader>

            <p className="mt-4 text-xl font-semibold">
              {formatProductPrice(product)}
            </p>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {product.description}
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <Button
                size="lg"
                className="rounded-full bg-foreground hover:bg-gold"
                onClick={() => openProductWhatsApp(product)}
              >
                <MessageCircle className="size-4" />
                Order on WhatsApp
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full"
                render={<Link href={`/product/${product.id}`} />}
                onClick={() => onOpenChange(false)}
              >
                View Full Details
              </Button>
            </div>

            {related.length > 0 && (
              <div className="mt-10 border-t border-border/60 pt-8">
                <h3 className="mb-4 font-heading text-lg font-light tracking-wide">
                  Related Products
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {related.slice(0, 2).map((item) => (
                    <ProductCard
                      key={item.id}
                      product={item}
                      onQuickView={onQuickView}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
