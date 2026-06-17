import type { Product } from "@/types";

const DRESS_PRICE_MAP: Record<number, { price: number; priceMax?: number }> = {
  17: { price: 280 },
  18: { price: 400 },
  19: { price: 400 },
  20: { price: 400 },
  21: { price: 400 },
  22: { price: 400 },
  23: { price: 400 },
  24: { price: 400 },
  30: { price: 190, priceMax: 220 },
  44: { price: 280 },
  45: { price: 280 },
  46: { price: 280 },
  47: { price: 280 },
  48: { price: 280 },
  49: { price: 280 },
  50: { price: 280 },
  51: { price: 280 },
  52: { price: 280 },
  53: { price: 280 },
  54: { price: 400 },
};

const DRESS_CATALOG: Record<number, { name: string; description: string }> = {
  17: {
    name: "Ivory Executive Peplum Suit",
    description:
      "A refined ivory peplum jacket with a sculptural shawl collar and gold hardware, paired with a tailored pencil skirt for commanding boardroom presence.",
  },
  18: {
    name: "Executive Burgundy Vest Set",
    description:
      "A wine-burgundy waistcoat and wide-leg trouser set layered over a polka-dot blouse — bold executive tailoring for the woman who leads with style.",
  },
  19: {
    name: "Ivory Grace Wide-Leg Set",
    description:
      "A sleeveless beige vest with gold-button detailing and matching wide-leg trousers, crafted for polished professionalism from morning meetings to evening receptions.",
  },
  20: {
    name: "Midnight Executive Waistcoat Set",
    description:
      "A black tie-belt waistcoat over a crisp white shirt with flowing wide-leg trousers — timeless monochrome power dressing at its finest.",
  },
  21: {
    name: "Terracotta Executive Vest Set",
    description:
      "A warm rust-toned sleeveless vest with gold buttons and matching creased wide-leg trousers, bringing confident colour to the modern executive wardrobe.",
  },
  22: {
    name: "Emerald Grace Peplum Set",
    description:
      "An emerald peplum blouse adorned with pearl-tipped floral lace appliqués, paired with a tiered midi skirt for refined feminine authority.",
  },
  23: {
    name: "Forest Executive Waistcoat Set",
    description:
      "A deep forest-green waistcoat with a bow-tie belt, crisp white shirt, and wide-leg trousers — commanding elegance rooted in nature-inspired tones.",
  },
  24: {
    name: "Royal Burgundy Waistcoat Set",
    description:
      "A burgundy tie-belt waistcoat layered over a white collared shirt with matching tailored trousers — a signature look for the discerning professional.",
  },
  25: {
    name: "Royal Plum Scallop Blouse Set",
    description:
      "A burgundy blouse with a dramatic pearl-trimmed scalloped collar, styled with crisp cream wide-leg trousers for elevated corporate sophistication.",
  },
  26: {
    name: "Camel Executive Vest Set",
    description:
      "A caramel-toned sleeveless vest with gold buttons and matching wide-leg trousers — understated luxury for the executive who values timeless neutrals.",
  },
  27: {
    name: "Magenta Rosette Vest Set",
    description:
      "A vivid magenta tailored vest with a statement fabric rosette and matching creased trousers — fearless colour for the woman at the top.",
  },
  28: {
    name: "Terracotta Elite Blazer Set",
    description:
      "A double-breasted burnt-orange blazer with a contrasting white lapel and self-tie belt, paired with flowing wide-leg trousers for modern power dressing.",
  },
  29: {
    name: "Sky Executive Blazer Set",
    description:
      "A powder-blue double-breasted blazer with white lapel accents and a fabric belt, finished with wide-leg trousers for fresh, authoritative office style.",
  },
  30: {
    name: "Heritage Brown Elite Blazer Set",
    description:
      "A cinnamon-brown belted blazer with crisp white lapel detailing and wide-leg trousers — warm, grounded elegance for the corporate professional.",
  },
  31: {
    name: "Emerald Executive Shirt Dress",
    description:
      "A belted shirt dress with a notched lapel, button-front closure, and pleated A-line skirt — structured sophistication in a single polished piece.",
  },
  32: {
    name: "Sage Cascade Ruffle Dress",
    description:
      "An olive-green sheath midi with a dramatic cascading shoulder ruffle, tailored for the professional who commands attention with quiet confidence.",
  },
  33: {
    name: "Noir Contrast Blazer Dress",
    description:
      "A black A-line blazer dress with a crisp white notched collar, silver-buckle belt, and structured short sleeves — boardroom authority in one elegant silhouette.",
  },
  34: {
    name: "Midnight Cascade Midi Dress",
    description:
      "A navy sheath midi with a sculptural shoulder-to-hip ruffle detail and three-quarter sleeves — architectural elegance for the modern office.",
  },
  35: {
    name: "Signature Geo-Piped Sheath Dress",
    description:
      "A form-fitting midi dress with bold white geometric piping across the bodice and skirt — a designer statement for high-level corporate occasions.",
  },
  36: {
    name: "Forest Peplum Corporate Set",
    description:
      "A three-piece set featuring a white blouse, peplum waistcoat with brooch detail, and knee-length pencil skirt — couture tailoring for the executive woman.",
  },
  37: {
    name: "Royal Cobalt Zip Accent Dress",
    description:
      "A royal-blue A-line dress with a diagonal gold zipper neckline and belted waist — contemporary polish with a touch of runway flair.",
  },
  38: {
    name: "Signature Twist-Waist Midi Dress",
    description:
      "A knee-length midi with a gathered twist-waist detail and gold brooch accent, available in black, burgundy, and navy for versatile executive elegance.",
  },
  39: {
    name: "Heritage Wrap Pleated Dress",
    description:
      "A blazer-collar wrap dress with decorative button detailing, pleated A-line skirt, and side pockets — refined authority with effortless movement.",
  },
  40: {
    name: "Midnight Pleated Executive Dress",
    description:
      "A navy V-neck dress with a gold-buckle belt and full accordion-pleated skirt — graceful structure for formal office events and evening engagements.",
  },
  41: {
    name: "Royal Cobalt Wrap Midi Dress",
    description:
      "A vibrant cobalt wrap-front midi with short sleeves and a rectangular gold-buckle belt — confident colour for the woman who owns the room.",
  },
  42: {
    name: "Heritage Olive Pleat Dress",
    description:
      "An olive-green A-line midi with pin-tuck bodice detailing, flutter sleeves, and gold button accents — earthy sophistication for everyday executive wear.",
  },
  43: {
    name: "Classic Beige Pleated Blazer Dress",
    description:
      "A double-breasted beige blazer dress with gold buttons and knife-pleated skirt — the definitive piece for polished corporate dressing.",
  },
  44: {
    name: "Executive Denim Zip Midi Dress",
    description:
      "A dark-wash sleeveless denim midi with a full-length front zipper and panelled A-line skirt — smart casual redefined for the modern professional.",
  },
  45: {
    name: "Heritage Denim Belted Midi Dress",
    description:
      "A light-wash denim shirt dress with puff sleeves, button-front closure, and a tie-waist belt — relaxed refinement for creative corporate settings.",
  },
  46: {
    name: "Signature Denim Vest Maxi Dress",
    description:
      "A medium-wash sleeveless denim shirt dress with chest pockets, tie belt, and front slit — effortless executive denim from desk to dinner.",
  },
  47: {
    name: "Corporate Tiered Denim Dress",
    description:
      "A structured denim shirt dress with flap pockets and a tiered flared skirt — playful yet professional, perfect for the contemporary office.",
  },
  48: {
    name: "Executive Belted Denim Dress",
    description:
      "A sleeveless medium-wash denim midi with a silver-buckle belt and button-front placket — clean lines and confident simplicity for workday elegance.",
  },
  49: {
    name: "Boardroom Denim Shirt Dress",
    description:
      "A tailored denim shirt dress with chest flap pockets and a curved hem, styled for high-rise boardrooms and metropolitan professional life.",
  },
  50: {
    name: "Prestige Denim Executive Dress",
    description:
      "A V-neck denim midi with a structured waist and softly pleated skirt — the cornerstone of a refined executive denim wardrobe.",
  },
  51: {
    name: "Editorial Ruffle Denim Dress",
    description:
      "A denim shirt dress with ruffled sleeve cuffs, chest pockets, and a tiered ruffle hem — fashion-forward denim for the style-conscious professional.",
  },
  52: {
    name: "Sand Pleated Shoulder Midi Dress",
    description:
      "A sleeveless sand-toned double-breasted midi with pleated shoulder detailing and a slim belt — minimalist luxury for formal office occasions.",
  },
  53: {
    name: "Prestige Button-Front Midi Dress",
    description:
      "A sleeveless V-neck shirt dress with gold-button placket, patch pockets, and a black leather belt — executive poise in a single refined silhouette.",
  },
  54: {
    name: "Monarch Cocoa Waistcoat Set",
    description:
      "A chocolate-brown tie-belt waistcoat over a white shirt with matching tailored trousers — rich, commanding elegance for the woman of distinction.",
  },
};

function getDressPricing(num: number): { price: number; priceMax?: number } {
  return DRESS_PRICE_MAP[num] ?? { price: 280 };
}

export function generateDressProducts(from = 17, to = 54): Product[] {
  const products: Product[] = [];

  for (let num = from; num <= to; num++) {
    const { price, priceMax } = getDressPricing(num);
    const day = String(Math.min(10 + (num % 18), 28)).padStart(2, "0");
    const catalog = DRESS_CATALOG[num] ?? {
      name: `Dress ${num}`,
      description:
        "A premium fashion dress crafted with quality fabrics and refined tailoring. Designed for the modern Ghanaian woman — perfect for office, events, and everyday elegance.",
    };

    products.push({
      id: `dress-${String(num).padStart(3, "0")}`,
      name: catalog.name,
      slug: `dress-${num}`,
      description: catalog.description,
      price,
      ...(priceMax ? { priceMax } : {}),
      image: `/images/dress${num}.jpeg`,
      category: "Dresses",
      isNew: true,
      isBestSeller: [17, 18, 24, 44, 50, 54].includes(num),
      isTrending: num >= 40,
      popularity: 72 + (num % 26),
      createdAt: `2026-06-${day}`,
    });
  }

  return products;
}
