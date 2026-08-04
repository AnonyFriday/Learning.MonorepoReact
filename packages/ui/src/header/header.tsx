import type { AnchorHTMLAttributes, ElementType, HTMLAttributes } from "react";
import { cn } from "../utils";
import { Button, type ButtonProps } from "../button/button";

type HeaderNavItem = AnchorHTMLAttributes<HTMLAnchorElement> & {
  asComponent?: ElementType;
};

export function Header({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return <header className={cn("bg-white", className)} {...props} />;
}

function Nav({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn(
        "min-h-25 w-[min(1240px,calc(100%-32px))] flex items-center justify-between gap-6",
        className
      )}
      {...props}
    />
  );
}

function Logo({ className, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={cn(
        "flex shrink-0 items-center gap-2 text-[34px] font-bold leading-none text-black no-underline",
        "transition-transform duration-200 hover:scale-105",
        className
      )}
      {...props}
    />
  );
}

function NavList({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("hidden items-center gap-18 text-base font-medium", "md:flex", className)}
      {...props}
    />
  );
}

function NavItem({ className, asComponent: Component = "a", ...props }: HeaderNavItem) {
  return (
    <Component
      className={cn(
        "text-black no-underline",
        "transition-colors duration-200 hover:text-brand [&.active]:text-brand",
        className
      )}
      {...props}
    />
  );
}

function Actions({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex items-center gap-3 text-black", "sm:gap-6", className)} {...props} />
  );
}

function ActionButton({ className, size = "sm", variant = "ghost", ...props }: ButtonProps) {
  return (
    <Button
      size={size}
      variant={variant}
      className={cn(
        "grid h-10 w-10 place-items-center rounded-full",
        "transition-colors duration-200 hover:bg-beige hover:text-brand",
        className
      )}
      {...props}
    />
  );
}

Header.Nav = Nav;
Header.Logo = Logo;
Header.NavList = NavList;
Header.NavItem = NavItem;
Header.Actions = Actions;
Header.ActionButton = ActionButton;
