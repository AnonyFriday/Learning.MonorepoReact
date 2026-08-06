import type { HTMLAttributes } from "react";
import { cn } from "../../utils";

export type HeadingVariant = "default" | "hero" | "section" | "card" | "feature" | "brand";

export type HeadingSize = "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";

export type HeadingWeight = "normal" | "medium" | "semibold" | "bold" | "extrabold";

export type HeadingAsComponent = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  asComponent?: HeadingAsComponent;
  size?: HeadingSize;
  variant?: HeadingVariant;
  weight?: HeadingWeight;
};

const variants: Record<HeadingVariant, string> = {
  default: "text-dark leading-tight",
  hero: "text-brand leading-tight",
  section: "text-dark leading-tight tracking-tight",
  card: "text-dark leading-snug",
  feature: "text-dark leading-tight",
  brand: "text-brand leading-none"
};

const sizes: Record<HeadingSize, string> = {
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
  "6xl": "text-6xl"
};

const weights: Record<HeadingWeight, string> = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold"
};

export function Heading({
  asComponent: Component = "h2",
  children,
  className,
  size = "3xl",
  variant = "default",
  weight = "bold",
  ...props
}: HeadingProps) {
  return (
    <Component
      className={cn(variants[variant], size && sizes[size], weight && weights[weight], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
