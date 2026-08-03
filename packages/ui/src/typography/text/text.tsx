import type { HTMLAttributes } from "react";
import { cn } from "../../utils";

export type TextVariant =
  | "body"
  | "leading"
  | "muted"
  | "eyebrow"
  | "badge"
  | "strikethrough"
  | "link";

export type TextSize = "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl";

export type TextWeight = "normal" | "medium" | "semibold" | "bold" | "extrabold";

export type TextAsComponent = "p" | "span";

export type TextProps = HTMLAttributes<HTMLElement> & {
  asComponent?: TextAsComponent;
  size?: TextSize;
  variant?: TextVariant;
  weight?: TextWeight;
  href?: string;
};

const variants: Record<TextVariant, string> = {
  body: "text-dark leading-relaxed",
  muted: "text-muted",
  leading: "text-dark leading-relaxed md:text-lg",
  eyebrow: "uppercase tracking-[3px] text-brand md:text-sm",
  badge: "text-muted md:text-xl",
  strikethrough: "text-muted line-through",
  link: "cursor-pointer text-dark transition-colors hover:text-brand"
};

const sizes: Record<TextSize, string> = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl"
};

const weights: Record<TextWeight, string> = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold"
};

export function Text({
  asComponent: Component = "p",
  children,
  className,
  size = "base",
  variant = "body",
  weight = "normal",
  ...props
}: TextProps) {
  return (
    <Component
      className={cn(variants[variant], size && sizes[size], weight && weights[weight], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
