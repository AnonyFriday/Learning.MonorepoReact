import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Text } from "./text";

describe("Text Component", () => {
  it("renders default body variant inside p tag", () => {
    render(
      <Text>
        Your personal data will be used to support your experience throughout this website, to
        manage access to your account, and for other purposes described in our privacy policy.
      </Text>
    );

    const el = screen.getByText(
      "Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy."
    );
    expect(el).toBeInTheDocument();
    expect(el.tagName).toBe("P");
    expect(el).toHaveClass("text-base", "font-normal", "text-dark", "leading-relaxed");
  });

  it("renders lead variant classes", () => {
    render(
      <Text variant="leading" weight="medium">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
        ullamcorper mattis.
      </Text>
    );

    const el = screen.getByText(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
    );
    expect(el).toHaveClass("text-base", "md:text-lg", "font-medium", "text-dark");
  });

  it("renders muted variant with text-muted class", () => {
    render(<Text variant="muted">400 University Drive Suite 200 Coral Gables, FL 33134 USA</Text>);

    const el = screen.getByText("400 University Drive Suite 200 Coral Gables, FL 33134 USA");
    expect(el).toHaveClass("text-base", "font-normal", "text-muted");
  });

  it("renders small variant text as copyright", () => {
    render(
      <Text variant="muted" size="sm">
        2026 Furniro. All rights reserved
      </Text>
    );

    const el = screen.getByText("2026 Furniro. All rights reserved");
    expect(el).toHaveClass("text-sm", "font-normal", "text-muted");
  });

  it("renders eyebrow variant with brand color and uppercase tracking", () => {
    render(
      <Text asComponent="span" variant="eyebrow" weight="semibold">
        New Arrival
      </Text>
    );

    const el = screen.getByText("New Arrival");
    expect(el.tagName).toBe("SPAN");
    expect(el).toHaveClass("text-brand", "uppercase", "tracking-[3px]", "font-semibold");
  });

  it("renders badge variant styling", () => {
    render(
      <Text variant="badge" weight="medium">
        Over 2 years
      </Text>
    );

    const el = screen.getByText("Over 2 years");
    expect(el).toHaveClass("text-base", "md:text-xl", "font-medium", "text-muted");
  });

  it("renders strikethrough variant with line-through styling", () => {
    render(
      <Text asComponent="span" variant="strikethrough" size="sm">
        Rp 3.500.000
      </Text>
    );

    const el = screen.getByText("Rp 3.500.000");
    expect(el.tagName).toBe("SPAN");
    expect(el).toHaveClass("text-sm", "font-normal", "text-muted", "line-through");
  });

  it("renders link variant styling", () => {
    render(
      <Text asComponent="a" href="index.html" variant="link">
        Home
      </Text>
    );

    const el = screen.getByRole("link", { name: "Home" });
    expect(el.tagName).toBe("A");
    expect(el).toHaveAttribute("href", "index.html");
    expect(el).toHaveClass("text-dark", "hover:text-brand", "cursor-pointer");
  });
});
