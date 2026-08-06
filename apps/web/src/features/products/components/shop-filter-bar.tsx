import { SlidersHorizontal, Grid2x2, List } from "lucide-react";

export interface ShopFilterBarProps {
  totalResults?: number;
  currentPage?: number;
  pageSize?: number;
}

export function ShopFilterBar({
  totalResults = 32,
  currentPage = 1,
  pageSize = 16
}: ShopFilterBarProps) {
  const startItem = Math.min((currentPage - 1) * pageSize + 1, totalResults);
  const endItem = Math.min(currentPage * pageSize, totalResults);

  return (
    <section className="bg-beige py-8">
      <div className="mx-auto flex w-[min(1240px,calc(100%-32px))] flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-6">
          <button
            className="flex items-center gap-3 text-xl font-normal hover:text-brand cursor-pointer"
            type="button"
          >
            <SlidersHorizontal className="h-6 w-6" />
            Filter
          </button>
          <button aria-label="Grid view" type="button" className="hover:text-brand cursor-pointer">
            <Grid2x2 className="h-6 w-6" />
          </button>
          <button aria-label="List view" type="button" className="hover:text-brand cursor-pointer">
            <List className="h-6 w-6" />
          </button>
          <span className="h-9 w-px bg-[#9f9f9f]"></span>
          <span className="text-base">
            Showing {startItem}–{endItem} of {totalResults} results
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-7">
          <label className="flex items-center gap-4 text-xl">
            Show
            <input
              className="h-13.75 w-13.75 bg-white text-center text-xl text-muted outline-none border border-transparent focus:border-brand"
              defaultValue={pageSize}
            />
          </label>
          <label className="flex items-center gap-4 text-xl">
            Short by
            <select className="h-13.75 w-47 bg-white px-7 text-xl text-muted outline-none border border-transparent focus:border-brand cursor-pointer">
              <option>Default</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </label>
        </div>
      </div>
    </section>
  );
}
