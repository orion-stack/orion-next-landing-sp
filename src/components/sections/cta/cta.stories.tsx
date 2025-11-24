import type { Meta, StoryObj } from "@storybook/nextjs";
import { CTA } from "./cta";

const meta: Meta<typeof CTA> = {
  title: "Sections/CTA",
  component: CTA,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof CTA>;

export const Default: Story = {};
