import MuiTypography from "@mui/material/Typography";
import type { TypographyProps as MuiTypographyProps } from "@mui/material/Typography";

type TypographyProps = MuiTypographyProps;

const Typography = ({
  children,
  variant = "body1",
  color = "text.primary",
  ...rest
}: TypographyProps) => {
  return (
    <MuiTypography variant={variant} color={color} {...rest}>
      {children}
    </MuiTypography>
  );
};

export default Typography;