import { useQuery } from "@tanstack/react-query";
import { CardProduct } from "@/components/products/card-product/card-product";
import { Text } from "@react-workshop/ui/text";
import { LoadingSpinner } from "@/components/spinner/loading-spinner";
import { Pagination } from "@/components/pagination/pagination";
import { SectionPageHero, SectionPageHeroProps } from "@/components/sections/section-page-hero";
import { SectionFeaturePerks } from "@/components/sections/section-feature-perks";
import { ShopFilterBar } from "@/features/products/components/shop-filter-bar";
import { ROUTES } from "@/routes";
import { ProductFullResponse, getProductsFull } from "@/features/products/api/get-products-full";
import { useState } from "react";

const sectionPageHeroProps: SectionPageHeroProps = {
  currentPageTitle: "Shop",
  fromPageTitle: "Shop",
  fromPageUrl: ROUTES.home,
  logoUrl: "images/common/common-01.png",
  bgImageUrl: "images/common/common-10.jpg"
};

export function ShopPage() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data, isLoading, error } = useQuery<ProductFullResponse>({
    queryKey: ["products", currentPage],
    queryFn: () => getProductsFull(currentPage)
  });

  const totalCount = typeof data?.total === "number" ? data.total : Number(data?.total) || 32;

  return (
    <>
      <SectionPageHero {...sectionPageHeroProps} />

      <ShopFilterBar currentPage={currentPage} totalResults={totalCount} />

      <section className="py-16">
        <div className="mx-auto w-[min(1236px,calc(100%-32px))]">
          {isLoading ? (
            <LoadingSpinner />
          ) : error ? (
            <Text className="text-center py-12 text-lg text-red-500">Failed to load products.</Text>
          ) : (
            <>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {data?.items.map((product) => (
                  <CardProduct key={product.id}>
                    <CardProduct.Image src={product.imageUrl} alt={product.name} />
                    {product.badge && <CardProduct.Badge>{product.badge}</CardProduct.Badge>}
                    <CardProduct.Info
                      title={product.name}
                      category={product.category}
                      price={product.price}
                      originalPrice={product.originalPrice}
                    />
                    <CardProduct.AddToCart href={`/shop/${product.id}`} />
                  </CardProduct>
                ))}
              </div>

              <Pagination
                currentPage={currentPage}
                totalItems={totalCount}
                onPageSelected={setCurrentPage}
              />
            </>
          )}
        </div>
      </section>

      <SectionFeaturePerks />
    </>
  );
}
