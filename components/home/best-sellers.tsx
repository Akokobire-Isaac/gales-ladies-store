import Link from "next/link";
import { ProductGrid } from "@/components/product/product-grid";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getBestSellers } from "@/lib/products";

export function BestSellers() {
  const products = getBestSellers();

  return (
    <section className="py-20 sm:py-28" aria-labelledby="bestsellers-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold">
              Customer Favorites
            </p>

            <h2
              id="bestsellers-heading"
              className="mt-3 font-heading text-3xl font-light tracking-wide sm:text-4xl"
            >
              Best Sellers
            </h2>
          </div>

          <Link
            href="/shop"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "rounded-full border-foreground hover:bg-foreground hover:text-background"
            )}
          >
            View All
          </Link>
        </div>

        <ProductGrid products={products} />
      </div>
    </section>
  );
}