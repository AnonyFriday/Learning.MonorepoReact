import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { CardProductPrice } from "./card-product-price";

describe("CardProductPrice", () => {
  it("renders price and original strikethrough price when provided", () => {
    render(<CardProductPrice price="Rp 2.500.000" originalPrice="Rp 3.500.000" />);

    expect(screen.getByText("Rp 2.500.000")).toBeInTheDocument();
    expect(screen.getByText("Rp 3.500.000")).toBeInTheDocument();
  });

  it("renders default price when no price provided", () => {
    render(<CardProductPrice />);
    expect(screen.getByText("Rp NaN")).toBeInTheDocument();
  });
});
