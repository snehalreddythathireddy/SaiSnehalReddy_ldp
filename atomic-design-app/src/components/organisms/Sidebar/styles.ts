import type { SxProps, Theme } from "@mui/material/styles";

const styles: Record<string, SxProps<Theme>> = {
  root: {
    width: 220,
    flexShrink: 0,
    bgcolor: "background.paper",
    borderRight: "1px solid",
    borderColor: "divider",
    p: 2.5,
    height: "100vh",
  },
  logoRow: { alignItems: "center", mb: 4 },
  footer: { mt: "auto", pt: 2 },
  footerLink: { cursor: "pointer" },
};

export default styles;