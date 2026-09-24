import MuiCheckbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import type { SxProps, Theme } from "@mui/material/styles";

interface CheckboxProps {
  label: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checkboxSx?: SxProps<Theme>;
  formControlSx?: SxProps<Theme>;
}

const Checkbox = ({
  label,
  checked,
  disabled = false,
  onChange,
  checkboxSx,
  formControlSx,
}: CheckboxProps) => {
  return (
    <FormControlLabel
      sx={formControlSx}
      label={label}
      control={
        <MuiCheckbox
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          disableRipple
          sx={checkboxSx}
        />
      }
    />
  );
};

export default Checkbox;
