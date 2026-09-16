import MuiDivider from "@mui/material/Divider";
import type { SxProps, Theme } from "@mui/material/styles";

import styles from "./styles";

interface DividerProps {
  spacing?: number;
  sx?: SxProps<Theme>;
}

const Divider = ({ spacing = 2, sx }: DividerProps) => {
  return (
    <MuiDivider
      sx={[styles.divider(spacing), ...(Array.isArray(sx) ? sx : sx ? [sx] : [])]}
    />
  );
};

export default Divider;