import { NavLink, Outlet } from "react-router";
import { Header as UIHeader } from "@react-workshop/ui/header";
import { Footer as UIFooter } from "@react-workshop/ui/footer";
import { Input as UIInput } from "@react-workshop/ui/input";

import {
  Heart as IHeart,
  Search as ISearch,
  ShoppingCart as IShoppingCart,
  User as IUser
} from "lucide-react";

export function DefaultLayout() {
  return (
    <div className="min-h-screen bg-white text-black">
      <UIHeader>
        <UIHeader.Nav className="mx-auto">
          <UIHeader.Logo>
            <img
              className="h-9 w-9 object-contain"
              src="/images/common/common-01.png"
              alt="Furniro"
            />
            Furniro
          </UIHeader.Logo>
          <UIHeader.NavList>
            <UIHeader.NavItem asComponent={NavLink} to="/">
              Home
            </UIHeader.NavItem>
            <UIHeader.NavItem asComponent={NavLink} to="/shop">
              Shop
            </UIHeader.NavItem>
            <UIHeader.NavItem asComponent={NavLink} to="/about">
              About
            </UIHeader.NavItem>
            <UIHeader.NavItem asComponent={NavLink} to="/contact">
              Contact
            </UIHeader.NavItem>
          </UIHeader.NavList>
          <UIHeader.Actions>
            <UIHeader.ActionButton aria-label="Account">
              <IUser size={24} />
            </UIHeader.ActionButton>
            <UIHeader.ActionButton aria-label="Search">
              <ISearch size={24} />
            </UIHeader.ActionButton>
            <UIHeader.ActionButton aria-label="Wishlist">
              <IHeart size={24} />
            </UIHeader.ActionButton>
            <UIHeader.ActionButton aria-label="Cart">
              <IShoppingCart size={24} />
            </UIHeader.ActionButton>
          </UIHeader.Actions>
        </UIHeader.Nav>
      </UIHeader>

      <main className="mx-auto min-h-screen w-full gap-6 pb-8 flex-1">
        <Outlet />
      </main>

      <UIFooter>
        <UIFooter.Grid className="mx-auto">
          <UIFooter.Column>
            <UIFooter.Logo className="mb-12">Furniro.</UIFooter.Logo>
            <UIFooter.Address>
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </UIFooter.Address>
          </UIFooter.Column>
          <UIFooter.Column>
            <UIFooter.Heading className="mb-10">Links</UIFooter.Heading>
            <UIFooter.LinkList>
              <UIFooter.Link href="#">Home</UIFooter.Link>
              <UIFooter.Link href="#">Shop</UIFooter.Link>
              <UIFooter.Link href="#">About</UIFooter.Link>
              <UIFooter.Link href="#">Contact</UIFooter.Link>
            </UIFooter.LinkList>
          </UIFooter.Column>
          <UIFooter.Column>
            <UIFooter.Heading className="mb-10">Help</UIFooter.Heading>
            <UIFooter.LinkList>
              <UIFooter.Link href="#">Payment Options</UIFooter.Link>
              <UIFooter.Link href="#">Returns</UIFooter.Link>
              <UIFooter.Link href="#">Privacy Policies</UIFooter.Link>
            </UIFooter.LinkList>
          </UIFooter.Column>
          <UIFooter.Column>
            <UIFooter.Heading className="mb-10">Newsletter</UIFooter.Heading>
            <UIFooter.NewsletterForm>
              <UIInput variant="textUnderline" placeholder="Enter Your Email Address" />
              <UIFooter.SubscribeButton>Subscribe</UIFooter.SubscribeButton>
            </UIFooter.NewsletterForm>
          </UIFooter.Column>
        </UIFooter.Grid>
        <UIFooter.Bottom>2026 Furniro. All rights reserved</UIFooter.Bottom>
      </UIFooter>
    </div>
  );
}
