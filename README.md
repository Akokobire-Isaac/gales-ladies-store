# Gale's Ladies Apparel

Premium Ghanaian women's fashion ecommerce — Next.js 15+ App Router, TypeScript, Tailwind CSS, Shadcn UI.

## Quick Start

```bash
cd gales-ladies-store
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Product Images

Place images in `public/images/`:

| File | Usage |
|------|--------|
| `logo.jpeg` or `logo.png` | Navbar, footer, favicon, SEO (auto-fallback) |
| `hero.jpg` | Homepage hero (falls back to `dress11.jpeg`) |
| `dress1.jpeg` … `dress6.jpeg` | Dress products |
| `top1.jpeg`, `top2.jpeg` | Tops |
| `heel1.jpeg`, `heel2.jpeg` | Heels |
| `Bag1.jpeg`, `Bag2.jpeg` | Handbags |
| `boot1.jpeg`, `boot2.jpeg` | Safety boots |

### Adding New Products

1. Add image(s) to `public/images/` (e.g. `dress4.jpeg`)
2. Append an entry in `data/products.ts`:

```ts
{
  id: "dress-004",
  name: "New Dress",
  slug: "new-dress",
  description: "...",
  price: 380,
  image: "/images/dress4.jpeg",
  category: "Dresses",
  createdAt: "2026-06-01",
}
```

No application logic changes required.

## Features

- Luxury editorial UI with dark/light mode
- Cart & wishlist (Zustand + localStorage)
- Instant search, filters, sorting
- WhatsApp checkout (`0249938095` → `wa.me/233249938095`)
- Embla carousels, Framer Motion animations
- SEO: metadata, Open Graph, JSON-LD, sitemap, robots

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | ESLint |

## Run locally

```bash
npm run dev
```

## Deploy

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to your production URL (e.g. Vercel).

```bash
npm run build
```

Deploy to Vercel, Netlify, or any Node.js host.

## Tech Stack

Next.js · TypeScript · Tailwind CSS · Shadcn UI · Framer Motion · Zustand · React Hook Form · Zod · Sonner · Embla Carousel · next-themes · Lucide React
