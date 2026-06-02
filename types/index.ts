export type ProductCategory =
  | "Dresses"
  | "Office Wear"
  | "Tops"
  | "Handbags"
  | "Heels"
  | "Safety Boots"
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
  oldPrice?: number;
  image: string;
  images?: string[];
  category: ProductCategory;
  tags?: string[];
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
