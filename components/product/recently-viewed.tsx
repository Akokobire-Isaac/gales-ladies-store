"use client";

import Link from "next/link";
import { ProductCard } from "./product-card";
import { useRecentlyViewedStore } from "@/store/recently-viewed-store";
import { useMounted } from "@/hooks/use-mounted";

interface RecentlyViewedProps {
  excludeId?: string;
  title?: string;
}

export function RecentlyViewed({
  excludeId,
  title = "Recently Viewed",
}: RecentlyViewedProps) {
  const mounted = useMounted();
  const items = useRecentlyViewedStore((s) => s.items);
  const filtered = items.filter((p) => p.id !== excludeId).slice(0, 4);

  if (!mounted || filtered.length === 0) return null;

  return (
    <section className="border-t border-border/60 py-16" aria-labelledby="recent-heading">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Continue browsing</p>
          <h2
            id="recent-heading"
            className="mt-2 font-heading text-2xl font-light tracking-wide"
          >
            {title}
          </h2>
        </div>
        <Link href="/shop" className="text-sm font-medium hover:text-gold">
          View all →
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
