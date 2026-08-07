import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { SectionCartTotals } from "./section-cart-totals";
import { useCartStore } from "@/stores/use-cart-store";

describe("SectionCartTotals", () => {
  it("renders cart totals and check out button", () => {
    useCartStore.getState().clearCart();
    useCartStore.getState().addItem({
      id: "1",
      name: "Sofa",
      price: 2500000,
      image: "/sofa.jpg",
      quantity: 1
    });

    render(
      <MemoryRouter>
        <SectionCartTotals />
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", { name: "Cart Totals" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Check Out" })).toBeInTheDocument();
  });
});
