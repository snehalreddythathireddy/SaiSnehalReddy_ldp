import Box from "@mui/material/Box";
import type { SxProps, Theme } from "@mui/material/styles";

import styles from "./styles";

interface IconProps {
  src: string;
  alt?: string;
  size?: number;
  sx?: SxProps<Theme>;
}

const Icon = ({ src, alt = "", size = 18, sx }: IconProps) => {
  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={[styles.icon(size), ...(Array.isArray(sx) ? sx : sx ? [sx] : [])]}
    />
  );
};

export default Icon;