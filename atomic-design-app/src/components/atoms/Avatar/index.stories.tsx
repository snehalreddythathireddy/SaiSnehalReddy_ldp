import type { Meta, StoryObj } from "@storybook/react";
import Avatar from "./index";

const meta: Meta<typeof Avatar> = {
  title: "Atoms/Avatar",
  component: Avatar,
};
export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = { args: { alt: "Kane Cooper", size: 36 } };
export const Large: Story = { args: { alt: "Kane Cooper", size: 44 } };
export const Clickable: Story = { args: { alt: "Kane Cooper", size: 36, onClick: () => alert("open profile") } };
