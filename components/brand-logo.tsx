"use client";

import { useState } from "react";
import Image from "next/image";
import { LOGO_FALLBACK, LOGO_PATH } from "@/lib/constants";
import { withImageVersion } from "@/lib/image-url";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

export function BrandLogo({
  alt,
  width,
  height,
  className,
  priority,
}: BrandLogoProps) {
  const [useFallback, setUseFallback] = useState(false);
  const src = withImageVersion(useFallback ? LOGO_FALLBACK : LOGO_PATH);

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn("object-contain", className)}
      priority={priority}
      onError={() => {
        if (!useFallback) setUseFallback(true);
      }}
    />
  );
}
