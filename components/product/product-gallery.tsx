"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
  images: string[];
  name: string;
}

export function ProductGallery({ images, name }: ProductGalleryProps) {
  const [active, setActive] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  return (
    <div className="space-y-4">
      <div
        className={cn(
          "relative aspect-[3/4] overflow-hidden rounded-xl bg-muted",
          zoomed && "cursor-zoom-out"
        )}
        onClick={() => setZoomed(!zoomed)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setZoomed(!zoomed)}
        aria-label={zoomed ? "Zoom out image" : "Zoom in image"}
      >
        <Image
          src={images[active]}
          alt={name}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className={cn(
            "object-cover transition-transform duration-500",
            zoomed && "scale-150"
          )}
          priority
        />
      </div>
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {images.map((img, i) => (
            <button
              key={img}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "relative size-20 shrink-0 overflow-hidden rounded-lg border-2 transition-colors",
                active === i ? "border-gold" : "border-transparent opacity-70"
              )}
              aria-label={`View image ${i + 1}`}
            >
              <Image src={img} alt="" fill className="object-cover" sizes="80px" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
