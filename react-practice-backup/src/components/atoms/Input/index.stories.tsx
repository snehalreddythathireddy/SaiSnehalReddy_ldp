import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Input from "./index";

const meta: Meta<typeof Input> = {
  title: "Atoms/Input",
  component: Input,

  // Docs Addon
  tags: ["autodocs"],

  parameters: {
    docs: {
      description: {
        component:
          "A reusable Input atom that accepts a placeholder and can be used in forms and search components.",
      },
    },
  },

  // Controls
  argTypes: {
    placeholder: {
      control: "text",
      description: "Placeholder displayed inside the input field",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Enter your name",
  },
};

export const Email: Story = {
  args: {
    placeholder: "Enter your email",
  },
};

export const Search: Story = {
  args: {
    placeholder: "Search...",
  },
};