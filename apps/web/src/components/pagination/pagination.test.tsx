import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Pagination } from "./pagination";

describe("Pagination", () => {
  it("renders total item text when total items is within single page", () => {
    render(<Pagination currentPage={1} totalItems={10} />);
    expect(screen.getByText("Total Item: 10")).toBeInTheDocument();
  });

  it("renders page buttons when multiple pages exist", () => {
    render(<Pagination currentPage={1} totalItems={30} />);

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("Next")).toBeInTheDocument();
  });

  it("calls onPageSelected callback on page click", () => {
    const handlePageSelected = vi.fn();
    render(<Pagination currentPage={1} totalItems={30} onPageSelected={handlePageSelected} />);

    fireEvent.click(screen.getByText("2"));
    expect(handlePageSelected).toHaveBeenCalledWith(2);
  });
});
