import { createBrowserRouter, RouterProvider } from "react-router";
import { DefaultLayout } from "@/layouts/default-layout";
import { ProtectedLayout } from "@/layouts/protected-layout";
import { AboutPage } from "@/pages/about-page";
import { CartPage } from "@/pages/cart-page";
import { CheckoutPage } from "@/pages/checkout-page";
import { ContactPage } from "@/pages/contact-page";
import { HomePage } from "@/pages/home-page";
import { SingleProductPage } from "@/pages/single-product-page";
import { ShopPage } from "@/pages/shop-page";
import { BlogPage } from "@/pages/blog-page";
import { ProductComparisonPage } from "@/pages/product-comparison-page";
import { NotFoundPage } from "@/pages/not-found-page";
import { ROUTES } from "@/routes";

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      { path: ROUTES.home, element: <HomePage /> },
      { path: ROUTES.shop, element: <ShopPage /> },
      { path: "/shop/:id", element: <SingleProductPage /> },
      { path: ROUTES.compare, element: <ProductComparisonPage /> },
      { path: ROUTES.cart, element: <CartPage /> },
      { path: ROUTES.contact, element: <ContactPage /> },
      { path: ROUTES.about, element: <AboutPage /> },
      { path: ROUTES.blog, element: <BlogPage /> },
      {
        element: <ProtectedLayout />,
        children: [{ path: ROUTES.checkout, element: <CheckoutPage /> }]
      },
      { path: "*", element: <NotFoundPage /> }
    ]
  }
]);

export function App() {
  return <RouterProvider router={router} />;
}
