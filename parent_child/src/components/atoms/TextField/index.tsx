interface TextFieldProps {
  label: string;
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const styles = {
  wrapper: {
    marginBottom: '16px',
  },
  label: {
    display: 'block',
    marginBottom: '4px',
    color: '#111827',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #E5E7EB',
    borderRadius: '6px',
    color: '#111827',
    outline: 'none',
  },
};

const TextField = ({ label, type = 'text', placeholder, value, onChange }: TextFieldProps) => {
  return (
    <div style={styles.wrapper}>
      <label style={styles.label}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={styles.input}
      />
    </div>
  );
};

export default TextField;