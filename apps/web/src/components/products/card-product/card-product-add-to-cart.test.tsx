import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { CardProductAddToCart } from "./card-product-add-to-cart";

describe("CardProductAddToCart", () => {
  it("triggers onAddToCart handler when button clicked", () => {
    const handleAddToCart = vi.fn();
    render(<CardProductAddToCart onAddToCart={handleAddToCart} buttonLabel="Buy Now" />);

    const button = screen.getByRole("button", { name: "Buy Now" });
    fireEvent.click(button);
    expect(handleAddToCart).toHaveBeenCalledTimes(1);
  });

  it("renders custom component wrapper with href when onAddToCart is not provided", () => {
    render(
      <CardProductAddToCart href="/product/1" asComponent="a" buttonLabel="View Product" />
    );

    const button = screen.getByRole("button", { name: "View Product" });
    expect(button).toBeInTheDocument();
  });

  it("handles click events on Share, Compare, and Like buttons without error", () => {
    render(<CardProductAddToCart />);

    const shareBtn = screen.getByText("Share");
    const compareBtn = screen.getByText("Compare");
    const likeBtn = screen.getByText("Like");

    expect(() => fireEvent.click(shareBtn)).not.toThrow();
    expect(() => fireEvent.click(compareBtn)).not.toThrow();
    expect(() => fireEvent.click(likeBtn)).not.toThrow();
  });
});
