import type { CSSProperties } from 'react';

interface CheckboxProps {
  label?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: CSSProperties;
}

const Checkbox = ({ label, checked, onChange, style }: CheckboxProps) => {
  return (
    <label style={style}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      {label}
    </label>
  );
};

export default Checkbox;