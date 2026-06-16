import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductGrid } from "@/components/product/product-grid";
import { getNewArrivals } from "@/lib/products";

export function NewArrivalsSection() {
  const products = getNewArrivals().slice(0, 8);

  return (
    <section className="py-20 sm:py-28" aria-labelledby="new-arrivals-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold">
              Just Landed
            </p>
            <h2
              id="new-arrivals-heading"
              className="mt-3 font-heading text-3xl font-light tracking-wide sm:text-4xl"
            >
              New Arrivals
            </h2>
            <p className="mt-3 max-w-lg text-sm text-muted-foreground">
              Fresh styles added weekly. Be the first to discover our latest
              dress collection.
            </p>
          </div>
          <Button
            variant="outline"
            className="rounded-full border-foreground hover:bg-foreground hover:text-background"
            render={<Link href="/new-arrivals" />}
          >
            Shop New Arrivals
            <ArrowRight className="size-4" />
          </Button>
        </div>
        <ProductGrid products={products} />
      </div>
    </section>
  );
}
