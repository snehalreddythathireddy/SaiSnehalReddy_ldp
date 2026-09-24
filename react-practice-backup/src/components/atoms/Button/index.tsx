interface ButtonProps {
  label: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({
  label,
  disabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;