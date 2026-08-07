import { SectionProductBreadcrumb } from "@/features/products/components/section-product-breadcrumb";
import { SectionProductDetailSummary } from "@/features/products/components/section-product-detail-summary";
import { SectionProductTabs } from "@/features/products/components/section-product-tabs";
import { SectionRelatedProducts } from "@/features/products/components/section-related-products";

export function SingleProductPage() {
  return (
    <>
      <SectionProductBreadcrumb />
      <SectionProductDetailSummary />
      <SectionProductTabs />
      <SectionRelatedProducts />
    </>
  );
}
