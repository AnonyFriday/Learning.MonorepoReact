import { NavLink } from "react-router";
import { Heading } from "@react-workshop/ui/heading";
import { CardProduct } from "@/components/products/card-product/card-product";
import { AppCts } from "@/appcts";

const relatedProducts = [
  {
    id: "1",
    name: "Syltherine",
    category: "Stylish cafe chair",
    price: "Rp 2.500.000",
    originalPrice: "Rp 3.500.000",
    badgeText: "-30%",
    badgeClass: "bg-danger",
    imageUrl: "/images/product/product-01.png"
  },
  {
    id: "2",
    name: "Leviosa",
    category: "Stylish cafe chair",
    price: "Rp 2.500.000",
    imageUrl: "/images/product/product-02.png"
  },
  {
    id: "3",
    name: "Lolito",
    category: "Luxury big sofa",
    price: "Rp 7.000.000",
    originalPrice: "Rp 14.000.000",
    badgeText: "-50%",
    badgeClass: "bg-danger",
    imageUrl: "/images/product/product-03.jpg"
  },
  {
    id: "4",
    name: "Respira",
    category: "Outdoor bar table and stool",
    price: "Rp 500.000",
    badgeText: "New",
    badgeClass: "bg-fresh",
    imageUrl: "/images/product/product-04.png"
  }
];

export function SectionRelatedProducts() {
  return (
    <section className="py-14">
      <div className="mx-auto w-[min(1236px,calc(100%-32px))]">
        <Heading asComponent="h2" size="4xl" weight="medium" className="mb-7 text-center text-4xl">
          Related Products
        </Heading>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {relatedProducts.map((p) => (
            <CardProduct key={p.id}>
              {p.badgeText ? (
                <CardProduct.Badge className={p.badgeClass}>{p.badgeText}</CardProduct.Badge>
              ) : null}
              <CardProduct.Image src={p.imageUrl} alt={p.name} />
              <CardProduct.Info
                title={p.name}
                category={p.category}
                price={p.price}
                originalPrice={p.originalPrice}
              />
              <CardProduct.AddToCart href={`/shop/${p.id}`} />
            </CardProduct>
          ))}
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
