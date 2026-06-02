"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  BRAND_NAME,
  HERO_IMAGE_FALLBACK,
  HERO_IMAGE_PRIMARY,
} from "@/lib/constants";

export function Hero() {
  const [heroSrc, setHeroSrc] = useState(HERO_IMAGE_PRIMARY);

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      <Image
        src={heroSrc}
        alt={`${BRAND_NAME} — Premium women's fashion`}
        fill
        priority
        className="object-cover"
        sizes="100vw"
        onError={() => {
          if (heroSrc !== HERO_IMAGE_FALLBACK) {
            setHeroSrc(HERO_IMAGE_FALLBACK);
          }
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 text-xs uppercase tracking-[0.4em] text-gold"
        >
          Premium Ghanaian Fashion
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-heading text-4xl font-light tracking-tight sm:text-6xl md:text-7xl"
        >
          {BRAND_NAME}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base"
        >
          Elegant fashion for modern professional women in Ghana. Dresses, office
          wear, luxury handbags, heels & more.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <Link href="/shop">
  <Button
    size="lg"
    className="min-w-[160px] rounded-none bg-white text-foreground hover:bg-white/90"
  >
    Shop Now
  </Button>
</Link>
          <Button
            size="lg"
            variant="outline"
            className="min-w-[160px] rounded-none border-white/60 bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
            render={<Link href="/new-arrivals" />}
          >
            New Arrivals
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="min-w-[160px] rounded-none border-gold/60 bg-gold/20 text-white hover:bg-gold/30"
            render={<Link href="/shop/dresses" />}
          >
            Featured Collections
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
