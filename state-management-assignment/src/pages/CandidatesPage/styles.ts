import type { SxProps, Theme } from "@mui/material/styles";

const styles: Record<string, SxProps<Theme>> = {
  page: {
    display: "flex",
    minHeight: "100vh",
    bgcolor: "background.default",
  },
  content: {
    flex: 1,
    p: 4,
  },
  card: {
    mt: 3,
    bgcolor: "background.paper",
    borderRadius: 2,
    p: 3,
    position: "relative",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    mb: 3,
  },
  filter: {
    position: "absolute",
    top: 90,
    right: 20,
    zIndex: 10,
  },
};

export default styles;