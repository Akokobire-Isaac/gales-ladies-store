"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useDebounce } from "@/hooks/use-debounce";
import { filterAndSortProducts } from "@/lib/products";
import { formatPrice } from "@/lib/format";

interface SearchModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SearchModal({ open, onOpenChange }: SearchModalProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  const debounced = useDebounce(query, 200);
  const results = useMemo(
    () =>
      debounced.trim()
        ? filterAndSortProducts({ search: debounced }).slice(0, 8)
        : [],
    [debounced]
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="top-[15%] max-h-[80vh] translate-y-0 gap-4 sm:max-w-xl">
        <DialogHeader>
          <DialogTitle className="sr-only">Search products</DialogTitle>
        </DialogHeader>
        <div className="relative">
          <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search dresses, heels, bags..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10"
            autoFocus
            aria-label="Search products"
          />
        </div>
        <div className="max-h-[50vh] overflow-y-auto">
          {debounced.trim() && results.length === 0 && (
            <p className="py-8 text-center text-sm text-muted-foreground">
              No products found
            </p>
          )}
          <ul className="divide-y divide-border/40">
            {results.map((product) => (
              <li key={product.id}>
                <Link
                  href={`/product/${product.id}`}
                  onClick={() => onOpenChange(false)}
                  className="flex items-center gap-4 py-3 transition-colors hover:bg-muted/50"
                >
                  <div className="relative size-14 shrink-0 overflow-hidden rounded-sm bg-muted">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">{product.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {product.category}
                    </p>
                  </div>
                  <span className="text-sm font-medium">
                    {formatPrice(product.price)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}
