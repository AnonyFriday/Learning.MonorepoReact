import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { CardProduct } from "./card-product";

describe("CardProduct", () => {
  it("should render children inside Link component", () => {
    render(
      <MemoryRouter>
        <CardProduct productId="1">
          <CardProduct.Image src="/test.jpg" alt="Test Product" />
          <CardProduct.Info title="Asgaard Sofa" category="Sofa" price="Rp 2.500.000" />
        </CardProduct>
      </MemoryRouter>
    );

    expect(screen.getByText("Asgaard Sofa")).toBeInTheDocument();
    expect(screen.getByText("Sofa")).toBeInTheDocument();
    expect(screen.getByText("Rp 2.500.000")).toBeInTheDocument();
  });
});
