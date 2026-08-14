import type { Meta, StoryObj } from "@storybook/react";
import UserProfile from "./index";

const meta: Meta<typeof UserProfile> = {
  title: "Molecules/UserProfile",
  component: UserProfile,
  parameters: {
    docs: {
      description: {
        component: "Click the avatar to open the profile popover (Kane Cooper card).",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof UserProfile>;

export const Default: Story = { args: { name: "Kane Cooper" } };
