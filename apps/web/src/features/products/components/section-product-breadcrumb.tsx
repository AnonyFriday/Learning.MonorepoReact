import { NavLink, useParams } from "react-router";
import { Text } from "@react-workshop/ui/text";
import { AppCts } from "@/appcts";
import { useProductDetails } from "../hooks/use-product-details";

export function SectionProductBreadcrumb() {
  const { id = "1" } = useParams<{ id: string }>();
  const { data: product } = useProductDetails(id);

  if (!product) return null;

  return (
    <section className="bg-beige py-8">
      <div className="mx-auto flex w-[min(1240px,calc(100%-32px))] flex-wrap items-center gap-6">
        <Text asComponent="span" variant="muted">
          <NavLink to={AppCts.Routes.Home} className="hover:text-brand">
            Home
          </NavLink>
        </Text>
        <span className="text-muted">&gt;</span>
        <Text asComponent="span" variant="muted">
          <NavLink to={AppCts.Routes.Shop} className="hover:text-brand">
            Shop
          </NavLink>
        </Text>
        <span className="text-muted">&gt;</span>
        <span className="h-9 w-px bg-muted" />
        <Text asComponent="span" weight="medium" className="text-black">
          {product.name}
        </Text>
      </div>
    </section>
  );
}
