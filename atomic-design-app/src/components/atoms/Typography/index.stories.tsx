import type { Meta, StoryObj } from "@storybook/react";
import Typography from "./index";

const meta: Meta<typeof Typography> = {
  title: "Atoms/Typography",
  component: Typography,
};
export default meta;

type Story = StoryObj<typeof Typography>;

export const Title: Story = { args: { variant: "h1", children: "New cash kick" } };
export const Heading3: Story = { args: { variant: "h4", children: "Summary" } };
export const Body1: Story = { args: { variant: "body1", children: "Term" } };
export const Body2Secondary: Story = {
  args: { variant: "body2", color: "text.secondary", children: "12 months" },
};
export const Caption: Story = {
  args: { variant: "caption", color: "text.secondary", children: "12.0% fee" },
};
export const Button2: Story = {
  args: { variant: "button2", color: "text.secondary", children: "Help" },
};
export const Button2Warning: Story = {
  args: { variant: "button2", color: "warning.main", children: "Log Out" },
};
