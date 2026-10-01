import MuiButton from "@mui/material/Button";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "contained" | "outlined" | "text";
}

const Button = ({
  children,
  onClick,
  variant,
}: ButtonProps) => {
  return (
    <MuiButton
      variant={variant}
      onClick={onClick}
    >
      {children}
    </MuiButton>
  );
};
export default Button;

