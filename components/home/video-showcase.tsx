"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { showcaseVideos } from "@/data/videos";

function VideoCard({
  src,
  title,
  category,
  poster,
}: {
  src: string;
  title: string;
  category: string;
  poster?: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-foreground shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative aspect-[9/16] sm:aspect-[3/4]">
        <video
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute top-4 left-4 flex size-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-colors group-hover:bg-gold">
          <Play className="size-4 fill-current" />
        </div>
        <div className="absolute right-4 bottom-4 left-4">
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-gold">
            {category}
          </p>
          <p className="mt-1 font-heading text-lg font-light text-white">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}

export function VideoShowcase() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps",
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section
      className="bg-foreground py-20 text-white sm:py-28"
      aria-labelledby="video-showcase-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold">
              See It In Motion
            </p>
            <h2
              id="video-showcase-heading"
              className="mt-3 font-heading text-3xl font-light tracking-wide sm:text-4xl"
            >
              Video Showcase
            </h2>
            <p className="mt-3 max-w-lg text-sm text-white/70">
              Watch our latest dresses, sandals, and safety boots come to life.
            </p>
          </div>
        </motion.div>

        <div className="relative">
          <Button
            variant="outline"
            size="icon"
            onClick={scrollPrev}
            className="absolute top-1/2 left-2 z-10 -translate-y-1/2 rounded-full border-white/30 bg-black/30 text-white backdrop-blur-md hover:border-gold hover:bg-gold hover:text-white sm:left-4"
            aria-label="Previous video"
          >
            <ChevronLeft className="size-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={scrollNext}
            className="absolute top-1/2 right-2 z-10 -translate-y-1/2 rounded-full border-white/30 bg-black/30 text-white backdrop-blur-md hover:border-gold hover:bg-gold hover:text-white sm:right-4"
            aria-label="Next video"
          >
            <ChevronRight className="size-4" />
          </Button>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 sm:gap-6">
              {showcaseVideos.map((video) => (
                <div
                  key={video.id}
                  className="min-w-0 flex-[0_0_78%] sm:flex-[0_0_45%] lg:flex-[0_0_30%]"
                >
                  <VideoCard
                    src={video.src}
                    title={video.title}
                    category={video.category}
                    poster={video.poster}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
