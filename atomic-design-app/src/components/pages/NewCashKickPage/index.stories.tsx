import type { Meta, StoryObj } from "@storybook/react";
import Box from "@mui/material/Box";
import DashboardLayout from "./index";
import Sidebar from "../../organisms/Sidebar";

const meta: Meta<typeof DashboardLayout> = {
  title: "Templates/DashboardLayout",
  component: DashboardLayout,
};
export default meta;

type Story = StoryObj<typeof DashboardLayout>;

export const Default: Story = {
  args: {
    sidebar: <Sidebar active="cash" onNavigate={() => {}} />,
    children: <Box sx={{ color: "text.primary" }}>Page content goes here</Box>,
  },
};
