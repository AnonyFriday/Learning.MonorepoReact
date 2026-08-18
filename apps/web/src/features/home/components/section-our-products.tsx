import { CardProduct } from "@/components/products/card-product/card-product";
import { LoadingSpinner } from "@/components/spinner/loading-spinner";
import {
  getProductsDisplay,
  ProductDisplayResponse,
} from "@/features/products/api/get-products-display";
import { useCartStore } from "@/stores/use-cart-store";
import { useToastStore } from "@/stores/use-toast-store";
import { Heading } from "@react-workshop/ui/heading";
import { Text } from "@react-workshop/ui/text";
import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router";

export interface SectionOurProductsProps {
  shopNavLinkUrl: string;
  shopNavLabel: string;
}

export function SectionOurProducts({
  shopNavLabel,
  shopNavLinkUrl,
}: SectionOurProductsProps) {
  const addItem = useCartStore((state) => state.addItem);
  const toast = useToastStore();

  const { data, isLoading, error } = useQuery<ProductDisplayResponse>({
    queryKey: ["products"],
    queryFn: getProductsDisplay,
  });

  const products = data?.items ?? [];

  if (isLoading) return <LoadingSpinner />;
  if (error)
    return (
      <Text variant="muted" className="text-center py-12 text-red-500">
        No product founded
      </Text>
    );

  return (
    <section className="pb-16">
      <div className="mx-auto w-[min(1236px,calc(100%-32px))]">
        <Heading
          asComponent="h2"
          variant="section"
          weight="bold"
          className="text-center text-[40px] mb-8"
        >
          Our Products
        </Heading>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.length === 0 ? (
            <Text variant="muted" className="col-span-full text-center py-12">
              No product founded
            </Text>
          ) : (
            products.map((product) => (
              <CardProduct key={product.id} productId={product.id}>
                <CardProduct.Image src={product.imageUrl} alt={product.name} />
                {product.badge && (
                  <CardProduct.Badge>{product.badge}</CardProduct.Badge>
                )}
                <CardProduct.Info
                  title={product.name}
                  category={product.category}
                  price={product.price}
                  originalPrice={product.originalPrice}
                />
                <CardProduct.AddToCart
                  onAddToCart={() => {
                    addItem({
                      id: String(product.id),
                      name: product.name,
                      price: product.price,
                      image: product.imageUrl,
                      quantity: 1,
                    });
                    toast.success(
                      "Added to Cart!",
                      `${product.name} added to cart.`,
                    );
                  }}
                />
              </CardProduct>
            ))
          )}
        </div>

        <div className="mt-8 text-center">
          <NavLink
            className="inline-flex border border-brand px-19.5 py-3 font-semibold text-brand hover:bg-brand hover:text-white"
            to={shopNavLinkUrl}
          >
            {shopNavLabel || "Show More"}
          </NavLink>
        </div>
      </div>
    </section>
  );
}
