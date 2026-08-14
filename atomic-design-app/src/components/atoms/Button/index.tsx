import MuiButton from "@mui/material/Button";
import type { ReactNode } from "react";
import type { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import type { SxProps, Theme } from "@mui/material/styles";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "contained" | "outlined" | "text";
  color?: MuiButtonProps["color"];
  fullWidth?: boolean;
  disabled?: boolean;
  startIcon?: ReactNode;
  sx?: SxProps<Theme>;
}

const Button = ({
  children,
  onClick,
  variant = "contained",
  color = "primary",
  fullWidth,
  disabled,
  startIcon,
  sx,
}: ButtonProps) => {
  return (
    <MuiButton
      variant={variant}
      color={color}
      onClick={onClick}
      fullWidth={fullWidth}
      disabled={disabled}
      startIcon={startIcon}
      sx={sx}
    >
      {children}
    </MuiButton>
  );
};

export default Button;