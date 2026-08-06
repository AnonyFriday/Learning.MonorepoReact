import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Header } from "./header";

describe("Header", () => {
  it("renders header container and sub-components correctly", () => {
    render(
      <Header data-testid="header-root">
        <Header.Nav>
          <Header.Logo href="#">Furniro</Header.Logo>
          <Header.NavList>
            <Header.NavItem href="#">Home</Header.NavItem>
            <Header.NavItem href="#">Shop</Header.NavItem>
          </Header.NavList>
          <Header.Actions>
            <Header.ActionButton aria-label="Account">User</Header.ActionButton>
          </Header.Actions>
        </Header.Nav>
      </Header>
    );

    expect(screen.getByTestId("header-root")).toBeInTheDocument();
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Furniro" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Shop" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Account" })).toBeInTheDocument();
  });

  it("applies custom classNames cleanly", () => {
    render(
      <Header className="custom-header" data-testid="header-root">
        <Header.Nav className="custom-nav">
          <Header.Logo className="custom-logo" href="#">
            Furniro
          </Header.Logo>
        </Header.Nav>
      </Header>
    );

    expect(screen.getByTestId("header-root")).toHaveClass("custom-header");
    expect(screen.getByRole("navigation")).toHaveClass("custom-nav");
    expect(screen.getByRole("link", { name: "Furniro" })).toHaveClass("custom-logo");
  });
});
