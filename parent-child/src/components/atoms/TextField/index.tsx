import type { CSSProperties } from 'react';

interface TextFieldProps {
  label: string;
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  wrapperStyle?: CSSProperties;
  labelStyle?: CSSProperties;
  inputStyle?: CSSProperties;
}

const TextField = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  wrapperStyle,
  labelStyle,
  inputStyle,
}: TextFieldProps) => {
  return (
    <div style={wrapperStyle}>
      <label style={labelStyle}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={inputStyle}
      />
    </div>
  );
};

export default TextField;