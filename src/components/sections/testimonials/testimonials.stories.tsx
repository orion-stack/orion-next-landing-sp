import type { Meta, StoryObj } from "@storybook/nextjs";
import { Testimonials } from "./testimonials";

const meta: Meta<typeof Testimonials> = {
  title: "Sections/Testimonials",
  component: Testimonials,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Testimonials>;

export const Default: Story = {};
