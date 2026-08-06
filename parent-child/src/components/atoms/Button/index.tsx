import MuiButton from "@mui/material/Button";
import type { SxProps, Theme } from "@mui/material/styles";

interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  sx?: SxProps<Theme>;
}

const Button = ({
  label,
  variant = "primary",
  type = "button",
  disabled = false,
  fullWidth = true,
  onClick,
  sx,
}: ButtonProps) => {
  return (
    <MuiButton
      type={type}
      variant={variant === "primary" ? "contained" : "outlined"}
      disabled={disabled}
      fullWidth={fullWidth}
      onClick={onClick}
      sx={sx}
    >
      {label}
    </MuiButton>
  );
};

export default Button;
