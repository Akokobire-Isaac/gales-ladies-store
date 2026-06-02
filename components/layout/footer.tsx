import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { MessageCircle } from "lucide-react";
import { InstagramIcon } from "@/components/icons";
import { categories } from "@/data/categories";
import {
  BRAND_NAME,
  BRAND_TAGLINE,
  SOCIAL,
  WHATSAPP_NUMBER,
} from "@/lib/constants";

const quickLinks = [
  { href: "/shop", label: "Shop All" },
  { href: "/new-arrivals", label: "New Arrivals" },
  { href: "/sale", label: "Sale" },
  { href: "/wishlist", label: "Wishlist" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-brown-deep text-beige-warm">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <BrandLogo
              alt={BRAND_NAME}
              width={140}
              height={56}
              className="mb-4 h-14 w-auto brightness-110"
            />
            <p className="text-sm leading-relaxed text-beige-warm/80">
              {BRAND_TAGLINE}
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-full border border-beige-warm/20 transition-colors hover:border-gold hover:text-gold"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href={SOCIAL.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-full border border-beige-warm/20 transition-colors hover:border-gold hover:text-gold"
                aria-label="WhatsApp"
              >
                <MessageCircle className="size-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-beige-warm/80 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Categories
            </h3>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={cat.href}
                    className="text-sm text-beige-warm/80 transition-colors hover:text-gold"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-beige-warm/80">
              <li>
                WhatsApp:{" "}
                <a
                  href={SOCIAL.whatsapp}
                  className="hover:text-gold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {WHATSAPP_NUMBER}
                </a>
              </li>
              <li>Instagram: @gales_apparel</li>
              <li>TikTok: Gale&apos;s Apparel</li>
              <li>Snapchat: galesapparel</li>
              <li className="pt-2 text-xs">
                MTN MoMo · Telecel Cash · AirtelTigo Money
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-beige-warm/10 pt-8 sm:flex-row">
          <p className="text-xs text-beige-warm/60">
            © {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
          </p>
          <p className="text-xs text-beige-warm/60">
            Premium Ghanaian Women&apos;s Fashion
          </p>
        </div>
      </div>
    </footer>
  );
}
