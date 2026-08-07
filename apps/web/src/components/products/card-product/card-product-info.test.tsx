import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { CardProductInfo } from "./card-product-info";

describe("CardProductInfo", () => {
  it("renders title, category, and price", () => {
    render(<CardProductInfo title="Sofa" category="Furniture" price="Rp 1.000.000" />);

    expect(screen.getByText("Sofa")).toBeInTheDocument();
    expect(screen.getByText("Furniture")).toBeInTheDocument();
    expect(screen.getByText("Rp 1.000.000")).toBeInTheDocument();
  });
});
