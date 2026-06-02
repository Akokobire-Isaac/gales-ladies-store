import type { Metadata } from "next";
import { ProductGrid } from "@/components/product/product-grid";
import { getSaleProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Sale",
  description: "Shop discounted premium women's fashion at Gale's Ladies Apparel.",
};

export default function SalePage() {
  const products = getSaleProducts();

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <p className="text-xs uppercase tracking-[0.3em] text-gold">Limited Time</p>
      <h1 className="mt-2 font-heading text-3xl font-light tracking-wide sm:text-4xl">
        Sale
      </h1>
      <div className="mt-10">
        {products.length === 0 ? (
          <p className="py-20 text-center text-muted-foreground">
            No sale items at the moment. Check back soon!
          </p>
        ) : (
          <ProductGrid products={products} />
        )}
      </div>
    </div>
  );
}
