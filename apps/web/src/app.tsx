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
import { AppCts } from "@/appcts";

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      { path: AppCts.Routes.Home, element: <HomePage /> },
      { path: AppCts.Routes.Shop, element: <ShopPage /> },
      { path: "/shop/:id", element: <SingleProductPage /> },
      { path: AppCts.Routes.Compare, element: <ProductComparisonPage /> },
      { path: AppCts.Routes.Cart, element: <CartPage /> },
      { path: AppCts.Routes.Contact, element: <ContactPage /> },
      { path: AppCts.Routes.About, element: <AboutPage /> },
      { path: AppCts.Routes.Blog, element: <BlogPage /> },
      {
        element: <ProtectedLayout />,
        children: [{ path: AppCts.Routes.Checkout, element: <CheckoutPage /> }]
      },
      { path: "*", element: <NotFoundPage /> }
    ]
  }
]);

export function App() {
  return <RouterProvider router={router} />;
}
