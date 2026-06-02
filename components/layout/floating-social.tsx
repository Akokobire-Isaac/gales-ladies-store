"use client";

import { InstagramIcon } from "@/components/icons";
import { SOCIAL } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function FloatingSocial() {
  return (
    <div className="fixed bottom-24 left-6 z-40 hidden flex-col gap-2 lg:flex">
      <a
        href={SOCIAL.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "flex size-10 items-center justify-center rounded-full border border-border/60 bg-background/80 text-foreground shadow-md backdrop-blur-md transition-colors hover:border-gold hover:text-gold"
        )}
        aria-label="Instagram"
      >
        <InstagramIcon />
      </a>
    </div>
  );
}
