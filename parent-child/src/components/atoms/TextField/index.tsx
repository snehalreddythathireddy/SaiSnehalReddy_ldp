import { useId } from "react";
import MuiTextField from "@mui/material/TextField";
import type { ChangeEvent, CSSProperties } from "react";
import type { SxProps, Theme } from "@mui/material/styles";

interface TextFieldProps {
  label: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  containerStyle?: CSSProperties;
  labelStyle?: CSSProperties;
  textFieldSx?: SxProps<Theme>;
}

const TextField = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  containerStyle,
  labelStyle,
  textFieldSx,
}: TextFieldProps) => {
  const id = useId();

  return (
    <div style={containerStyle}>
      <label htmlFor={id} style={labelStyle}>
        {label}
      </label>

      <MuiTextField
        id={id}
        fullWidth
        variant="outlined"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        sx={textFieldSx}
      />
    </div>
  );
};

export default TextField;