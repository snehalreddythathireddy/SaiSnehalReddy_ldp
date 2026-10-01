import type { SxProps, Theme } from "@mui/material/styles";

const styles: Record<string, SxProps<Theme>> = {
  root: {
    mt: 2,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  left: {
    display: "flex",
    alignItems: "center",
    gap: 2,
  },
  right: {
    display: "flex",
    alignItems: "center",
    gap: 1,
  },
  activePage: {
    bgcolor: "primary.light",
    color: "primary.main",
    px: 1,
    py: 0.5,
    borderRadius: 1,
  },
};

export default styles;