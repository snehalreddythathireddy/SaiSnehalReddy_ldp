import type { Meta, StoryObj } from "@storybook/react";
import Header from "./index";

const meta: Meta<typeof Header> = {
  title: "Organisms/Header",
  component: Header,
};
export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    title: "New cash kick",
    subtitle: "Let's setup a new cash kick to power your SaaS",
    onBack: () => {},
    user: { id: 1, name: "Kane Cooper", role: "Admin" },
  },
};