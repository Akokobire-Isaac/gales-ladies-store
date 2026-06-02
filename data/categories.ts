import type { CategoryNav, ProductCategory } from "@/types";

export const categories: CategoryNav[] = [
  {
    name: "Dresses",
    slug: "dresses",
    image: "/images/dress2.jpeg",
    href: "/shop/dresses",
  },
  {
    name: "Office Wear",
    slug: "office-wear",
    image: "/images/dress13.jpeg",
    href: "/shop/office-wear",
  },
  {
    name: "Tops",
    slug: "tops",
    image: "/images/Top1.jpeg",
    href: "/shop/tops",
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
  {
    name: "Safety Boots",
    slug: "safety-boots",
    image: "/images/safetyboot.jpeg",
    href: "/shop/safety-boots",
  },
];

export const categorySlugMap: Record<string, ProductCategory> = {
  dresses: "Dresses",
  "office-wear": "Office Wear",
  tops: "Tops",
  handbags: "Handbags",
  heels: "Heels",
  "safety-boots": "Safety Boots",
  accessories: "Accessories",
};
