import MuiTextField from "@mui/material/TextField";

interface TextFieldProps {
  value?: string;
  placeholder?: string;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

const TextField = ({
  value,
  placeholder,
  onChange,
}: TextFieldProps) => {
  return (
    <MuiTextField
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default TextField;