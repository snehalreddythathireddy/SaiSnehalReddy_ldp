import MuiTextField from "@mui/material/TextField";
import theme from "../../../theme/theme";

interface TextFieldProps {
  label: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as const,
    gap: theme.spacing.xs,
  },

  label: {
    fontFamily: theme.typography.label.fontFamily,
    fontSize: theme.typography.label.fontSize,
    fontWeight: theme.typography.label.fontWeight,
    lineHeight: theme.typography.label.lineHeight,
    color: theme.colors.textSecondary,
  },

  textField: {
    "& .MuiOutlinedInput-root": {
      height: theme.layout.inputHeight,
      borderRadius: theme.radius.xs,

      "& fieldset": {
        borderColor: theme.colors.border,
      },

      "&:hover fieldset": {
        borderColor: theme.colors.border,
      },

      "&.Mui-focused fieldset": {
        borderColor: theme.colors.primary,
      },
    },

    "& .MuiInputBase-input": {
      padding: "8px 12px",
      fontFamily: theme.typography.input.fontFamily,
      fontSize: theme.typography.input.fontSize,
      fontWeight: theme.typography.input.fontWeight,
      lineHeight: theme.typography.input.lineHeight,
      color: theme.colors.textPrimary,
    },

    "& .MuiInputBase-input::placeholder": {
      color: theme.colors.textSecondary,
      opacity: 1,
    },
  },
};

const TextField = ({
  label,
  type = "text",
  placeholder,
}: TextFieldProps) => {
  return (
    <div style={styles.container}>
      <label style={styles.label}>{label}</label>

      <MuiTextField
        fullWidth
        variant="outlined"
        type={type}
        placeholder={placeholder}
        sx={styles.textField}
      />
    </div>
  );
};

export default TextField;