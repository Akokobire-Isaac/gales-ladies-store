import type { CartItem, Product } from "@/types";
import { WHATSAPP_URL } from "./constants";
import { formatPrice, formatProductPrice } from "./format";

export function buildProductWhatsAppMessage(product: Product): string {
  const price = formatProductPrice(product);
  return `Hello, I'm interested in purchasing ${product.name} (${price}) from the ${product.category} category. Please provide more details.`;
}

export function getProductWhatsAppUrl(product: Product): string {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(buildProductWhatsAppMessage(product))}`;
}

export function openProductWhatsApp(product: Product): void {
  window.open(getProductWhatsAppUrl(product), "_blank", "noopener,noreferrer");
}

export function buildWhatsAppOrderMessage(
  customer: {
    name: string;
    phone: string;
    address: string;
    deliveryLocation: string;
  },
  items: CartItem[],
  total: number
): string {
  const lines = items.map(
    (item, i) =>
      `${i + 1}. ${item.product.name}\nQty: ${item.quantity}\nPrice: ${formatProductPrice(item.product)}`
  );

  return [
    "Hello Gale's Ladies Apparel,",
    "",
    "I would like to place an order.",
    "",
    `Customer Name:\n${customer.name}`,
    "",
    `Phone:\n${customer.phone}`,
    "",
    `Delivery Address:\n${customer.address}`,
    "",
    `Delivery Location:\n${customer.deliveryLocation}`,
    "",
    "Items:",
    "",
    ...lines,
    "",
    `Total:\n${formatPrice(total)}`,
    "",
    "Please confirm availability.",
    "",
    "Thank you.",
  ].join("\n");
}

export function openWhatsAppCheckout(
  customer: {
    name: string;
    phone: string;
    address: string;
    deliveryLocation: string;
  },
  items: CartItem[],
  total: number
): void {
  const text = encodeURIComponent(
    buildWhatsAppOrderMessage(customer, items, total)
  );
  window.open(`${WHATSAPP_URL}?text=${text}`, "_blank", "noopener,noreferrer");
}
