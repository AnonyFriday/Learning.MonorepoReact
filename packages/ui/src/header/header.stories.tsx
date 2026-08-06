import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Heart as IHeart,
  Search as ISearch,
  ShoppingCart as IShoppingCart,
  User as IUser
} from "lucide-react";

import "../styles.css";
import { Header } from "./header";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-beige">
        <Story />
      </div>
    )
  ]
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Header>
      <Header.Nav>
        <Header.Logo href="index.html">
          <img
            className="h-9 w-9 object-contain"
            src="/images/common/common-01.png"
            alt="Furniro"
          />
          Furniro
        </Header.Logo>
        <Header.NavList>
          <Header.NavItem className="active" href="index.html">
            Home
          </Header.NavItem>
          <Header.NavItem href="shop.html">Shop</Header.NavItem>
          <Header.NavItem href="about.html">About</Header.NavItem>
          <Header.NavItem href="contact.html">Contact</Header.NavItem>
        </Header.NavList>
        <Header.Actions>
          <Header.ActionButton aria-label="Account">
            <IUser size={24} />
          </Header.ActionButton>
          <Header.ActionButton aria-label="Search">
            <ISearch size={24} />
          </Header.ActionButton>
          <Header.ActionButton aria-label="Wishlist">
            <IHeart size={24} />
          </Header.ActionButton>
          <Header.ActionButton aria-label="Cart">
            <IShoppingCart size={24} />
          </Header.ActionButton>
        </Header.Actions>
      </Header.Nav>
    </Header>
  )
};
