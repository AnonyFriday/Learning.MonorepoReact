import { AnchorHTMLAttributes, ElementType } from "react";
import { cn } from "@react-workshop/ui/src/utils";
import { Heading } from "@react-workshop/ui/heading";
import { Image } from "@react-workshop/ui/image";

type CardCategoryProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  asComponent?: ElementType;
  to?: string;
  categoryName: string;
  categoryImgUrl: string;
};

export function CardCategory({
  className,
  asComponent: Component = "a",
  categoryName,
  categoryImgUrl,
  ...props
}: CardCategoryProps) {
  return (
    <Component className={cn("text-center", className)} {...props}>
      <Image className="h-120" variant="card" radius="md" src={categoryImgUrl} alt={categoryName} />
      <Heading asComponent="h3" size="2xl" weight="semibold" className="mt-7">
        {categoryName}
      </Heading>
    </Component>
  );
}
