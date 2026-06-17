"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  BRAND_NAME,
  HERO_IMAGE_FALLBACK,
  HERO_IMAGE_PRIMARY,
} from "@/lib/constants";

export function Hero() {
  const [heroSrc, setHeroSrc] = useState(HERO_IMAGE_PRIMARY);

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
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

      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="max-w-xl text-white">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4 text-xs font-medium uppercase tracking-[0.45em] text-gold"
          >
            Luxury Ghanaian Fashion
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading text-4xl leading-[1.1] font-light tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Elevate Your
            <span className="mt-2 block text-gold">Everyday Style</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 max-w-md text-sm leading-relaxed text-white/85 sm:text-base"
          >
            Discover curated dresses, elegant sandals and professional safety
            boots crafted for the modern Ghanaian woman who demands quality,
            style and confidence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="/shop"
              className={cn(
                buttonVariants({ size: "lg" }),
                "min-w-[180px] rounded-full bg-foreground px-8 hover:bg-gold"
              )}
            >
              Shop Collection
              <ArrowRight className="ml-2 size-4" />
            </Link>

            <Link
              href="/new-arrivals"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "min-w-[180px] rounded-full border-white/40 bg-white/10 text-white backdrop-blur-md hover:border-gold hover:bg-gold/20"
              )}
            >
              New Arrivals
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative hidden aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl lg:block"
        >
          <Image
            src="/images/dress54.jpeg"
            alt="Featured fashion collection"
            fill
            className="object-cover"
            sizes="50vw"
            priority
          />

          <div className="absolute inset-0 rounded-2xl ring-1 ring-white/20 ring-inset" />

          <div className="absolute right-6 bottom-6 left-6 rounded-xl border border-white/20 bg-black/40 p-4 backdrop-blur-md">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">
              New Season
            </p>
            <p className="mt-1 font-heading text-xl font-light text-white">
              Premium Dresses from GH₵280
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}