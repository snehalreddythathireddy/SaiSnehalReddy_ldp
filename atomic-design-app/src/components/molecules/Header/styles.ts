import type { SxProps, Theme } from "@mui/material/styles";

const styles: Record<string, SxProps<Theme>> = {
  root: { justifyContent: "space-between", alignItems: "flex-start", mb: 3 },
  subtitle: { mt: 0.75 },
  backLink: { alignItems: "center", mt: 2, cursor: "pointer", width: "fit-content" },
};

export default styles;