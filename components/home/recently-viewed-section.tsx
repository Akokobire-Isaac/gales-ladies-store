"use client";

import { RecentlyViewed } from "@/components/product/recently-viewed";

export function RecentlyViewedSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RecentlyViewed />
      </div>
    </section>
  );
}
