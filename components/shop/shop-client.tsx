"use client";

import { useMemo, useState } from "react";
import type { ProductCategory, SortOption } from "@/types";
import { ProductFilters } from "@/components/product/product-filters";
import { ProductGrid } from "@/components/product/product-grid";
import { MobileFilters } from "@/components/shop/mobile-filters";
import { filterAndSortProducts } from "@/lib/products";
import { cn } from "@/lib/utils";
interface ShopClientProps {
  initialCategory?: ProductCategory | "all";
  title?: string;
}

export function ShopClient({
  initialCategory = "all",
  title = "All Products",
}: ShopClientProps) {
  const [category, setCategory] = useState<ProductCategory | "all">(
    initialCategory
  );
  const [sort, setSort] = useState<SortOption>("newest");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [onSale, setOnSale] = useState(false);

  const products = useMemo(
    () =>
      filterAndSortProducts({
        category,
        sort,
        minPrice: minPrice ? Number(minPrice) : undefined,
        maxPrice: maxPrice ? Number(maxPrice) : undefined,
        onSale,
      }),
    [category, sort, minPrice, maxPrice, onSale]
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-8 font-heading text-3xl font-light tracking-wide sm:text-4xl">
        {title}
      </h1>
      <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
        <ProductFilters
          category={category}
          sort={sort}
          minPrice={minPrice}
          maxPrice={maxPrice}
          onSale={onSale}
          onCategoryChange={setCategory}
          onSortChange={setSort}
          onMinPriceChange={setMinPrice}
          onMaxPriceChange={setMaxPrice}
          onSaleChange={setOnSale}
          className={cn(
            "hidden lg:sticky lg:top-24 lg:block lg:self-start"
          )}
        />
        <div>
          <div className="mb-6 flex items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              {products.length} product{products.length !== 1 ? "s" : ""}
            </p>
            <MobileFilters
              category={category}
              sort={sort}
              minPrice={minPrice}
              maxPrice={maxPrice}
              onSale={onSale}
              onCategoryChange={setCategory}
              onSortChange={setSort}
              onMinPriceChange={setMinPrice}
              onMaxPriceChange={setMaxPrice}
              onSaleChange={setOnSale}
            />
          </div>
          {products.length === 0 ? (
            <p className="py-20 text-center text-muted-foreground">
              No products match your filters.
            </p>
          ) : (
            <ProductGrid products={products} />
          )}
        </div>
      </div>
    </div>
  );
}
