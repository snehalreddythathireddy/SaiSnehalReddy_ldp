import type { SxProps, Theme } from "@mui/material/styles";

const styles: Record<string, SxProps<Theme>> = {
  avatarTrigger: { cursor: "pointer" },
  profileHeader: { alignItems: "center" },
  navItem: {
    justifyContent: "flex-start",
    typography: "button2",
    height: "auto",
    py: 1.5,
    px: 0,
    color: "text.secondary",
  },
  logoutItem: {
    justifyContent: "flex-start",
    typography: "button2",
    height: "auto",
    py: 1.5,
    px: 0,
    color: "warning.main",
  },
};

export default styles;