"use client";

import type { ProductCategory, SortOption } from "@/types";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const categories: (ProductCategory | "all")[] = [
  "all",
  "Dresses",
  "Sandals",
  "Unisex Safety Boots",
];

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
];

interface ProductFiltersProps {
  category: ProductCategory | "all";
  sort: SortOption;
  minPrice: string;
  maxPrice: string;
  onSale: boolean;
  onCategoryChange: (c: ProductCategory | "all") => void;
  onSortChange: (s: SortOption) => void;
  onMinPriceChange: (v: string) => void;
  onMaxPriceChange: (v: string) => void;
  onSaleChange: (v: boolean) => void;
  className?: string;
}

export function ProductFilters({
  category,
  sort,
  minPrice,
  maxPrice,
  onSale,
  onCategoryChange,
  onSortChange,
  onMinPriceChange,
  onMaxPriceChange,
  onSaleChange,
  className,
}: ProductFiltersProps) {
  return (
    <aside
      className={cn("space-y-6 rounded-xl border border-border/60 p-6", className)}
      aria-label="Product filters"
    >
      <div>
        <Label className="mb-3 block text-xs uppercase tracking-widest">
          Category
        </Label>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => onCategoryChange(cat)}
              className={cn(
                "rounded-full border px-3 py-1 text-xs transition-colors",
                category === cat
                  ? "border-foreground bg-foreground text-background"
                  : "border-border hover:border-gold"
              )}
            >
              {cat === "all" ? "All" : cat}
            </button>
          ))}
        </div>
      </div>

      <div>
        <Label className="mb-3 block text-xs uppercase tracking-widest">
          Price Range (GHS)
        </Label>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Min"
            value={minPrice}
            onChange={(e) => onMinPriceChange(e.target.value)}
            className="h-9 w-full rounded-lg border border-input bg-transparent px-3 text-sm"
            aria-label="Minimum price"
          />
          <input
            type="number"
            placeholder="Max"
            value={maxPrice}
            onChange={(e) => onMaxPriceChange(e.target.value)}
            className="h-9 w-full rounded-lg border border-input bg-transparent px-3 text-sm"
            aria-label="Maximum price"
          />
        </div>
      </div>

      <label className="flex cursor-pointer items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={onSale}
          onChange={(e) => onSaleChange(e.target.checked)}
          className="size-4 rounded border-border accent-gold"
        />
        On sale only
      </label>

      <div>
        <Label className="mb-3 block text-xs uppercase tracking-widest">
          Sort By
        </Label>
        <select
          value={sort}
          onChange={(e) => onSortChange(e.target.value as SortOption)}
          className="h-9 w-full rounded-lg border border-input bg-transparent px-3 text-sm"
          aria-label="Sort products"
        >
          {sortOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </aside>
  );
}
