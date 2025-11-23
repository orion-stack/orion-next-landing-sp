import type { Meta, StoryObj } from "@storybook/nextjs";
import { Hero } from "./hero";

const meta: Meta<typeof Hero> = {
  title: "Sections/Hero",
  component: Hero,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Default: Story = {};
