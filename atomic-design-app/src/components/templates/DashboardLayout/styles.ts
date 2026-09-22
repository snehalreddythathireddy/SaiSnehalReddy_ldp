import type { SxProps, Theme } from "@mui/material/styles";

const styles: Record<string, SxProps<Theme>> = {
  root: { minHeight: "100vh", bgcolor: "background.default" },
  content: { flex: 1, p: 4, minWidth: 0 },
};

export default styles;