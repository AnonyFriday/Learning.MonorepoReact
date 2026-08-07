import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { CardProductBadge } from "./card-product-badge";

describe("CardProductBadge", () => {
  it("renders badge children text", () => {
    render(<CardProductBadge>-30%</CardProductBadge>);
    expect(screen.getByText("-30%")).toBeInTheDocument();
  });
});
