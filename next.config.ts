import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["10.37.62.38"],
  turbopack: {
    root: process.cwd(),
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
    localPatterns: [
      {
        pathname: "/images/**",
        // Omit search so ?v= cache-bust params from lib/image-url.ts are allowed.
      },
    ],
    // Shorter TTL; primary cache busting is ?v= on image URLs (lib/image-url.ts).
    minimumCacheTTL: 60 * 60 * 24,
  },
  compress: true,
};

export default nextConfig;
