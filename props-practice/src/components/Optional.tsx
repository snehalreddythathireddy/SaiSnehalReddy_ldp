interface OptionalProps {
  label: string;
  color?: string;
}

const Buttons = ({ label, color }: OptionalProps) => {
  return (
    <div>
      <button
        style={{
          backgroundColor: color,
          color: "white",
          padding: "10px",
        }}
      >
        {label}
      </button>
    </div>
  );
};

export default Buttons;