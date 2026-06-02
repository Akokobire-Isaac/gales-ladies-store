import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { InstagramIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { BRAND_NAME, SOCIAL, WHATSAPP_NUMBER } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${BRAND_NAME} via WhatsApp or social media.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 text-center sm:px-6">
      <p className="text-xs uppercase tracking-[0.3em] text-gold">Get in Touch</p>
      <h1 className="mt-2 font-heading text-4xl font-light tracking-wide">
        Contact Us
      </h1>
      <p className="mt-6 text-muted-foreground">
        We&apos;re here to help with orders, sizing, and styling advice.
      </p>
      <div className="mt-10 space-y-4">
        <Button
          size="lg"
          className="w-full max-w-sm rounded-none"
          render={
            <a href={SOCIAL.whatsapp} target="_blank" rel="noopener noreferrer" />
          }
        >
          <MessageCircle className="size-4" />
          WhatsApp: {WHATSAPP_NUMBER}
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="w-full max-w-sm rounded-none"
          render={
            <a
              href={SOCIAL.instagram}
              target="_blank"
              rel="noopener noreferrer"
            />
          }
        >
          <InstagramIcon />
          @gales_apparel
        </Button>
      </div>
      <ul className="mt-12 space-y-2 text-sm text-muted-foreground">
        <li>TikTok: Gale&apos;s Apparel</li>
        <li>Snapchat: galesapparel</li>
        <li>MTN MoMo · Telecel Cash · AirtelTigo Money</li>
      </ul>
      <p className="mt-8">
        <Link href="/shop" className="text-sm font-medium hover:text-gold">
          Continue shopping →
        </Link>
      </p>
    </div>
  );
}
