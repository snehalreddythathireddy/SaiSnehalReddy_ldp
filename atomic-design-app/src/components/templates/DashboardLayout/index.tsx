import Stack from "@mui/material/Stack";
import type { ReactNode } from "react";

import styles from "./styles";

interface DashboardLayoutProps {
  sidebar: ReactNode;
  children: ReactNode;
}

const DashboardLayout = ({ sidebar, children }: DashboardLayoutProps) => {
  return (
    <Stack direction="row" sx={styles.root}>
      {sidebar}
      <Stack sx={styles.content}>{children}</Stack>
    </Stack>
  );
};

export default DashboardLayout;