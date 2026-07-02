import Image, { type ImageProps } from "next/image";
import { withImageVersion } from "@/lib/image-url";
import { cn } from "@/lib/utils";

/** Shared wrapper styles for consistent product image frames. */
export const productImageFrameClass = (className?: string) =>
  cn("relative w-full overflow-hidden bg-muted", className);

type ProductImageProps = Omit<ImageProps, "fill">;

/**
 * Catalogue product photo — wrapper parent must be `position: relative` with
 * defined dimensions (e.g. aspect-[3/4] or fixed size).
 */
export function ProductImage({
  className,
  alt = "",
  src,
  ...props
}: ProductImageProps) {
  const versionedSrc =
    typeof src === "string" ? withImageVersion(src) : src;

  return (
    <Image
      fill
      alt={alt}
      src={versionedSrc}
      className={cn("product-image", className)}
      {...props}
    />
  );
}

interface ProductImageFrameProps extends ProductImageProps {
  frameClassName?: string;
}

/** Wrapper + image for standalone frames (cart thumbs, search results, etc.). */
export function ProductImageFrame({
  frameClassName,
  className,
  ...props
}: ProductImageFrameProps) {
  return (
    <div className={productImageFrameClass(frameClassName)}>
      <ProductImage className={className} {...props} />
    </div>
  );
}
