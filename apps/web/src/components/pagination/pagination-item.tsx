import type { ButtonHTMLAttributes } from "react";
import { cn } from "@react-workshop/ui/src/utils";

export interface PaginationItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export function PaginationItem({ active = false, className, ...props }: PaginationItemProps) {
  return (
    <button
      type="button"
      className={cn(
        "grid h-15 place-items-center rounded-[10px] text-xl transition-colors cursor-pointer",
        active
          ? "min-w-15 bg-brand px-6 text-white"
          : "min-w-15 bg-beige px-6 hover:bg-brand hover:text-white",
        className
      )}
      {...props}
    />
  );
}
