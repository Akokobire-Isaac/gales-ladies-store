"use client";

import { Award, Heart, Smartphone, Truck } from "lucide-react";
import { motion } from "framer-motion";
import { Counter } from "@/components/counter";

const features = [
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Nationwide delivery across Ghana with reliable shipping partners.",
  },
  {
    icon: Smartphone,
    title: "Mobile Money Accepted",
    description: "MTN MoMo, Telecel Cash, and AirtelTigo Money for easy payments.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Carefully curated fabrics and finishes for lasting elegance.",
  },
  {
    icon: Heart,
    title: "Trusted Ghanaian Brand",
    description: "Loved by professional women across Accra and beyond.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-28" aria-labelledby="why-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Why Us</p>
          <h2
            id="why-heading"
            className="mt-2 font-heading text-3xl font-light tracking-wide"
          >
            Why Choose Us
          </h2>
          <div className="mt-6 flex justify-center gap-12 text-center">
            <div>
              <p className="font-heading text-3xl text-gold">
                <Counter end={500} suffix="+" />
              </p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Happy Clients
              </p>
            </div>
            <div>
              <p className="font-heading text-3xl text-gold">
                <Counter end={15} suffix="+" />
              </p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Collections
              </p>
            </div>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm transition-shadow hover:shadow-lg"
            >
              <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-gold/10 text-gold">
                <feature.icon className="size-6" aria-hidden />
              </div>
              <h3 className="font-heading text-lg font-medium">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
