import type { Metadata } from "next";
import {
  BRAND_DESCRIPTION,
  BRAND_NAME,
  LOGO_PATH,
  SITE_URL,
} from "./constants";
import { withImageVersion } from "./image-url";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BRAND_NAME} | Premium Women's Fashion Ghana`,
    template: `%s | ${BRAND_NAME}`,
  },
  description: BRAND_DESCRIPTION,
  keywords: [
    "fashion store Ghana",
    "women's clothing Ghana",
    "dresses in Ghana",
    "office wear Ghana",
    "luxury handbags Ghana",
    "women's heels Ghana",
    "Ghanaian fashion brand",
    "professional women's wear",
  ],
  authors: [{ name: BRAND_NAME }],
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: SITE_URL,
    siteName: BRAND_NAME,
    title: `${BRAND_NAME} | Premium Women's Fashion Ghana`,
    description: BRAND_DESCRIPTION,
    images: [{ url: withImageVersion(LOGO_PATH), width: 512, height: 512, alt: BRAND_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND_NAME} | Premium Women's Fashion Ghana`,
    description: BRAND_DESCRIPTION,
    images: [withImageVersion(LOGO_PATH)],
  },
  robots: { index: true, follow: true },
};

export function productJsonLd(product: {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `${SITE_URL}${withImageVersion(product.image)}`,
    sku: product.id,
    brand: { "@type": "Brand", name: BRAND_NAME },
    category: product.category,
    offers: {
      "@type": "Offer",
      priceCurrency: "GHS",
      price: product.price,
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/product/${product.id}`,
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    name: BRAND_NAME,
    description: BRAND_DESCRIPTION,
    url: SITE_URL,
    logo: `${SITE_URL}${withImageVersion(LOGO_PATH)}`,
    areaServed: "GH",
    priceRange: "$$",
  };
}
