import type { Meta, StoryObj } from "@storybook/react";
import Sidebar from "./index";

const meta: Meta<typeof Sidebar> = {
  title: "Organisms/Sidebar",
  component: Sidebar,
};
export default meta;

type Story = StoryObj<typeof Sidebar>;

export const CashAcceleration: Story = {
  args: { active: "cash", onNavigate: () => {}, onWatchHowTo: () => alert("Watch how to") },
};

export const Home: Story = {
  args: { active: "home", onNavigate: () => {} },
};
