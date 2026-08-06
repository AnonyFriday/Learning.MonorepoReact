import type { HTMLAttributes } from "react";
import { cn } from "@react-workshop/ui/src/utils";
import { Heading } from "@react-workshop/ui/heading";
import { Text } from "@react-workshop/ui/text";
import { CardProductPrice } from "./card-product-price";

export type CardProductInfoProps = HTMLAttributes<HTMLDivElement> & {
  title?: string;
  name?: string;
  category?: string;
  price?: string;
  originalPrice?: string;
};

export function CardProductInfo({
  className,
  title,
  name,
  category,
  price,
  originalPrice,
  ...props
}: CardProductInfoProps) {
  const displayTitle = title ?? name;
  return (
    <div
      className={cn("flex flex-1 flex-col justify-between p-4 bg-product", className)}
      {...props}
    >
      <div>
        {displayTitle && (
          <Heading asComponent="h3" size="2xl" weight="semibold" className="text-dark">
            {displayTitle}
          </Heading>
        )}

        {category && (
          <Text variant="muted" weight="medium" className="mt-2">
            {category}
          </Text>
        )}
      </div>

      <CardProductPrice price={price} originalPrice={originalPrice} />
    </div>
  );
}
