import type { ButtonHTMLAttributes } from "react";
import { cn } from "../utils";

export type ButtonSize = "sm" | "md" | "lg";
export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger" | "outline";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "border border-brand bg-brand text-white shadow-[0_12px_24px_rgba(184,142,47,0.22)] hover:opacity-90 focus-visible:ring-brand",
  secondary: "border border-brand bg-white text-brand hover:bg-beige focus-visible:ring-brand",
  ghost:
    "border border-transparent bg-transparent text-dark hover:bg-beige hover:text-brand focus-visible:ring-brand",
  danger: "bg-danger text-white hover:opacity-90 focus-visible:ring-danger",
  outline:
    "rounded-[15px] border border-dark bg-white text-dark shadow-none hover:bg-beige focus-visible:ring-dark"
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-sm",
  lg: "h-14 px-8 text-base"
};

export function Button({
  className,
  children,
  disabled,
  isLoading = false,
  size = "md",
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "flex items-center justify-center gap-2 rounded-none font-semibold tracking-[0.01em] cursor-pointer",
        "transition-all duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
        "disabled:pointer-events-none disabled:opacity-60",
        variants[variant],
        sizes[size],
        className
      )}
      disabled={disabled || isLoading}
      type={type}
      {...props}
    >
      {isLoading ? (
        <span className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : null}
      {children}
    </button>
  );
}
