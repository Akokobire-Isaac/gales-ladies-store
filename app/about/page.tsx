import type { Metadata } from "next";
import Image from "next/image";
import { BRAND_DESCRIPTION, BRAND_NAME } from "@/lib/constants";
import { Counter } from "@/components/counter";

export const metadata: Metadata = {
  title: "About Us",
  description: BRAND_DESCRIPTION,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-xs uppercase tracking-[0.3em] text-gold">Our Story</p>
      <h1 className="mt-2 font-heading text-4xl font-light tracking-wide">
        About {BRAND_NAME}
      </h1>
      <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-sm bg-muted">
        <Image
          src="/images/dress11.jpeg"
          alt={BRAND_NAME}
          fill
          className="object-cover"
          sizes="(max-width: 896px) 100vw, 896px"
        />
      </div>
      <div className="prose prose-neutral mt-10 max-w-none dark:prose-invert">
        <p className="text-lg leading-relaxed text-muted-foreground">
          {BRAND_DESCRIPTION}
        </p>
        <p className="mt-6 leading-relaxed text-muted-foreground">
          Founded in Ghana, we serve professional women who demand elegance,
          quality, and trust. From corporate office outfits to luxury handbags
          and heels, every piece is selected to help you look and feel your
          best.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-3 gap-8 text-center">
        <div>
          <p className="font-heading text-3xl text-gold">
            <Counter end={500} suffix="+" />
          </p>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            Clients
          </p>
        </div>
        <div>
          <p className="font-heading text-3xl text-gold">
            <Counter end={7} />
          </p>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            Categories
          </p>
        </div>
        <div>
          <p className="font-heading text-3xl text-gold">
            <Counter end={100} suffix="%" />
          </p>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            Ghanaian Owned
          </p>
        </div>
      </div>
    </div>
  );
}
