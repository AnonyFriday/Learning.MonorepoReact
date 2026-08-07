import type { HTMLAttributes } from "react";
import { cn } from "@react-workshop/ui/src/utils";
import { CardProductAddToCart } from "./card-product-add-to-cart";
import { CardProductBadge } from "./card-product-badge";
import { CardProductImage } from "./card-product-image";
import { CardProductInfo } from "./card-product-info";
import { CardProductPrice } from "./card-product-price";
import { AppCts } from "@/appcts";
import { Link } from "react-router";

export type CardProductProps = HTMLAttributes<HTMLElement> & {
  productId: string | number;
};

export function CardProduct({ className, children, productId, ...props }: CardProductProps) {
  return (
    <Link to={AppCts.Routes.Product(productId)}>
      <article
        className={cn("group relative flex flex-col h-full overflow-hidden bg-product", className)}
        {...props}
      >
        {children}
      </article>
    </Link>
  );
}

CardProduct.Image = CardProductImage;
CardProduct.Info = CardProductInfo;
CardProduct.Price = CardProductPrice;
CardProduct.Badge = CardProductBadge;
CardProduct.AddToCart = CardProductAddToCart;
