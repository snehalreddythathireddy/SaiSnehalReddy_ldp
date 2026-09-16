import MuiCheckbox from "@mui/material/Checkbox";

interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
}

const Checkbox = ({
  checked,
  onChange,
}: CheckboxProps) => {
  return (
    <MuiCheckbox
      checked={checked}
      onChange={onChange}
    />
  );
};

export default Checkbox;