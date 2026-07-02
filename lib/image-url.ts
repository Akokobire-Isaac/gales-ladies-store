import { IMAGE_CACHE_VERSION } from "./constants";

/**
 * Appends a version query param to local image paths so browsers, CDNs, and
 * Next.js Image optimization pick up replaced files under the same filename.
 */
export function withImageVersion(src: string): string {
  if (!src || src.startsWith("data:") || src.startsWith("blob:")) {
    return src;
  }

  if (src.startsWith("http://") || src.startsWith("https://")) {
    return src;
  }

  const [path, existingQuery] = src.split("?");
  const params = new URLSearchParams(existingQuery ?? "");
  params.set("v", IMAGE_CACHE_VERSION);
  return `${path}?${params.toString()}`;
}
