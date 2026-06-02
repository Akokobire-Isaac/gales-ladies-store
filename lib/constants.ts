export const BRAND_NAME = "Gale's Ladies Apparel";
export const BRAND_TAGLINE =
  "Elegant fashion for modern professional women in Ghana.";
export const BRAND_DESCRIPTION =
  "Premium Ghanaian women's fashion — professional wear, elegant dresses, luxury handbags, heels, and accessories. Nationwide delivery with Mobile Money accepted.";

/** Primary logo — also supports /images/logo.png if you add it */
export const LOGO_PATH = "/images/logo.jpeg";
export const LOGO_FALLBACK = "/images/logo.png";
/** Add public/images/hero.jpg to use a dedicated hero; falls back automatically */
export const HERO_IMAGE_PRIMARY = "/images/hero.jpg";
export const HERO_IMAGE_FALLBACK = "/images/dress11.jpeg";

export const WHATSAPP_NUMBER = "0249938095";
export const WHATSAPP_URL = "https://wa.me/233249938095";

export const SOCIAL = {
  instagram: "https://instagram.com/gales_apparel",
  tiktok: "https://www.tiktok.com/@gales_apparel",
  snapchat: "https://www.snapchat.com/add/galesapparel",
  whatsapp: WHATSAPP_URL,
} as const;

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://galesladiesapparel.com";

export const CURRENCY = "GHS";
