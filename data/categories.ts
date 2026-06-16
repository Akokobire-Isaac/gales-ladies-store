import type { CategoryNav, ProductCategory } from "@/types";

export const categories: CategoryNav[] = [
  {
    name: "Dresses",
    slug: "dresses",
    image: "/images/dress54.jpeg",
    href: "/shop/dresses",
  },
  {
    name: "Sandals",
    slug: "sandals",
    image: "/images/heels3.jpeg",
    href: "/shop/sandals",
  },
  {
    name: "Unisex Safety Boots",
    slug: "unisex-safety-boots",
    image: "/images/safetyboot.jpeg",
    href: "/shop/unisex-safety-boots",
  },
  {
    name: "Office Wear",
    slug: "office-wear",
    image: "/images/dress13.jpeg",
    href: "/shop/office-wear",
  },
  {
    name: "Handbags",
    slug: "handbags",
    image: "/images/Bag1.jpeg",
    href: "/shop/handbags",
  },
  {
    name: "Heels",
    slug: "heels",
    image: "/images/heels.jpeg",
    href: "/shop/heels",
  },
];

export const categorySlugMap: Record<string, ProductCategory> = {
  dresses: "Dresses",
  sandals: "Sandals",
  "unisex-safety-boots": "Unisex Safety Boots",
  "safety-boots": "Unisex Safety Boots",
  "office-wear": "Office Wear",
  tops: "Tops",
  handbags: "Handbags",
  heels: "Heels",
  accessories: "Accessories",
};
