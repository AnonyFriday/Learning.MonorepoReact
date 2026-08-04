import type { Meta, StoryObj } from "@storybook/react-vite";
import "../styles.css";
import { Footer } from "./footer";
import { Input } from "../input/input";

const meta: Meta<typeof Footer> = {
  title: "Components/Footer",
  component: Footer,
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-white">
        <Story />
      </div>
    )
  ]
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Footer>
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
            <Footer.Link href="index.html">Home</Footer.Link>
            <Footer.Link href="shop.html">Shop</Footer.Link>
            <Footer.Link href="about.html">About</Footer.Link>
            <Footer.Link href="contact.html">Contact</Footer.Link>
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
  )
};
