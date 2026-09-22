import type { SxProps, Theme } from "@mui/material/styles";

const styles: Record<string, SxProps<Theme>> = {
  root: {
    width: 253,
    bgcolor: "background.paper",
    border: "1px solid",
    borderColor: "divider",
    p: 2,
  },
  sectionLabel: {
    mb: 1.5,
  },
  optionRow: {
    display: "flex",
    alignItems: "center",
    gap: 1,
    height: 24,
  },
  divider: {
    my: 2,
  },
};

export default styles;