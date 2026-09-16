import type { Theme } from "@mui/material/styles";

const styles = {
  root: (active?: boolean) => (theme: Theme) => ({
    px: 1.5,
    py: 1.25,
    borderRadius: 3,
    cursor: "pointer",
    alignItems: "center",
    bgcolor: active ? theme.palette.primary.main + "26" : "transparent",
  }),
};

export default styles;