import type { Theme } from "@mui/material/styles";
import type { SystemStyleObject } from "@mui/system";
import { customShadows } from "../../../theme/theme";

const styles: Record<string, SystemStyleObject<Theme>> = {
  root: {
    width: 238,
    bgcolor: "background.paper",
    borderRadius: 2,
    p: 2,
    display: "flex",
    flexDirection: "column",
    boxShadow: customShadows.sidebar,
  },
  logo: {
    color: "primary.main",
    fontWeight: 700,
    mb: 3,
    ml: 1,
  },
  menu: {
    flex: 1,
  },
  menuItem: {
    borderRadius: 2,
    mb: 1,
    py: 1,
  },
  selectedItem: {
    bgcolor: "primary.light",
  },
  icon: {
    minWidth: 36,
  },
  text: {
    color: "text.primary",
  },
  selectedText: {
    color: "primary.main",
    fontWeight: 600,
  },
  footer: {
    pt: 2,
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
};

export default styles;