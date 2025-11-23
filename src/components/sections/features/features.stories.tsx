import type { Meta, StoryObj } from "@storybook/nextjs";
import { Features } from "./features";

const meta: Meta<typeof Features> = {
  title: "Sections/Features",
  component: Features,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Features>;

export const Default: Story = {};
