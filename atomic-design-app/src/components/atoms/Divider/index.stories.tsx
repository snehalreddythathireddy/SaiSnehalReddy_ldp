import type { Meta, StoryObj } from "@storybook/react";
import Divider from "./index";

const meta: Meta<typeof Divider> = {
  title: "Atoms/Divider",
  component: Divider,
};
export default meta;

type Story = StoryObj<typeof Divider>;

export const Default: Story = { args: {} };
export const NoMargin: Story = { args: { sx: { my: 0 } } };
