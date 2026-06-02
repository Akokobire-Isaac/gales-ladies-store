"use client";

import Image from "next/image";
import Link from "next/link";
import { InstagramIcon } from "@/components/icons";
import { SOCIAL } from "@/lib/constants";

const galleryImages = [
  "/images/dress11.jpeg",
  "/images/Top1.jpeg",
  "/images/Bag1.jpeg",
  "/images/heels.jpeg",
  "/images/dress9.jpeg",
  "/images/Bag4.jpeg",
];

export function SocialShowcase() {
  return (
    <section className="py-20 sm:py-28" aria-labelledby="social-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">@gales_apparel</p>
            <h2
              id="social-heading"
              className="mt-2 font-heading text-3xl font-light tracking-wide"
            >
              Follow Our Style
            </h2>
          </div>
          <Link
            href={SOCIAL.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-gold"
          >
            <InstagramIcon />
            Follow on Instagram
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
          {galleryImages.map((src, i) => (
            <div
              key={src}
              className={`relative overflow-hidden rounded-sm bg-muted ${
                i === 0 ? "col-span-2 row-span-2 aspect-square sm:aspect-auto sm:min-h-[400px]" : "aspect-square"
              }`}
            >
              <Image
                src={src}
                alt={`Gale's Ladies Apparel style ${i + 1}`}
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
