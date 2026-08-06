import { useQuery } from "@tanstack/react-query";
import { SlidersHorizontal, Grid2x2, Trophy, ShieldCheck, Truck, Headphones } from "lucide-react";
import { CardProduct } from "@/components/products/card-product/card-product";
import { Text } from "@react-workshop/ui/text";
import { LoadingSpinner } from "@/components/spinner/loading-spinner";
import { Pagination } from "@/components/pagination/pagination";
import { SectionPageHero, SectionPageHeroProps } from "@/components/sections/section-page-hero";
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

  console.log(currentPage);

  return (
    <>
      <SectionPageHero {...sectionPageHeroProps} />

      <section className="bg-beige py-8">
        <div className="mx-auto flex w-[min(1240px,calc(100%-32px))] flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-6">
            <button
              className="flex items-center gap-3 text-xl font-normal hover:text-brand"
              type="button"
            >
              <SlidersHorizontal className="h-6 w-6" />
              Filter
            </button>
            <button aria-label="Grid view" type="button" className="hover:text-brand">
              <Grid2x2 className="h-6 w-6" />
            </button>

            <span className="h-9 w-px bg-[#9f9f9f]"></span>
            <span className="text-base"></span>
          </div>
          <div className="flex flex-wrap items-center gap-7">
            <label className="flex items-center gap-4 text-xl">
              Show
              <input
                className="h-13.75 w-13.75 bg-white text-center text-xl text-muted outline-none border border-transparent focus:border-brand"
                defaultValue="16"
              />
            </label>
            <label className="flex items-center gap-4 text-xl">
              Short by
              <select className="h-13.75 w-47 bg-white px-7 text-xl text-muted outline-none border border-transparent focus:border-brand">
                <option>Default</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </label>
          </div>
        </div>
      </section>

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
                totalItems={data?.total || 0}
                onPageSelected={setCurrentPage}
              />
            </>
          )}
        </div>
      </section>

      {/* Feature Perks Section */}
      <section className="bg-[#faf3ea] py-9.5">
        <div className="mx-auto grid w-[min(1334px,calc(100%-32px))] gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-center gap-3 text-[#242424]">
            <Trophy className="h-12 w-12 shrink-0" strokeWidth={1.5} />
            <div>
              <h3 className="text-[25px] font-semibold leading-tight">High Quality</h3>
              <p className="text-xl font-medium text-muted">crafted from top materials</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-[#242424]">
            <ShieldCheck className="h-12 w-12 shrink-0" strokeWidth={1.5} />
            <div>
              <h3 className="text-[25px] font-semibold leading-tight">Warranty Protection</h3>
              <p className="text-xl font-medium text-muted">Over 2 years</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-[#242424]">
            <Truck className="h-12 w-12 shrink-0" strokeWidth={1.5} />
            <div>
              <h3 className="text-[25px] font-semibold leading-tight">Free Shipping</h3>
              <p className="text-xl font-medium text-muted">Order over 150 $</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-[#242424]">
            <Headphones className="h-12 w-12 shrink-0" strokeWidth={1.5} />
            <div>
              <h3 className="text-[25px] font-semibold leading-tight">24 / 7 Support</h3>
              <p className="text-xl font-medium text-muted">Dedicated support</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
