"use client";

import { SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ProductFilters } from "@/components/product/product-filters";
import type { ProductCategory, SortOption } from "@/types";

interface MobileFiltersProps {
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
}

export function MobileFilters(props: MobileFiltersProps) {
  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button variant="outline" size="sm" className="lg:hidden">
            <SlidersHorizontal className="size-4" />
            Filters
          </Button>
        }
      />
      <SheetContent side="left" className="w-full max-w-sm overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
        </SheetHeader>
        <ProductFilters {...props} className="mt-4 border-0 p-0" />
      </SheetContent>
    </Sheet>
  );
}
