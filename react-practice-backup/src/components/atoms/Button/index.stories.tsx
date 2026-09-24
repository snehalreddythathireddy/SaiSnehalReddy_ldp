import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { fn } from "storybook/test";
import Button from "./index";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,

  // Docs Addon
  tags: ["autodocs"],

  // Default args
  args: {
    label: "Submit",
    onClick: fn(),
  },

  // Controls
  argTypes: {
    label: {
      control: "text",
      description: "Text displayed on the button",
    },
    onClick: {
      action: "clicked",
      description: "Triggered when the button is clicked",
    },
  },

  // Docs configuration
  parameters: {
    docs: {
      description: {
        component:
          "A reusable Button atom that supports click events and customizable labels.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const Login: Story = {
  args: {
    label: "Login",
  },
};

export const Register: Story = {
  args: {
    label: "Register",
  },
};

export const Cancel: Story = {
  args: {
    label: "Cancel",
  },
};