interface ButtonExampleProps {
  label: string;
}

const ButtonExample = ({ label }: ButtonExampleProps) => {
  return (
    <div>
      <h2>Button Example</h2>
      <button>{label}</button>
    </div>
  );
};

export default ButtonExample;