import type { Meta, StoryObj } from "@storybook/nextjs";
import { FAQ } from "./faq";

const meta: Meta<typeof FAQ> = {
  title: "Sections/FAQ",
  component: FAQ,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof FAQ>;

export const Default: Story = {};
