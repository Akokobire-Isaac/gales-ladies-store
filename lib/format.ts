import { CURRENCY } from "./constants";

export function formatPrice(amount: number): string {
  return `${CURRENCY} ${amount.toLocaleString("en-GH")}`;
}

export function calcDiscount(price: number, oldPrice?: number): number | null {
  if (!oldPrice || oldPrice <= price) return null;
  return Math.round(((oldPrice - price) / oldPrice) * 100);
}
