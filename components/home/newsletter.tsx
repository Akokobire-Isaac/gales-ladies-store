"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      toast.error("Please enter a valid email");
      return;
    }
    toast.success("Welcome to the inner circle!", {
      description: "You'll receive exclusive offers and new arrivals.",
    });
    setEmail("");
  };

  return (
    <section
      className="relative overflow-hidden py-20 sm:py-28"
      aria-labelledby="newsletter-heading"
    >
      <div className="absolute inset-0 bg-foreground" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#C9A22733,_transparent_60%)]" />

      <div className="relative mx-auto max-w-2xl px-4 text-center sm:px-6">
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold">
          Stay Connected
        </p>
        <h2
          id="newsletter-heading"
          className="mt-3 font-heading text-3xl font-light tracking-wide text-white sm:text-4xl"
        >
          Join Our Newsletter
        </h2>
        <p className="mt-4 text-sm text-white/70">
          Be the first to know about new collections, exclusive offers and
          styling inspiration.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <Input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 rounded-full border-white/20 bg-white/10 text-white placeholder:text-white/50"
            aria-label="Email address"
            required
          />
          <Button
            type="submit"
            className="rounded-full bg-gold px-8 text-foreground hover:bg-gold/90 sm:min-w-[160px]"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
}
