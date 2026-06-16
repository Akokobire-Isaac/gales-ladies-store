export type ProductCategory =
  | "Dresses"
  | "Sandals"
  | "Unisex Safety Boots"
  | "Office Wear"
  | "Tops"
  | "Handbags"
  | "Heels"
  | "Accessories";

export type SortOption =
  | "newest"
  | "price-asc"
  | "price-desc"
  | "popularity";

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  priceMax?: number;
  oldPrice?: number;
  image: string;
  images?: string[];
  category: ProductCategory;
  tags?: string[];
  badge?: string;
  isNew?: boolean;
  isBestSeller?: boolean;
  isTrending?: boolean;
  popularity?: number;
  createdAt: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CheckoutFormData {
  name: string;
  phone: string;
  address: string;
  deliveryLocation: string;
}

export interface CategoryNav {
  name: ProductCategory;
  slug: string;
  image: string;
  href: string;
}

export interface ShowcaseVideo {
  id: string;
  src: string;
  title: string;
  category: string;
  poster?: string;
}
