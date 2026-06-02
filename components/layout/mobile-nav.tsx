"use client";

import Link from "next/link";
import { categories } from "@/data/categories";

const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "All Products" },
  { href: "/new-arrivals", label: "New Arrivals" },
  { href: "/sale", label: "Sale" },
  { href: "/wishlist", label: "Wishlist" },
  { href: "/cart", label: "Cart" },
  { href: "/checkout", label: "Checkout" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function MobileNav({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav className="flex flex-col p-4" aria-label="Mobile navigation">
      <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
        Menu
      </p>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={onNavigate}
          className="border-b border-border/40 py-3 text-sm font-medium tracking-wide transition-colors hover:text-gold"
        >
          {link.label}
        </Link>
      ))}
      <p className="mb-2 mt-6 text-xs font-medium uppercase tracking-widest text-muted-foreground">
        Categories
      </p>
      {categories.map((cat) => (
        <Link
          key={cat.slug}
          href={cat.href}
          onClick={onNavigate}
          className="py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          {cat.name}
        </Link>
      ))}
    </nav>
  );
}
