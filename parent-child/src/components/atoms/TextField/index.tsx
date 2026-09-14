import MuiTextField from "@mui/material/TextField";
import type { CSSProperties } from "react";
import type { SxProps, Theme } from "@mui/material/styles";

interface TextFieldProps {
  label: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  containerStyle?: CSSProperties;
  labelStyle?: CSSProperties;
  textFieldSx?: SxProps<Theme>;
}

const TextField = ({
  label,
  type = "text",
  placeholder,
  containerStyle,
  labelStyle,
  textFieldSx,
}: TextFieldProps) => {
  return (
    <div style={containerStyle}>
      <label style={labelStyle}>{label}</label>

      <MuiTextField
        fullWidth
        variant="outlined"
        type={type}
        placeholder={placeholder}
        sx={textFieldSx}
      />
    </div>
  );
};

export default TextField;
