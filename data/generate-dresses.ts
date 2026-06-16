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

function getDressPricing(num: number): { price: number; priceMax?: number } {
  return DRESS_PRICE_MAP[num] ?? { price: 280 };
}

export function generateDressProducts(from = 17, to = 54): Product[] {
  const products: Product[] = [];

  for (let num = from; num <= to; num++) {
    const { price, priceMax } = getDressPricing(num);
    const day = String(Math.min(10 + (num % 18), 28)).padStart(2, "0");

    products.push({
      id: `dress-${String(num).padStart(3, "0")}`,
      name: `Dress ${num}`,
      slug: `dress-${num}`,
      description:
        "A premium fashion dress crafted with quality fabrics and refined tailoring. Designed for the modern Ghanaian woman — perfect for office, events, and everyday elegance.",
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
