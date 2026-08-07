import type { ElementType, HTMLAttributes } from "react";
import { cn } from "@react-workshop/ui/src/utils";
import { Button as UIButton } from "@react-workshop/ui/button";
import { Text } from "@react-workshop/ui/text";

export type CardProductAddToCartProps = HTMLAttributes<HTMLDivElement> & {
  href?: string;
  to?: string;
  asComponent?: ElementType;
  buttonLabel?: string;
  onAddToCart?: () => void;
};

export function CardProductAddToCart({
  className,
  href,
  asComponent: Component = "div",
  buttonLabel = "Add to cart",
  onAddToCart,
  ...props
}: CardProductAddToCartProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 hidden place-items-center bg-dark/70 group-hover:grid",
        className
      )}
      {...props}
    >
      <div className="grid justify-items-center gap-6">
        {onAddToCart ? (
          <UIButton
            variant="secondary"
            className="border-none bg-white px-14 py-3 font-semibold text-brand hover:bg-white cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onAddToCart();
            }}
          >
            {buttonLabel}
          </UIButton>
        ) : (
          <Component {...(href ? { href } : {})}>
            <UIButton
              variant="secondary"
              className="border-none bg-white px-14 py-3 font-semibold text-brand hover:bg-white"
            >
              {buttonLabel}
            </UIButton>
          </Component>
        )}
        <div className="flex gap-5 text-white">
          <Text
            asComponent="span"
            className="cursor-pointer text-white hover:text-brand"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            Share
          </Text>

          <Text
            asComponent="span"
            className="cursor-pointer text-white hover:text-brand"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            Compare
          </Text>

          <Text
            asComponent="span"
            className="cursor-pointer text-white hover:text-brand"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            Like
          </Text>
        </div>
      </div>
    </div>
  );
}
