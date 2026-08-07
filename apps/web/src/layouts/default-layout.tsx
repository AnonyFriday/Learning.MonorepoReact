import { Link, NavLink, Outlet } from "react-router";
import { Header } from "@react-workshop/ui/header";
import { Footer } from "@react-workshop/ui/footer";
import { Input } from "@react-workshop/ui/input";

import { AppCts } from "@/appcts";
import { Toaster } from "@/components/toaster";

import {
  Heart as IHeart,
  Search as ISearch,
  ShoppingCart as IShoppingCart,
  User as IUser
} from "lucide-react";

export function DefaultLayout() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header>
        <Header.Nav className="mx-auto">
          <Header.Logo>
            <img
              className="h-9 w-9 object-contain"
              src="/images/common/common-01.png"
              alt="Furniro"
            />
            Furniro
          </Header.Logo>
          <Header.NavList>
            <Header.NavItem asComponent={NavLink} to={AppCts.Routes.Home}>
              Home
            </Header.NavItem>
            <Header.NavItem asComponent={NavLink} to={AppCts.Routes.Shop}>
              Shop
            </Header.NavItem>
            <Header.NavItem asComponent={NavLink} to={AppCts.Routes.About}>
              About
            </Header.NavItem>
            <Header.NavItem asComponent={NavLink} to={AppCts.Routes.Contact}>
              Contact
            </Header.NavItem>
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
            <NavLink to={AppCts.Routes.Cart}>
              <Header.ActionButton aria-label="Cart">
                <IShoppingCart size={24} />
              </Header.ActionButton>
            </NavLink>
          </Header.Actions>
        </Header.Nav>
      </Header>

      <main className="mx-auto min-h-screen w-full gap-6 pb-8 flex-1">
        <Outlet />
      </main>

      <Toaster />

      <Footer>
        <Footer.Grid className="mx-auto">
          <Footer.Column>
            <Footer.Logo className="mb-12">Furniro.</Footer.Logo>
            <Footer.Address>
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </Footer.Address>
          </Footer.Column>
          <Footer.Column>
            <Footer.Heading className="mb-10">Links</Footer.Heading>
            <Footer.LinkList>
              <Footer.Link href={AppCts.Routes.Home}>Home</Footer.Link>
              <Footer.Link href={AppCts.Routes.Shop}>Shop</Footer.Link>
              <Footer.Link href={AppCts.Routes.About}>About</Footer.Link>
              <Footer.Link href={AppCts.Routes.Contact}>Contact</Footer.Link>
            </Footer.LinkList>
          </Footer.Column>
          <Footer.Column>
            <Footer.Heading className="mb-10">Help</Footer.Heading>
            <Footer.LinkList>
              <Footer.Link href="#">Payment Options</Footer.Link>
              <Footer.Link href="#">Returns</Footer.Link>
              <Footer.Link href="#">Privacy Policies</Footer.Link>
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
    </div>
  );
}
