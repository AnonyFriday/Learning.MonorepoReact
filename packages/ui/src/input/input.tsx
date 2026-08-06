import type { InputHTMLAttributes, LabelHTMLAttributes, ReactNode } from "react";
import { cn } from "../utils";

export type InputVariant = "text" | "textUnderline" | "dropdown";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  variant?: InputVariant;
  isInvalid?: boolean;
};

const variants: Record<InputVariant, string> = {
  text: "h-10 w-full rounded-md border bg-white px-3 text-sm text-dark shadow-sm transition-colors placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  textUnderline:
    "min-w-0 flex-1 border-b border-dark py-1 text-sm outline-none text-dark placeholder:text-muted transition-colors duration-200 focus-visible:border-brand",
  dropdown: ""
};

function getVariantClasses(variant: InputVariant, isInvalid: boolean): string {
  switch (variant) {
    case "textUnderline":
      return isInvalid ? "border-danger focus-visible:border-danger" : "border-dark";
    case "dropdown":
      return "";
    case "text":
    default:
      return isInvalid
        ? "border-danger focus-visible:ring-danger"
        : "border-line focus-visible:border-brand focus-visible:ring-brand";
  }
}

export function Input({ className, isInvalid = false, variant = "text", ...props }: InputProps) {
  return (
    <input
      className={cn(variants[variant], getVariantClasses(variant, isInvalid), className)}
      aria-invalid={isInvalid || undefined}
      {...props}
    />
  );
}

export function Label({ className, ...props }: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label className={cn("text-sm font-medium leading-none text-dark", className)} {...props} />
  );
}

export function FieldError({ children }: { children?: ReactNode }) {
  if (!children) {
    return null;
  }

  return <p className="text-sm text-danger">{children}</p>;
}

export function Field({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("grid gap-2", className)}>{children}</div>;
}
