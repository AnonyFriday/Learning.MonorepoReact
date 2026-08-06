import type { ElementType, HTMLAttributes } from "react";
import { cn } from "@react-workshop/ui/src/utils";
import { Button as UIButton } from "@react-workshop/ui/button";
import { Text } from "@react-workshop/ui/text";

export type CardProductAddToCartProps = HTMLAttributes<HTMLDivElement> & {
  href?: string;
  to?: string;
  asComponent?: ElementType;
  buttonLabel?: string;
};

export function CardProductAddToCart({
  className,
  href,
  asComponent: Component = "a",
  buttonLabel = "Add to cart",
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
        <Component href={href}>
          <UIButton
            variant="secondary"
            className="border-none bg-white px-14 py-3 font-semibold text-brand hover:bg-white"
          >
            {buttonLabel}
          </UIButton>
        </Component>
        <div className="flex gap-5 text-white">
          <Component href="#share">
            <Text asComponent="span" className="cursor-pointer text-white hover:text-brand">
              Share
            </Text>
          </Component>

          <Component href="#compare">
            <Text asComponent="span" className="cursor-pointer text-white hover:text-brand">
              Compare
            </Text>
          </Component>

          <Component href="#like">
            <Text asComponent="span" className="cursor-pointer text-white hover:text-brand">
              Like
            </Text>
          </Component>
        </div>
      </div>
    </div>
  );
}
