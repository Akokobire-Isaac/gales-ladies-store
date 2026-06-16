import { Hero } from "@/components/home/hero";
import { TrustBadges } from "@/components/trust-badges";
import { FeaturedCollection } from "@/components/home/featured-collection";
import { Categories } from "@/components/home/categories";
import { NewArrivalsSection } from "@/components/home/new-arrivals-section";
import { BestSellers } from "@/components/home/best-sellers";
import { VideoShowcase } from "@/components/home/video-showcase";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { Testimonials } from "@/components/home/testimonials";
import { Newsletter } from "@/components/home/newsletter";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="border-b border-border/60 bg-background py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <TrustBadges />
        </div>
      </div>
      <FeaturedCollection />
      <Categories />
      <NewArrivalsSection />
      <BestSellers />
      <VideoShowcase />
      <WhyChooseUs />
      <Testimonials />
      <Newsletter />
    </>
  );
}
