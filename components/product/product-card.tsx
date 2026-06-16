"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { calcDiscount, formatProductPrice } from "@/lib/format";
import { openProductWhatsApp } from "@/lib/whatsapp";
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
  const discount = calcDiscount(product.price, product.oldPrice);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="relative">
        <Link href={`/product/${product.id}`} className="block">
          <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-muted shadow-sm transition-shadow duration-500 group-hover:shadow-xl">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              priority={priority}
              loading={priority ? undefined : "lazy"}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {discount && (
              <Badge className="absolute top-3 left-3 border-0 bg-gold text-white">
                -{discount}%
              </Badge>
            )}
            {product.badge && (
              <Badge className="absolute top-3 left-3 border-0 bg-foreground text-background">
                {product.badge}
              </Badge>
            )}
            {product.isNew && (
              <Badge
                variant="secondary"
                className={cn(
                  "absolute top-3 border-0 bg-gold/90 text-white backdrop-blur-sm",
                  product.badge ? "right-3" : "right-3 left-auto"
                )}
              >
                New Arrival
              </Badge>
            )}
          </div>
        </Link>

        <div className="absolute right-3 bottom-3 left-3 flex translate-y-3 flex-col gap-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          {onQuickView && (
            <Button
              size="sm"
              variant="secondary"
              className="w-full rounded-full bg-background/95 text-xs backdrop-blur-md hover:bg-gold hover:text-white"
              onClick={(e) => {
                e.preventDefault();
                onQuickView(product);
              }}
            >
              <Eye className="size-3.5" />
              Quick View
            </Button>
          )}
          <Button
            size="sm"
            className="w-full rounded-full bg-foreground text-background hover:bg-gold hover:text-white"
            onClick={(e) => {
              e.preventDefault();
              openProductWhatsApp(product);
            }}
          >
            <MessageCircle className="size-3.5" />
            Order on WhatsApp
          </Button>
        </div>
      </div>

      <Link href={`/product/${product.id}`} className="mt-4 block space-y-1.5">
        <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-gold">
          {product.category}
        </p>
        <h3 className="font-heading text-sm font-medium tracking-wide transition-colors group-hover:text-gold">
          {product.name}
        </h3>
        <p className="text-sm font-semibold text-foreground">
          {formatProductPrice(product)}
        </p>
      </Link>
    </motion.article>
  );
}
