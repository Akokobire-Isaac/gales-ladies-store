import type { Metadata } from "next";
import { ProductGrid } from "@/components/product/product-grid";
import { getNewArrivals } from "@/lib/products";

export const metadata: Metadata = {
  title: "New Arrivals",
  description:
    "Discover the latest women's fashion arrivals at Gale's Ladies Apparel Ghana.",
};

export default function NewArrivalsPage() {
  const products = getNewArrivals();

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <p className="text-xs uppercase tracking-[0.3em] text-gold">Just In</p>
      <h1 className="mt-2 font-heading text-3xl font-light tracking-wide sm:text-4xl">
        New Arrivals
      </h1>
      <div className="mt-10">
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
