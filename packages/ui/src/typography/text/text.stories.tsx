import type { Meta, StoryObj } from "@storybook/react-vite";
import "../../styles.css";
import { Text } from "./text";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-[#fcfbf7] p-10">
        <div className="flex flex-wrap items-center gap-4">
          <Story />
        </div>
      </div>
    )
  ]
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Body: Story = {
  args: {
    variant: "body",
    children: "Default body text for general paragraphs"
  }
};

export const Leading: Story = {
  args: {
    variant: "leading",
    weight: "medium",
    children: "High quality furniture crafted for modern living."
  }
};

export const Muted: Story = {
  args: {
    variant: "muted",
    children: "400 University Drive Suite 200 Coral Gables, FL 33134 USA"
  }
};

export const Eyebrow: Story = {
  args: {
    asComponent: "span",
    variant: "eyebrow",
    weight: "semibold",
    children: "New Arrival"
  }
};

export const Badge: Story = {
  args: {
    variant: "badge",
    weight: "medium",
    children: "Over 2 years"
  }
};

export const Strikethrough: Story = {
  args: {
    asComponent: "span",
    variant: "strikethrough",
    size: "sm",
    children: "Rp 3.500.000"
  }
};

export const ProductCardPrice: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Text asComponent="span" size="xl" weight="semibold">
        Rp 2.500.000
      </Text>
      <Text asComponent="span" variant="strikethrough" size="sm">
        Rp 3.500.000
      </Text>
    </div>
  )
};

export const ProductDetailPrice: Story = {
  render: () => (
    <Text size="2xl" weight="medium">
      Rp 250,000.00
    </Text>
  )
};

export const FontWeights: Story = {
  render: () => (
    <div className="grid max-w-xl gap-3">
      <Text weight="normal">Normal weight text</Text>
      <Text weight="medium">Medium weight text</Text>
      <Text weight="semibold">Semibold weight text</Text>
      <Text weight="bold">Bold weight text</Text>
      <Text weight="extrabold">Extrabold weight text</Text>
    </div>
  )
};

export const CustomSizes: Story = {
  render: () => (
    <div className="grid max-w-xl gap-3">
      <Text size="xs">Extra small text</Text>
      <Text size="sm">Small text</Text>
      <Text size="base">Base text</Text>
      <Text size="lg">Large text</Text>
      <Text size="xl">Extra large text</Text>
      <Text size="2xl">2XL text</Text>
    </div>
  )
};

export const AllVariants: Story = {
  render: () => (
    <div className="grid max-w-xl gap-4">
      <Text variant="leading" weight="medium">
        Lead: High quality furniture
      </Text>
      <Text asComponent="span" variant="eyebrow" weight="semibold">
        Eyebrow: New Arrival
      </Text>
      <Text variant="body">Body: Regular description paragraph text.</Text>
      <Text variant="muted">Muted: Company address details.</Text>
      <Text variant="badge" weight="medium">
        Badge: Over 2 years
      </Text>
      <Text variant="muted" size="sm">
        Small: Copyright 2026 Furniro.
      </Text>
      <Text asComponent="span" variant="strikethrough" size="sm">
        Strikethrough: Rp 3.500.000
      </Text>
      <Text size="xl" weight="bold">
        Rp 3.500.000
      </Text>
    </div>
  )
};
