import type { HTMLAttributes } from "react";
import { cn } from "@react-workshop/ui/src/utils";
import { Loader2 } from "lucide-react";

export type LoadingSpinnerProps = HTMLAttributes<HTMLDivElement> & {
  label?: string;
  size?: number;
};

export function LoadingSpinner({
  className,
  label = "Loading...",
  size = 32,
  ...props
}: LoadingSpinnerProps) {
  return (
    <div
      className={cn(
        "col-span-full flex flex-col items-center justify-center gap-3 py-12 text-brand",
        className
      )}
      {...props}
    >
      <Loader2 className="animate-spin" size={size} />
      {label && <p className="text-base font-medium text-muted">{label}</p>}
    </div>
  );
}
