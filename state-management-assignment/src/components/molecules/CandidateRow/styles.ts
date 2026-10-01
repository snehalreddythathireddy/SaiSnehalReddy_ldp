import type { SxProps, Theme } from "@mui/material/styles";

const styles: Record<string, Record<string, SxProps<Theme>>> = {
  status: {
    CLEAR: {
      bgcolor: "success.light",
      color: "success.main",
    },
    CONSIDER: {
      bgcolor: "warning.light",
      color: "warning.main",
    },
  },
};

export default styles;