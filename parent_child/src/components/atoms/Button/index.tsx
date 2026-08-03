import MuiButton from "@mui/material/Button";
import theme from "../../../theme/theme";

interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
}

const styles = {
  base: {
    height: theme.layout.buttonHeight,
    borderRadius: theme.radius.xs,
    textTransform: "none" as const,
    boxShadow: "none",

    fontFamily: theme.typography.button.fontFamily,
    fontSize: theme.typography.button.fontSize,
    fontWeight: theme.typography.button.fontWeight,
    lineHeight: theme.typography.button.lineHeight,
    letterSpacing: theme.typography.button.letterSpacing,

    "&:hover": {
      boxShadow: "none",
    },
  },

  primary: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,

    "&:hover": {
      backgroundColor: theme.colors.primary,
    },

    "&.Mui-disabled": {
      backgroundColor: theme.colors.primaryDisabled,
      color: theme.colors.white,
    },
  },

  secondary: {
    backgroundColor: theme.colors.white,
    color: theme.colors.textPrimary,
    border: `1px solid ${theme.colors.border}`,

    "&:hover": {
      backgroundColor: theme.colors.white,
      borderColor: theme.colors.border,
    },
  },
};

const Button = ({
  label,
  variant = "primary",
  type = "button",
  disabled = false,
  fullWidth = true,
  onClick,
}: ButtonProps) => {
  return (
    <MuiButton
      type={type}
      variant={variant === "primary" ? "contained" : "outlined"}
      disabled={disabled}
      fullWidth={fullWidth}
      onClick={onClick}
      sx={{
        ...styles.base,
        ...(variant === "primary"
          ? styles.primary
          : styles.secondary),
      }}
    >
      {label}
    </MuiButton>
  );
};

export default Button;