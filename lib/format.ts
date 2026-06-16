import type { Product } from "@/types";

export function formatPrice(amount: number): string {
  return `GH₵${amount.toLocaleString("en-GH")}`;
}

export function formatProductPrice(product: Pick<Product, "price" | "priceMax">): string {
  if (product.priceMax && product.priceMax > product.price) {
    return `${formatPrice(product.price)} – ${formatPrice(product.priceMax)}`;
  }
  return formatPrice(product.price);
}

export function calcDiscount(price: number, oldPrice?: number): number | null {
  if (!oldPrice || oldPrice <= price) return null;
  return Math.round(((oldPrice - price) / oldPrice) * 100);
}
