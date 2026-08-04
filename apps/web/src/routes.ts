export const ROUTES = {
  home: "/",
  shop: "/shop",
  product: (id: string) => `/shop/${id}`,
  compare: "/shop/compare",
  cart: "/cart",
  contact: "/contact",
  about: "/about",
  blog: "/blog",
  checkout: "/checkout"
} as const;
