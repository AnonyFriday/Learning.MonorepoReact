import type { InputHTMLAttributes, LabelHTMLAttributes, ReactNode } from "react";
import { cn } from "../utils";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  isInvalid?: boolean;
};

export function Input({ className, isInvalid = false, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "h-10 w-full rounded-md border bg-white px-3 text-sm text-dark shadow-sm transition-colors",
        "placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        isInvalid
          ? "border-danger focus-visible:ring-danger"
          : "border-line focus-visible:border-brand focus-visible:ring-brand",
        className
      )}
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
