import { NavLink } from "react-router";
import { Heading } from "@react-workshop/ui/heading";
import { CardProduct } from "@/components/products/card-product/card-product";
import { AppCts } from "@/appcts";
import { useQuery } from "@tanstack/react-query";
import { getProductsDisplay, ProductDisplayResponse } from "../api/get-products-display";
import { Text } from "@react-workshop/ui/text";
import { LoadingSpinner } from "@/components/spinner/loading-spinner";
import { useCartStore } from "@/stores/use-cart-store";
import { useToastStore } from "@/stores/use-toast-store";

export function SectionRelatedProducts() {
  const addItem = useCartStore((state) => state.addItem);
  const toast = useToastStore();

  const { data, isLoading } = useQuery<ProductDisplayResponse>({
    queryKey: ["products"],
    queryFn: getProductsDisplay
  });

  const products = data?.items ?? [];

  if (isLoading) {
    return <LoadingSpinner label="Loading related products..." />;
  }

  return (
    <section className="py-14">
      <div className="mx-auto w-[min(1236px,calc(100%-32px))]">
        <Heading asComponent="h2" size="4xl" weight="medium" className="mb-7 text-center text-4xl">
          Related Products
        </Heading>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.length === 0 ? (
            <Text variant="muted" className="col-span-full text-center py-12">
              No product founded
            </Text>
          ) : (
            products.map((p) => (
              <CardProduct key={p.id} productId={p.id}>
                {p.badge ? (
                  <CardProduct.Badge className={p.badge}>{p.badge}</CardProduct.Badge>
                ) : null}
                <CardProduct.Image src={p.imageUrl} alt={p.name} />
                <CardProduct.Info
                  title={p.name}
                  category={p.category}
                  price={p.price}
                  originalPrice={p.originalPrice}
                />
                <CardProduct.AddToCart
                  onAddToCart={() => {
                    addItem({
                      id: String(p.id),
                      name: p.name,
                      price: p.price,
                      image: p.imageUrl,
                      quantity: 1
                    });
                    toast.success("Added to Cart!", `${p.name} added to cart.`);
                  }}
                />
              </CardProduct>
            ))
          )}
        </div>

        <div className="mt-11 text-center">
          <NavLink
            to={AppCts.Routes.Shop}
            className="inline-flex border border-brand px-18.5 py-3 font-semibold text-brand hover:bg-brand hover:text-white transition-colors"
          >
            Show More
          </NavLink>
        </div>
      </div>
    </section>
  );
}
