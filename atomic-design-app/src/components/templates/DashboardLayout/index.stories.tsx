import type { Meta, StoryObj } from "@storybook/react";
import Box from "@mui/material/Box";
import type { SxProps, Theme } from "@mui/material/styles";

import DashboardLayout from "./index";
import Sidebar from "../../organisms/Sidebar";

const storyStyles: Record<string, SxProps<Theme>> = {
  content: { color: "text.primary" },
};

const noop = () => {};

const meta: Meta<typeof DashboardLayout> = {
  title: "Templates/DashboardLayout",
  component: DashboardLayout,
};
export default meta;

type Story = StoryObj<typeof DashboardLayout>;

export const Default: Story = {
  args: {
    sidebar: <Sidebar active="cash" onNavigate={noop} />,
    children: <Box sx={storyStyles.content}>Page content goes here</Box>,
  },
};