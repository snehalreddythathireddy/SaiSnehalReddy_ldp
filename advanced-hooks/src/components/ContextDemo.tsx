import { useTheme } from "../hooks/useTheme";

function ContextDemo() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <h2>useContext Demo</h2>

      <h3>Current Theme: {theme}</h3>

      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
}

export default ContextDemo;