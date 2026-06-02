import { Hero } from "@/components/home/hero";
import { Categories } from "@/components/home/categories";
import { TrendingCarousel } from "@/components/home/trending-carousel";
import { BestSellers } from "@/components/home/best-sellers";
import { PromoBanner } from "@/components/home/promo-banner";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { SocialShowcase } from "@/components/home/social-showcase";
import { Testimonials } from "@/components/home/testimonials";
import { Newsletter } from "@/components/home/newsletter";
import { RecentlyViewedSection } from "@/components/home/recently-viewed-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <TrendingCarousel />
      <BestSellers />
      <RecentlyViewedSection />
      <PromoBanner />
      <WhyChooseUs />
      <SocialShowcase />
      <Testimonials />
      <Newsletter />
    </>
  );
}
