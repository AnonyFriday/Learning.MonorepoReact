import type { HTMLAttributes } from "react";
import { cn } from "@react-workshop/ui/src/utils";

export type CardProductBadgeProps = HTMLAttributes<HTMLSpanElement>;

export function CardProductBadge({ className, children, ...props }: CardProductBadgeProps) {
  return (
    <span
      className={cn(
        "absolute right-6 top-6 grid h-12 w-12 place-items-center rounded-full bg-danger text-base font-medium text-white",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
