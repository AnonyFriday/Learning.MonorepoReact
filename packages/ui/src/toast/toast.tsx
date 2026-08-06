import type { ReactNode } from "react";
import { CheckCircle, AlertCircle, Info, X } from "lucide-react";
import { cn } from "../utils";

export type ToastVariant = "success" | "danger" | "info";

export type ToastProps = {
  variant?: ToastVariant;
  title?: string;
  description?: ReactNode;
  onClose?: () => void;
  className?: string;
};

const variants: Record<
  ToastVariant,
  { container: string; iconClass: string; Icon: typeof CheckCircle }
> = {
  success: {
    container: "border-emerald-200 bg-emerald-50 text-emerald-900",
    iconClass: "text-emerald-600",
    Icon: CheckCircle
  },
  danger: {
    container: "border-danger/30 bg-danger/10 text-danger",
    iconClass: "text-danger",
    Icon: AlertCircle
  },
  info: {
    container: "border-blue-200 bg-blue-50 text-blue-900",
    iconClass: "text-blue-600",
    Icon: Info
  }
};

export function Toast({ variant = "success", title, description, onClose, className }: ToastProps) {
  const { container, iconClass, Icon } = variants[variant];

  return (
    <div
      className={cn(
        "flex w-full items-start gap-3 rounded-lg border p-4 shadow-md transition-all duration-200",
        container,
        className
      )}
      role="alert"
    >
      <Icon className={cn("h-5 w-5 shrink-0 mt-0.5", iconClass)} />
      <div className="flex-1 text-sm">
        {title ? <p className="font-semibold">{title}</p> : null}
        {description ? <p className={cn(title && "mt-1 opacity-90")}>{description}</p> : null}
      </div>
      {onClose ? (
        <button
          type="button"
          onClick={onClose}
          className="rounded p-1 hover:bg-black/10 transition-colors cursor-pointer"
          aria-label="Close toast"
        >
          <X className="h-4 w-4" />
        </button>
      ) : null}
    </div>
  );
}
