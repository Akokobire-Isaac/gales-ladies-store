"use client";

import { useState } from "react";
import Image from "next/image";
import { LOGO_FALLBACK, LOGO_PATH } from "@/lib/constants";
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
  const [src, setSrc] = useState(LOGO_PATH);

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn("object-contain", className)}
      priority={priority}
      onError={() => {
        if (src !== LOGO_FALLBACK) setSrc(LOGO_FALLBACK);
      }}
    />
  );
}
