import type { HTMLAttributes } from "react";
import { cn } from "@react-workshop/ui/src/utils";
import { PaginationItem } from "@/components/pagination/pagination-item";
import { Text } from "@react-workshop/ui/text";
import { AppCts } from "@/appcts";

export type PaginationProps = HTMLAttributes<HTMLElement> & {
  currentPage: number;
  totalItems: number;
  onPageSelected?: (page: number) => void;
};

export function Pagination({
  currentPage,
  totalItems,
  onPageSelected,
  className,
  children,
  ...props
}: PaginationProps) {
  if (!children && totalItems <= AppCts.PageConstraints.MaxItemsPerPage) {
    return (
      <nav
        aria-label="Pagination"
        className={cn("mt-16 flex justify-center gap-9", className)}
        {...props}
      >
        <Text>{"Total Item: " + totalItems}</Text>
      </nav>
    );
  }

  const totalPages = Math.ceil(totalItems / AppCts.PageConstraints.MaxItemsPerPage);

  return (
    <nav
      aria-label="Pagination"
      className={cn("mt-16 flex justify-center gap-9", className)}
      {...props}
    >
      {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
        <PaginationItem
          key={page}
          active={page === currentPage}
          onClick={() => onPageSelected?.(page)}
        >
          {page}
        </PaginationItem>
      ))}

      {currentPage && totalPages && currentPage < totalPages && (
        <PaginationItem className="px-7" onClick={() => onPageSelected?.(currentPage + 1)}>
          Next
        </PaginationItem>
      )}
    </nav>
  );
}

Pagination.Item = PaginationItem;
