import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Heading } from "./heading";

describe("Heading Component", () => {
  it("renders default h2 heading", () => {
    render(<Heading>Browse The Range</Heading>);

    const el = screen.getByRole("heading", { level: 2, name: "Browse The Range" });
    expect(el).toBeInTheDocument();
    expect(el.tagName).toBe("H2");
    expect(el).toHaveClass("text-dark", "leading-tight", "text-3xl", "font-bold");
  });

  it("renders h1 tag when asComponent='h1' is provided", () => {
    render(
      <Heading asComponent="h1" size="5xl" weight="medium" variant="hero">
        About
      </Heading>
    );

    const el = screen.getByRole("heading", {
      level: 1,
      name: "About"
    });

    expect(el.tagName).toBe("H1");
    expect(el.textContent).toBe("About");
  });

  it("renders section variant heading", () => {
    render(
      <Heading asComponent="h2" size="4xl" weight="bold" variant="section">
        Billing details
      </Heading>
    );

    const el = screen.getByRole("heading", { level: 2, name: "Billing details" });
    expect(el).toHaveClass("text-4xl", "font-bold", "tracking-tight", "text-dark");
  });

  it("renders card variant heading", () => {
    render(
      <Heading asComponent="h3" size="2xl" weight="semibold" variant="card">
        Dining
      </Heading>
    );

    const el = screen.getByRole("heading", { level: 3, name: "Dining" });
    expect(el.tagName).toBe("H3");
    expect(el).toHaveClass("text-2xl", "font-semibold", "text-dark");
  });

  it("renders feature variant heading", () => {
    render(
      <Heading asComponent="h3" size="2xl" weight="semibold" variant="feature">
        Warranty Protection
      </Heading>
    );

    const el = screen.getByRole("heading", { level: 3, name: "Warranty Protection" });
    expect(el).toHaveClass("text-2xl", "font-semibold", "text-dark");
  });

  it("renders brand variant heading", () => {
    render(
      <Heading asComponent="h2" size="2xl" weight="bold" variant="brand">
        Furniro.
      </Heading>
    );
  });
});
