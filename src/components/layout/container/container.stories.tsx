import type { Meta, StoryObj } from "@storybook/nextjs";
import { Container } from "./container";

const meta: Meta<typeof Container> = {
  title: "Custom/Container",
  component: Container,
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    children: "This is a container with max-width and padding.",
    className:
      "bg-muted/20 py-4 border border-dashed border-muted-foreground/50",
  },
};
