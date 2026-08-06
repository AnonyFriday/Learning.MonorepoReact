export const AppCts = {
  Routes: {
    Home: "/",
    Shop: "/shop",
    Product: (id: string) => `/shop/${id}`,
    Compare: "/shop/compare",
    Cart: "/cart",
    Contact: "/contact",
    About: "/about",
    Blog: "/blog",
    Checkout: "/checkout"
  } as const,

  PageConstraints: {
    MaxItemsPerPage: 15
  }
} as const;
