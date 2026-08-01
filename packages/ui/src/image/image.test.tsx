import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Image } from "./image";

describe("Image Component", () => {
  it("renders default img tag with alt text and src", () => {
    render(<Image alt="Syltherine" src="/images/home/home-06.jpg" />);

    const img = screen.getByRole("img", { name: "Syltherine" });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/images/home/home-06.jpg");
    expect(img).toHaveClass("max-w-full", "h-auto");
  });

  it("renders card variant image styling", () => {
    render(<Image alt="Dining" src="/images/home/home-01.png" variant="card" />);

    const img = screen.getByRole("img", { name: "Dining" });
    expect(img).toHaveClass("w-full", "object-cover");
  });

  it("renders thumbnail variant image styling", () => {
    render(<Image alt="Asgaard sofa" src="/images/product/product-01.png" variant="thumbnail" />);

    const img = screen.getByRole("img", { name: "Asgaard sofa" });
    expect(img).toHaveClass(
      "h-20",
      "w-20",
      "rounded-[10px]",
      "object-cover",
      "border",
      "border-line"
    );
  });

  it("renders avatar variant styling", () => {
    render(<Image alt="User avatar" src="/images/home/home-06.jpg" variant="avatar" />);

    const img = screen.getByRole("img", { name: "User avatar" });
    expect(img).toHaveClass("h-10", "w-10", "rounded-full", "object-cover");
  });

  it("renders banner variant styling", () => {
    render(<Image alt="Hero banner" src="/images/home/home-05.png" variant="banner" />);

    const img = screen.getByRole("img", { name: "Hero banner" });
    expect(img).toHaveClass("absolute", "inset-0", "h-full", "w-full", "object-cover");
  });
});
