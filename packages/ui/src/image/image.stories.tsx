import type { Meta, StoryObj } from "@storybook/react-vite";
import "../styles.css";
import { Image } from "./image";

const meta: Meta<typeof Image> = {
  title: "Components/Image",
  component: Image,
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-[#fcfbf7] p-10">
        <Story />
      </div>
    )
  ]
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    alt: "Syltherine",
    src: "/images/home/home-06.jpg"
  }
};

export const CategoryCard: Story = {
  args: {
    alt: "Dining",
    src: "/images/home/home-01.png",
    variant: "card",
    radius: "md",
    className: "max-w-xs"
  }
};

export const ProductThumbnail: Story = {
  args: {
    alt: "Asgaard sofa",
    src: "/images/product/product-01.png",
    variant: "thumbnail"
  }
};

export const UserAvatar: Story = {
  args: {
    alt: "User avatar",
    src: "/images/home/home-06.jpg",
    variant: "avatar"
  }
};

export const BannerBackground: Story = {
  render: () => (
    <div className="relative h-64 w-full max-w-2xl overflow-hidden rounded-xl">
      <Image alt="Hero banner" src="/images/home/home-05.png" variant="banner" />
      <div className="relative z-10 flex h-full items-center justify-center bg-black/30 p-6 text-white">
        <h2 className="text-3xl font-bold">Discover Our New Collection</h2>
      </div>
    </div>
  )
};

export const AllVariants: Story = {
  render: () => (
    <div className="grid max-w-2xl gap-8 md:grid-cols-2">
      <div>
        <span className="mb-2 block text-xs uppercase text-muted">Category Card Image:</span>
        <Image alt="Dining" radius="md" src="/images/home/home-01.png" variant="card" />
      </div>
      <div>
        <span className="mb-2 block text-xs uppercase text-muted">Product Item Image:</span>
        <Image alt="Syltherine" radius="md" src="/images/home/home-06.jpg" variant="card" />
      </div>
      <div>
        <span className="mb-2 block text-xs uppercase text-muted">Product Thumbnail:</span>
        <Image alt="Asgaard sofa" src="/images/product/product-01.png" variant="thumbnail" />
      </div>
      <div>
        <span className="mb-2 block text-xs uppercase text-muted">User Avatar:</span>
        <Image alt="User avatar" src="/images/home/home-06.jpg" variant="avatar" />
      </div>
    </div>
  )
};
