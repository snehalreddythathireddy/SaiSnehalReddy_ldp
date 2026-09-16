import MuiTypography from "@mui/material/Typography";
import type { ReactNode } from "react";
import type { SxProps, Theme } from "@mui/material/styles";

interface TypographyProps {
  children: ReactNode;
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption";

  color?: string;
  sx?: SxProps<Theme>;
}

const Typography = ({
  children,
  variant = "body1",
  color,
  sx,
}: TypographyProps) => {
  return (
    <MuiTypography variant={variant} color={color} sx={sx}>
      {children}
    </MuiTypography>
  );
};

export default Typography;