import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { getProductById, getRelatedProducts } from "@/lib/products";
import { productJsonLd } from "@/lib/seo";
import { withImageVersion } from "@/lib/image-url";
import { ProductDetailClient } from "@/components/product/product-detail-client";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return { title: "Product" };
  return {
    title: product.name,
    description: product.description,
    openGraph: { images: [withImageVersion(product.image)] },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  const related = getRelatedProducts(product);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd(product)),
        }}
      />
      <ProductDetailClient product={product} related={related} />
    </>
  );
}
