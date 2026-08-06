import type { HTMLAttributes } from "react";
import { cn } from "@react-workshop/ui/src/utils";
import { Text } from "@react-workshop/ui/text";

export type CardProductPriceProps = HTMLAttributes<HTMLDivElement> & {
  price?: string;
  originalPrice?: string;
};

export function CardProductPrice({
  className,
  price = "Rp NaN",
  originalPrice,
  ...props
}: CardProductPriceProps) {
  return (
    <div className={cn("mt-2 flex gap-4 items-center whitespace-nowrap", className)} {...props}>
      <Text asComponent="span" size="lg" weight="semibold" className="font-semibold text-dark">
        {price}
      </Text>
      {originalPrice && (
        <Text variant="strikethrough" size="base" className="text-[#b0b0b0]">
          {originalPrice}
        </Text>
      )}
    </div>
  );
}
