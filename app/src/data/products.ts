/**
 * Product catalog.
 *
 * Categories intentionally mirror Shopify collections — when you go live,
 * create collections named "shirts", "pants", "shoes", "accessories" in
 * Shopify and either:
 *   - keep linking each card to your storefront (current behavior via SHOP_URL), or
 *   - replace `img`/fields by fetching from the Shopify Storefront API.
 */

export type Category = "shirts" | "pants" | "shoes" | "accessories";

export const CATEGORIES: { id: Category; label: string }[] = [
  { id: "shirts", label: "Shirts" },
  { id: "pants", label: "Pants" },
  { id: "shoes", label: "Shoes" },
  { id: "accessories", label: "Accessories" },
];

export interface Product {
  name: string;
  kind: string;
  price: string;
  img: string;
  /** pastel backdrop tint for the card */
  bg: string;
  category: Category;
  /** show on the home page teaser */
  featured?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    name: "Wizards Work Jacket",
    kind: "Embroidered Cotton Twill",
    price: "$285",
    img: "/images/jacket-wizards.png",
    bg: "bg-[#fdfaf7]",
    category: "shirts",
    // featured: true,
  },
  {
    name: "Sakura Field Hoodie",
    kind: "Heavyweight Fleece",
    price: "$145",
    img: "/images/product-hoodie.png",
    bg: "bg-[#e4efef]",
    category: "shirts",
    featured: true,
  },
  {
    name: "Koi Current Tee",
    kind: "Boxy Fit Cotton",
    price: "$65",
    img: "/images/product-tee.png",
    bg: "bg-[#eee8f6]",
    category: "shirts",
    featured: true,
  },
  {
    name: "Blossom Runner",
    kind: "Chunky Maximalist Sneaker",
    price: "$190",
    img: "/images/product-sneaker.png",
    bg: "bg-[#fbe7ee]",
    category: "shoes",
    featured: true,
  },
  {
    name: "Hanami Denim",
    kind: "Embroidered Black Jeans",
    price: "$180",
    img: "/images/product-jeans.png",
    bg: "bg-[#eee8f6]",
    category: "pants",
    featured: true,
  },
  {
    name: "Petal Knit Beanie",
    kind: "Ribbed Cream Knit",
    price: "$45",
    img: "/images/product-beanie.png",
    bg: "bg-[#fbe7ee]",
    category: "accessories",
  },
  {
    name: "Koi Dad Cap",
    kind: "Pastel Pink Twill",
    price: "$55",
    img: "/images/product-cap.png",
    bg: "bg-[#e4efef]",
    category: "accessories",
  },
  {
    name: "Currents Tote",
    kind: "Natural Canvas Carryall",
    price: "$85",
    img: "/images/product-tote.png",
    bg: "bg-[#fdfaf7]",
    category: "accessories",
  },
];

export const FEATURED = PRODUCTS.filter((p) => p.featured);
