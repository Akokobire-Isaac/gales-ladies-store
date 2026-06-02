import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProductGrid } from "@/components/product/product-grid";
import { getBestSellers } from "@/lib/products";

export function BestSellers() {
  const products = getBestSellers();

  return (
    <section className="py-20 sm:py-28" aria-labelledby="bestsellers-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Curated</p>
            <h2
              id="bestsellers-heading"
              className="mt-2 font-heading text-3xl font-light tracking-wide"
            >
              Best Sellers
            </h2>
          </div>
          <Button variant="outline" render={<Link href="/shop" />}>
            View All
          </Button>
        </div>
        <ProductGrid products={products} />
      </div>
    </section>
  );
}
