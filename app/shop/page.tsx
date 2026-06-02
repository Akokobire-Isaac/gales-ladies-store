import type { Metadata } from "next";
import { ShopClient } from "@/components/shop/shop-client";

export const metadata: Metadata = {
  title: "Shop All",
  description:
    "Browse premium women's fashion — dresses, office wear, handbags, heels, safety boots and accessories. Nationwide delivery in Ghana.",
};

export default function ShopPage() {
  return <ShopClient title="Shop All" />;
}
