"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BRAND_TAGLINE } from "@/lib/constants";
import { withImageVersion } from "@/lib/image-url";

export function PromoBanner() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <Image
        src={withImageVersion("/images/dress9.jpeg")}
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-brown-deep/80" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto max-w-3xl px-4 text-center text-beige-warm"
      >
        <p className="font-heading text-2xl font-light leading-relaxed sm:text-4xl">
          &ldquo;{BRAND_TAGLINE}&rdquo;
        </p>
        <Button
          className="mt-8 rounded-none bg-gold text-white hover:bg-gold/90"
          size="lg"
          render={<Link href="/shop" />}
        >
          Discover Collection
        </Button>
      </motion.div>
    </section>
  );
}
