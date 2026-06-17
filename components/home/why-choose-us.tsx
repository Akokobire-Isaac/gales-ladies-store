"use client";

import { Award, Headphones, Shield, Truck } from "lucide-react";
import { motion } from "framer-motion";
import { Counter } from "@/components/counter";

const features = [
  {
    icon: Truck,
    title: "Fast Delivery",
    description:
      "Nationwide delivery across Ghana with reliable shipping partners and careful packaging.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description:
      "Every piece is carefully inspected for premium fabrics, fit and lasting elegance.",
  },
  {
    icon: Shield,
    title: "Secure Ordering",
    description:
      "Order confidently via WhatsApp with transparent pricing and verified support.",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description:
      "Our friendly team is ready to help with sizing, orders and styling advice.",
  },
];

export function WhyChooseUs() {
  return (
    <section
      className="bg-accent/40 py-20 sm:py-28"
      aria-labelledby="why-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold">
            The Gale&apos;s Difference
          </p>
          <h2
            id="why-heading"
            className="mt-3 font-heading text-3xl font-light tracking-wide sm:text-4xl"
          >
            Why Shop With Us
          </h2>
          <div className="mt-8 flex justify-center gap-12 text-center sm:gap-16">
            <div>
              <p className="font-heading text-3xl text-gold sm:text-4xl">
                <Counter end={500} suffix="+" />
              </p>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                Happy Clients
              </p>
            </div>
            <div>
              <p className="font-heading text-3xl text-gold sm:text-4xl">
                <Counter end={50} suffix="+" />
              </p>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                Premium Styles
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
              className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-lg"
            >
              <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-accent text-gold">
                <feature.icon className="size-6" aria-hidden />
              </div>
              <h3 className="font-heading text-lg font-medium">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
