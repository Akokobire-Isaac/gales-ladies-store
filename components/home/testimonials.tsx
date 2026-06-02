"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Ama O.",
    location: "Accra",
    text: "The office dress quality is exceptional. I receive compliments every time I wear it to meetings.",
    rating: 5,
  },
  {
    name: "Efua M.",
    location: "Kumasi",
    text: "Fast delivery and beautiful packaging. Gale's is my go-to for professional women's wear in Ghana.",
    rating: 5,
  },
  {
    name: "Abena K.",
    location: "Tema",
    text: "The luxury handbag exceeded my expectations. Premium feel at a fair price. Mobile Money checkout was seamless.",
    rating: 5,
  },
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section
      className="bg-muted/30 py-20 sm:py-28"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Reviews</p>
          <h2
            id="testimonials-heading"
            className="mt-2 font-heading text-3xl font-light tracking-wide"
          >
            What Our Clients Say
          </h2>
        </div>
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="min-w-0 flex-[0_0_100%] px-4 sm:flex-[0_0_80%] sm:px-8 lg:flex-[0_0_60%]"
                >
                  <blockquote className="mx-auto max-w-xl rounded-xl border border-border/60 bg-card p-8 text-center shadow-sm">
                    <div className="mb-4 flex justify-center gap-0.5 text-gold">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="size-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-lg font-light leading-relaxed italic">
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <footer className="mt-6">
                      <cite className="not-italic">
                        <span className="font-medium">{t.name}</span>
                        <span className="text-muted-foreground"> · {t.location}</span>
                      </cite>
                    </footer>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 flex justify-center gap-2">
            <Button variant="outline" size="icon" onClick={scrollPrev} aria-label="Previous testimonial">
              <ChevronLeft className="size-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={scrollNext} aria-label="Next testimonial">
              <ChevronRight className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
