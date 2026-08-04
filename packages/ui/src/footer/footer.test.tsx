import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Footer } from "./footer";
import { Input } from "../input/input";

describe("Footer", () => {
  it("renders footer container and compound sub-components", () => {
    render(
      <Footer data-testid="footer-root">
        <Footer.Grid>
          <Footer.Column>
            <Footer.Logo className="mb-12">Furniro.</Footer.Logo>
            <Footer.Address className="max-w-[285px]">
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </Footer.Address>
          </Footer.Column>
          <Footer.Column>
            <Footer.Heading className="mb-10">Links</Footer.Heading>
            <Footer.LinkList>
              <Footer.Link href="#">Home</Footer.Link>
              <Footer.Link href="#">Shop</Footer.Link>
            </Footer.LinkList>
          </Footer.Column>
          <Footer.Column>
            <Footer.Heading className="mb-10">Newsletter</Footer.Heading>
            <Footer.NewsletterForm>
              <Input variant="textUnderline" placeholder="Enter Your Email Address" />
              <Footer.SubscribeButton>Subscribe</Footer.SubscribeButton>
            </Footer.NewsletterForm>
          </Footer.Column>
        </Footer.Grid>
        <Footer.Bottom>2026 Furniro. All rights reserved</Footer.Bottom>
      </Footer>
    );

    expect(screen.getByTestId("footer-root")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: "Furniro." })).toBeInTheDocument();
    expect(
      screen.getByText("400 University Drive Suite 200 Coral Gables, FL 33134 USA")
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 3, name: "Links" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter Your Email Address")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "SUBSCRIBE" })).toBeInTheDocument();
    expect(screen.getByText("2026 Furniro. All rights reserved")).toBeInTheDocument();
  });
});
