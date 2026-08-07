import MuiButton from "@mui/material/Button";
import type { ReactNode } from "react";
import type { SxProps, Theme } from "@mui/material/styles";

interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  sx?: SxProps<Theme>;
  startIcon?: ReactNode;
}

const Button = ({
  label,
  variant = "primary",
  type = "button",
  disabled = false,
  fullWidth = true,
  onClick,
  sx,
  startIcon,
}: ButtonProps) => {
  return (
    <MuiButton
      type={type}
      variant={variant === "primary" ? "contained" : "outlined"}
      disabled={disabled}
      fullWidth={fullWidth}
      onClick={onClick}
      startIcon={startIcon}
      sx={sx}
    >
      {label}
    </MuiButton>
  );
};

export default Button;