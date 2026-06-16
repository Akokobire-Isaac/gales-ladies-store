import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductGrid } from "@/components/product/product-grid";
import { getFeaturedProducts } from "@/lib/products";

export function FeaturedCollection() {
  const products = getFeaturedProducts(8);

  return (
    <section
      className="bg-accent/50 py-20 sm:py-28"
      aria-labelledby="featured-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold">
              Curated For You
            </p>
            <h2
              id="featured-heading"
              className="mt-3 font-heading text-3xl font-light tracking-wide sm:text-4xl"
            >
              Featured Collection
            </h2>
            <p className="mt-3 max-w-lg text-sm text-muted-foreground">
              Handpicked pieces that define elegance — from statement dresses to
              timeless essentials.
            </p>
          </div>
          <Button
            variant="outline"
            className="rounded-full border-foreground hover:bg-foreground hover:text-background"
            render={<Link href="/shop/dresses" />}
          >
            View Collection
            <ArrowRight className="size-4" />
          </Button>
        </div>
        <ProductGrid products={products} />
      </div>
    </section>
  );
}
