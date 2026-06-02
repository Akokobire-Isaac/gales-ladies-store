import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { BackToTop } from "@/components/layout/back-to-top";
import { FloatingWhatsApp } from "@/components/layout/floating-whatsapp";
import { FloatingSocial } from "@/components/layout/floating-social";
import { Providers } from "@/components/providers";
import { TrustBadges } from "@/components/trust-badges";
import { defaultMetadata } from "@/lib/seo";
import { organizationJsonLd } from "@/lib/seo";
import { LOGO_PATH } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  ...defaultMetadata,
  icons: {
    icon: LOGO_PATH,
    apple: LOGO_PATH,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf8f5" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1410" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd()),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${cormorant.variable} min-h-screen font-sans antialiased`}
      >
        <Providers>
          <ScrollProgress />
          <Header />
          <main className="flex-1">{children}</main>
          <section className="border-t border-border/60 bg-muted/20 py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <TrustBadges />
            </div>
          </section>
          <Footer />
          <FloatingWhatsApp />
          <FloatingSocial />
          <BackToTop />
        </Providers>
      </body>
    </html>
  );
}
