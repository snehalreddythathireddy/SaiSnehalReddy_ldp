import type { Meta, StoryObj } from "@storybook/react";
import IconText from "./index";

const meta: Meta<typeof IconText> = {
  title: "Molecules/IconText",
  component: IconText,
};
export default meta;

type Story = StoryObj<typeof IconText>;

export const Inactive: Story = {
  args: { icon: "/assets/icons/home-2.svg", label: "Home" },
};
export const Active: Story = {
  args: { icon: "/assets/icons/coin.svg", label: "Cash Acceleration", active: true },
};
