import MuiCheckbox from "@mui/material/Checkbox";
import type { SxProps, Theme } from "@mui/material/styles";
import type { ChangeEvent } from "react";

interface CheckBoxProps {
  checked: boolean;
  indeterminate?: boolean;
  onChange: (checked: boolean) => void;
  sx?: SxProps<Theme>;
}

const CheckBox = ({ checked, indeterminate, onChange, sx }: CheckBoxProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <MuiCheckbox
      checked={checked}
      indeterminate={indeterminate}
      onChange={handleChange}
      sx={sx}
    />
  );
};

export default CheckBox;