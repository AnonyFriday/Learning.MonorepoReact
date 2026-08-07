import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { SectionFeaturePerks } from "./section-feature-perks";

describe("SectionFeaturePerks", () => {
  it("renders default feature perks", () => {
    render(<SectionFeaturePerks />);

    expect(screen.getByText("High Quality")).toBeInTheDocument();
    expect(screen.getByText("Warranty Protection")).toBeInTheDocument();
    expect(screen.getByText("Free Shipping")).toBeInTheDocument();
    expect(screen.getByText("24 / 7 Support")).toBeInTheDocument();
  });
});
