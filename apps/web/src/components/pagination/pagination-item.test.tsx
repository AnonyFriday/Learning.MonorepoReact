import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { PaginationItem } from "./pagination-item";

describe("PaginationItem", () => {
  it("renders active and non-active pagination button styles", () => {
    const { rerender } = render(<PaginationItem active>1</PaginationItem>);
    const button = screen.getByRole("button", { name: "1" });
    expect(button).toHaveClass("bg-brand");

    rerender(<PaginationItem active={false}>2</PaginationItem>);
    const button2 = screen.getByRole("button", { name: "2" });
    expect(button2).toHaveClass("bg-beige");
  });
});
