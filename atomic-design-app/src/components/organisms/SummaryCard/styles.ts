import type { SxProps, Theme } from "@mui/material/styles";

const styles: Record<string, SxProps<Theme>> = {
  card: { p: 2.5, flex: "1 1 35%", minWidth: 280, height: "fit-content" },
  header: { alignItems: "center", mb: 2 },
  sliderWrapper: { my: 2.5 },
  totalRow: { justifyContent: "space-between", alignItems: "center", mb: 2.5 },
  summaryRow: { justifyContent: "space-between", mb: 1.75 },
};

export default styles;