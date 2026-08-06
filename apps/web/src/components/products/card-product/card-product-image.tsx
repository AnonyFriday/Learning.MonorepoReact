import type { ElementType, ImgHTMLAttributes } from "react";
import { cn } from "@react-workshop/ui/src/utils";
import { Image as UIImage } from "@react-workshop/ui/image";

export type CardProductImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  asComponent?: ElementType;
  to?: string;
  href?: string;
};

export function CardProductImage({
  className,
  asComponent: Component = "a",
  src,
  alt,
  href,
  ...props
}: CardProductImageProps) {
  return (
    <Component
      href={href}
      className={cn("block w-full h-75.25 overflow-hidden", className)}
      {...props}
    >
      <UIImage className="h-full w-full" src={src} alt={alt} variant="card" />
    </Component>
  );
}
