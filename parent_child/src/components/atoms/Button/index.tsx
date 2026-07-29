interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

const styles = {
  button: {
    width: '100%',
    padding: '10px',
    borderRadius: '6px',
    fontWeight: 500,
    fontSize: '14px',
    cursor: 'pointer',
  },
  primary: {
    backgroundColor: '#6366F1',
    color: '#fff',
    border: 'none',
  },
  secondary: {
    backgroundColor: '#fff',
    color: '#111827',
    border: '1px solid #E5E7EB',
  },
  disabled: {
    backgroundColor: '#C7C7F5',
    color: '#fff',
    border: 'none',
    cursor: 'not-allowed',
  },
};

const Button = ({ label, onClick, variant = 'primary', disabled = false }: ButtonProps) => {
  const variantStyle = disabled
    ? styles.disabled
    : variant === 'primary'
    ? styles.primary
    : styles.secondary;

  return (
    <button onClick={onClick} disabled={disabled} style={{ ...styles.button, ...variantStyle }}>
      {label}
    </button>
  );
};

export default Button;