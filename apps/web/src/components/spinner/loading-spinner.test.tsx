import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { LoadingSpinner } from "./loading-spinner";

describe("LoadingSpinner", () => {
  it("should render default loading label", () => {
    render(<LoadingSpinner />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("should render custom label", () => {
    render(<LoadingSpinner label="Fetching products..." />);
    expect(screen.getByText("Fetching products...")).toBeInTheDocument();
  });

  it("should not render label if label is empty", () => {
    render(<LoadingSpinner label="" />);
    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
  });
});
