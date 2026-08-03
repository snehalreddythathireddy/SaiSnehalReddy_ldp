import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { fn } from "storybook/test";
import SearchForm from "./index";

const meta: Meta<typeof SearchForm> = {
  title: "Molecules/SearchForm",
  component: SearchForm,

  // Actions Addon
  args: {
    onSearch: fn(),
    onInputChange: fn(),
  },

  // Controls
  argTypes: {
    placeholder: {
      control: "text",
      description: "Input placeholder",
    },
    buttonLabel: {
      control: "text",
      description: "Button label",
    },
  },
};

export default meta;

type Story = StoryObj<typeof SearchForm>;

export const Default: Story = {
  args: {
    placeholder: "Search...",
    buttonLabel: "Search",
  },
};

export const ProductSearch: Story = {
  args: {
    placeholder: "Search products",
    buttonLabel: "Find",
  },
};

export const UserSearch: Story = {
  args: {
    placeholder: "Search users",
    buttonLabel: "Go",
  },
};