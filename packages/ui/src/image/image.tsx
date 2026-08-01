import type { ImgHTMLAttributes } from "react";
import { cn } from "../utils";

export type ImageVariant = "default" | "card" | "thumbnail" | "avatar" | "banner";

export type ImageFit = "cover" | "contain" | "fill" | "none";

export type ImageRadius = "none" | "sm" | "md" | "lg" | "full";

export type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  variant?: ImageVariant;
  fit?: ImageFit;
  radius?: ImageRadius;
  aspectRatio?: "square" | "video" | "auto" | "portrait";
};

const variants: Record<ImageVariant, string> = {
  default: "max-w-full h-auto",
  card: "w-full object-cover",
  thumbnail: "h-20 w-20 rounded-[10px] object-cover border border-line",
  avatar: "h-10 w-10 rounded-full object-cover",
  banner: "absolute inset-0 h-full w-full object-cover"
};

const fits: Record<ImageFit, string> = {
  cover: "object-cover",
  contain: "object-contain",
  fill: "object-fill",
  none: "object-none"
};

const radiuses: Record<ImageRadius, string> = {
  none: "rounded-none",
  sm: "rounded-md",
  md: "rounded-[10px]",
  lg: "rounded-2xl",
  full: "rounded-full"
};

const aspectRatios = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  auto: "aspect-auto"
};

export function Image({
  alt = "",
  aspectRatio,
  className,
  fit,
  radius,
  variant = "default",
  ...props
}: ImageProps) {
  return (
    <img
      alt={alt}
      className={cn(
        variants[variant],
        fit && fits[fit],
        radius && radiuses[radius],
        aspectRatio && aspectRatios[aspectRatio],
        className
      )}
      {...props}
    />
  );
}
