import type { HTMLAttributes } from "react";
import { cn } from "@react-workshop/ui/src/utils";
import { Image as UIImage } from "@react-workshop/ui/image";

export type CardProductImageProps = HTMLAttributes<HTMLDivElement> & {
  src?: string;
  alt?: string;
};

export function CardProductImage({ className, src, alt, ...props }: CardProductImageProps) {
  return (
    <div className={cn("block w-full h-75.25 overflow-hidden", className)} {...props}>
      <UIImage className="h-full w-full" src={src} alt={alt} variant="card" />
    </div>
  );
}
