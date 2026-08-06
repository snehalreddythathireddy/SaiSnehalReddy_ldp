import type { CSSProperties } from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  style?: CSSProperties;
}

const Button = ({ label, onClick, disabled = false, style }: ButtonProps) => {
  return (
    <button onClick={onClick} disabled={disabled} style={style}>
      {label}
    </button>
  );
};

export default Button;