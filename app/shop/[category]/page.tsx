import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ShopClient } from "@/components/shop/shop-client";
import { categorySlugMap } from "@/data/categories";

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return Object.keys(categorySlugMap).map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category } = await params;
  const name = categorySlugMap[category];
  if (!name) return { title: "Shop" };
  return {
    title: name,
    description: `Shop ${name} at Gale's Ladies Apparel — premium Ghanaian women's fashion.`,
  };
}

export default async function CategoryShopPage({ params }: PageProps) {
  const { category } = await params;
  const cat = categorySlugMap[category];
  if (!cat) notFound();

  return <ShopClient initialCategory={cat} title={cat} />;
}
