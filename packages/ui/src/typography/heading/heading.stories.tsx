import type { Meta, StoryObj } from "@storybook/react-vite";
import "../../styles.css";
import { Heading } from "./heading";

const meta: Meta<typeof Heading> = {
  title: "Components/Heading",
  component: Heading,
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

export const PageTitle: Story = {
  args: {
    asComponent: "h1",
    size: "5xl",
    weight: "medium",
    variant: "hero",
    children: "About"
  }
};

export const SectionTitle: Story = {
  args: {
    asComponent: "h2",
    size: "3xl",
    weight: "bold",
    variant: "section",
    children: "Browse The Range"
  }
};

export const CategoryCardTitle: Story = {
  args: {
    asComponent: "h3",
    size: "2xl",
    weight: "semibold",
    variant: "card",
    children: "Dining"
  }
};

export const FeatureTitle: Story = {
  args: {
    asComponent: "h3",
    size: "2xl",
    weight: "semibold",
    variant: "feature",
    children: "Warranty Protection"
  }
};

export const BrandLogoTitle: Story = {
  args: {
    asComponent: "h2",
    size: "2xl",
    weight: "bold",
    variant: "brand",
    children: "Furniro."
  }
};

export const HeadingLevels: Story = {
  render: () => (
    <div className="grid gap-4">
      <Heading asComponent="h1" size="5xl" weight="bold">
        H1: Discover Our New Collection
      </Heading>
      <Heading asComponent="h2" size="4xl" weight="semibold">
        H2: Billing details
      </Heading>
      <Heading asComponent="h3" size="3xl" weight="semibold">
        H3: High Quality
      </Heading>
      <Heading asComponent="h4" size="2xl" weight="medium">
        H4: Asgaard sofa
      </Heading>
      <Heading asComponent="h5" size="xl" weight="medium">
        H5: Customer Reviews
      </Heading>
      <Heading asComponent="h6" size="lg" weight="normal">
        H6: Additional Specifications
      </Heading>
    </div>
  )
};

export const CustomSizes: Story = {
  render: () => (
    <div className="grid max-w-xl gap-3">
      <Heading size="sm">Small (sm) heading</Heading>
      <Heading size="base">Base (base) heading</Heading>
      <Heading size="lg">Large (lg) heading</Heading>
      <Heading size="xl">Extra large (xl) heading</Heading>
      <Heading size="2xl">2XL heading</Heading>
      <Heading size="3xl">3XL heading</Heading>
      <Heading size="4xl">4XL heading</Heading>
      <Heading size="5xl">5XL heading</Heading>
      <Heading size="6xl">6XL heading</Heading>
    </div>
  )
};

export const FontWeights: Story = {
  render: () => (
    <div className="grid max-w-xl gap-3">
      <Heading weight="normal">Normal weight heading</Heading>
      <Heading weight="medium">Medium weight heading</Heading>
      <Heading weight="semibold">Semibold weight heading</Heading>
      <Heading weight="bold">Bold weight heading</Heading>
      <Heading weight="extrabold">Extrabold weight heading</Heading>
    </div>
  )
};

export const AllVariants: Story = {
  render: () => (
    <div className="grid max-w-xl gap-6">
      <div>
        <span className="text-xs uppercase text-muted">Hero Variant:</span>
        <Heading asComponent="h1" variant="hero" size="5xl" weight="bold">
          Discover Our New Collection
        </Heading>
      </div>
      <div>
        <span className="text-xs uppercase text-muted">Section Variant:</span>
        <Heading asComponent="h2" variant="section" size="3xl" weight="bold">
          Browse The Range
        </Heading>
      </div>
      <div>
        <span className="text-xs uppercase text-muted">Card Variant:</span>
        <Heading asComponent="h3" variant="card" size="2xl" weight="semibold">
          Dining
        </Heading>
      </div>
      <div>
        <span className="text-xs uppercase text-muted">Feature Variant:</span>
        <Heading asComponent="h3" variant="feature" size="2xl" weight="semibold">
          Warranty Protection
        </Heading>
      </div>
      <div>
        <span className="text-xs uppercase text-muted">Brand Variant:</span>
        <Heading asComponent="h2" variant="brand" size="2xl" weight="bold">
          Furniro.
        </Heading>
      </div>
      <div>
        <span className="text-xs uppercase text-muted">Default Variant:</span>
        <Heading asComponent="h2" variant="default" size="4xl" weight="semibold">
          Get In Touch With Us
        </Heading>
      </div>
    </div>
  )
};
