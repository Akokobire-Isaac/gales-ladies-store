"use client";

import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product/product-card";
import { getTrendingProducts } from "@/lib/products";

export function TrendingCarousel() {
  const products = getTrendingProducts();
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: true },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.reInit();
  }, [emblaApi, products.length]);

  return (
    <section className="bg-muted/30 py-20 sm:py-28" aria-labelledby="trending-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Trending</p>
            <h2
              id="trending-heading"
              className="mt-2 font-heading text-3xl font-light tracking-wide"
            >
              Trending Now
            </h2>
          </div>
          <div className="hidden gap-2 sm:flex">
            <Button variant="outline" size="icon" onClick={scrollPrev} aria-label="Previous">
              <ChevronLeft className="size-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={scrollNext} aria-label="Next">
              <ChevronRight className="size-4" />
            </Button>
          </div>
        </div>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4 sm:gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="min-w-0 flex-[0_0_75%] sm:flex-[0_0_45%] lg:flex-[0_0_30%]"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
