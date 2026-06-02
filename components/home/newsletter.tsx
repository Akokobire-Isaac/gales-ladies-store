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
    <section className="py-20 sm:py-28" aria-labelledby="newsletter-heading">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Exclusive</p>
        <h2
          id="newsletter-heading"
          className="mt-2 font-heading text-3xl font-light tracking-wide"
        >
          Join Our Newsletter
        </h2>
        <p className="mt-4 text-muted-foreground">
          Be the first to know about new collections, sales, and styling tips.
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
            className="flex-1"
            aria-label="Email address"
            required
          />
          <Button type="submit" className="rounded-none sm:min-w-[140px]">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
}
