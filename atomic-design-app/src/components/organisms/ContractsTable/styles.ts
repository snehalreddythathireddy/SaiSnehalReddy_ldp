import type { SxProps, Theme } from "@mui/material/styles";

const styles: Record<string, SxProps<Theme>> = {
  card: { p: 2.5, flex: "1 1 60%", overflowX: "auto" },
  header: { alignItems: "center", mb: 2 },
  table: { minWidth: 560 },
};

export default styles;