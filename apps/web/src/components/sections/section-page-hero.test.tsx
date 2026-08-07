import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { SectionPageHero } from "./section-page-hero";

describe("SectionPageHero", () => {
  it("renders page title and breadcrumb link", () => {
    render(
      <MemoryRouter>
        <SectionPageHero
          currentPageTitle="Shop"
          fromPageTitle="Home"
          fromPageUrl="/"
          logoUrl="/images/common/common-01.png"
          bgImageUrl="/images/common/common-10.jpg"
        />
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", { name: "Shop" })).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
  });
});
