import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { CardProductImage } from "./card-product-image";

describe("CardProductImage", () => {
  it("renders image element with alt text and src", () => {
    render(<CardProductImage src="/sofa.jpg" alt="Sofa image" />);
    const img = screen.getByRole("img", { name: "Sofa image" });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/sofa.jpg");
  });
});
