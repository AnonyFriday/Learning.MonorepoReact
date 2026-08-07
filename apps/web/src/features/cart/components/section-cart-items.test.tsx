import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { SectionCartItems } from "./section-cart-items";
import { useCartStore } from "@/stores/use-cart-store";

describe("SectionCartItems", () => {
  it("renders empty cart state when cart has no items", () => {
    useCartStore.getState().clearCart();

    render(
      <MemoryRouter>
        <SectionCartItems />
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", { name: "Your cart is empty" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Explore Products" })).toBeInTheDocument();
  });

  it("renders item table when cart contains items", () => {
    useCartStore.getState().clearCart();
    useCartStore.getState().addItem({
      id: "1",
      name: "Asgaard Sofa",
      price: 2500000,
      image: "/sofa.jpg",
      quantity: 1
    });

    render(
      <MemoryRouter>
        <SectionCartItems />
      </MemoryRouter>
    );

    expect(screen.getByText("Asgaard Sofa")).toBeInTheDocument();
    expect(screen.getByText("Product")).toBeInTheDocument();
    expect(screen.getByText("Subtotal")).toBeInTheDocument();
  });
});
