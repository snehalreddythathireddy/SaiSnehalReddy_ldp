import MuiCheckbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import theme from "../../../theme/theme";

interface CheckboxProps {
  label: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const styles = {
  checkbox: {
    padding: 0,

    "& .MuiSvgIcon-root": {
      fontSize: 18,
    },

    color: theme.colors.border,

    "&.Mui-checked": {
      color: theme.colors.primary,
    },

    "&.Mui-disabled": {
      color: theme.colors.primaryDisabled,
    },
  },

  formControl: {
    margin: 0,

    "& .MuiFormControlLabel-label": {
      marginLeft: theme.spacing.sm,

      fontFamily: theme.typography.body.fontFamily,
      fontSize: theme.typography.body.fontSize,
      fontWeight: theme.typography.body.fontWeight,
      lineHeight: theme.typography.body.lineHeight,
      letterSpacing: theme.typography.body.letterSpacing,

      color: theme.colors.textSecondary,
    },
  },
};

const Checkbox = ({
  label,
  checked,
  disabled = false,
  onChange,
}: CheckboxProps) => {
  return (
    <FormControlLabel
      sx={styles.formControl}
      label={label}
      control={
        <MuiCheckbox
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          disableRipple
          sx={styles.checkbox}
        />
      }
    />
  );
};

export default Checkbox;