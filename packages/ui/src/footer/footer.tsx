import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ElementType,
  FormHTMLAttributes,
  HTMLAttributes
} from "react";
import { cn } from "../utils";
import { Heading } from "../typography/heading/heading";
import { Text } from "../typography/text/text";

type FooterLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  asComponent?: ElementType;
  to?: string;
};

export function Footer({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return <footer className={cn("border-t border-line bg-white pt-12", className)} {...props} />;
}

function Grid({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "w-[min(1240px,calc(100%-32px))] grid gap-10 pb-12",
        "lg:grid-cols-[2fr_1fr_1fr_2fr]",
        className
      )}
      {...props}
    />
  );
}

function Column({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn(className)} {...props} />;
}

function Logo({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <Heading
      variant="brand"
      size="2xl"
      weight="bold"
      asComponent="h2"
      className={cn(className, "text-dark")}
      {...props}
    />
  );
}

function Address({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <Text variant="muted" className={cn("max-w-71.25", className)} {...props} />;
}

function ColumnHeading({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <Heading
      variant="brand"
      size="base"
      weight="normal"
      asComponent="h3"
      className={cn(className)}
      {...props}
    />
  );
}

function LinkList({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("grid gap-9 font-medium", className)} {...props} />;
}

function Link({
  className,
  asComponent: Component = "a",
  ...props
}: FooterLinkProps): import("react").JSX.Element {
  return (
    <Component
      className={cn(
        "text-dark no-underline",
        "transition-colors duration-200 hover:text-brand",
        className
      )}
      {...props}
    />
  );
}

function NewsletterForm({ className, ...props }: FormHTMLAttributes<HTMLFormElement>) {
  return (
    <form
      className={cn("flex items-center gap-3", className)}
      onSubmit={(e) => e.preventDefault()}
      {...props}
    />
  );
}

function SubscribeButton({
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "border-b border-dark py-1 text-sm font-medium uppercase text-dark",
        "transition-colors duration-200 hover:border-brand hover:text-brand",
        className
      )}
      type="submit"
      {...props}
    >
      {typeof children != "string" ? children : children.toLocaleUpperCase()}
    </button>
  );
}

function Bottom({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mx-auto w-[min(1240px,calc(100%-32px))] border-t border-line py-9 text-dark",
        className
      )}
      {...props}
    />
  );
}

Footer.Grid = Grid;
Footer.Logo = Logo;
Footer.Address = Address;
Footer.Column = Column;
Footer.Heading = ColumnHeading;
Footer.LinkList = LinkList;
Footer.Link = Link;
Footer.NewsletterForm = NewsletterForm;
Footer.SubscribeButton = SubscribeButton;
Footer.Bottom = Bottom;
