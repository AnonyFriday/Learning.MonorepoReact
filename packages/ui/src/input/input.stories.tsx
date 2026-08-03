import type { Meta, StoryObj } from "@storybook/react-vite";
import "../styles.css";
import { Field, FieldError, Input, Label } from "./input";

const meta = {
  title: "Components/Input",
  component: Input
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Text: Story = {
  render: () => (
    <Field className="max-w-sm">
      <Label htmlFor="email">Email</Label>
      <Input id="email" placeholder="name@example.com" />
    </Field>
  )
};

export const Subscribe: Story = {
  render: () => (
    <Field className="max-w-sm">
      <Input id="emailSubscribe" placeholder="name@example.com" variant="textUnderline" />
    </Field>
  )
};

export const InvalidSubscribe: Story = {
  render: () => (
    <Field className="max-w-sm">
      <Input id="emailSubscribe" placeholder="name@example.com" variant="textUnderline" />
      <FieldError>Enter a valid email address.</FieldError>
    </Field>
  )
};

export const InvalidText: Story = {
  render: () => (
    <Field className="max-w-sm">
      <Label htmlFor="invalid-email">Email</Label>
      <Input id="invalid-email" isInvalid placeholder="name@example.com" />
      <FieldError>Enter a valid email address.</FieldError>
    </Field>
  )
};
