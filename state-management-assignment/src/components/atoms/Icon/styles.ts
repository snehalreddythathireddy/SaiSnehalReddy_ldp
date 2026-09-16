import type { SxProps, Theme } from "@mui/material/styles";

const styles = {
  icon: (width: number, height: number): SxProps<Theme> => ({
    width,
    height,
    display: "block",
  }),
};

export default styles;