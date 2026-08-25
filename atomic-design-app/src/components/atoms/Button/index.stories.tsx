import type { Meta, StoryObj } from "@storybook/react";
import Button from "./index";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    variant: { control: "select", options: ["contained", "outlined", "text"] },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Contained: Story = {
  args: { children: "Review Your Credit", variant: "contained" },
};

export const Outlined: Story = {
  args: { children: "Export", variant: "outlined" },
};

export const Text: Story = {
  args: { children: "Reset", variant: "text" },
};

export const FullWidth: Story = {
  args: { children: "Review Your Credit", variant: "contained", fullWidth: true },
};

export const Disabled: Story = {
  args: { children: "Review Your Credit", variant: "contained", disabled: true },
};

// Matches the popover's "nav-item" Button component: full width,
// left-aligned, button2 typography, optional leading icon.
export const NavItem: Story = {
  args: {
    children: "Help",
    variant: "text",
    fullWidth: true,
    sx: { justifyContent: "flex-start", typography: "button2", color: "text.secondary" },
  },
};

export const NavItemWarning: Story = {
  args: {
    children: "Log Out",
    variant: "text",
    fullWidth: true,
    sx: { justifyContent: "flex-start", typography: "button2", color: "warning.main" },
  },
};
