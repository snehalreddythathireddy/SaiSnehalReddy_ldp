import { useEffect, useState } from "react";

const BooleanState = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Runs only once when the component mounts
  useEffect(() => {
    console.log("BooleanState component mounted");
  }, []);

  // Runs whenever the theme changes
  useEffect(() => {
    console.log("Theme changed:", isDarkMode ? "Dark" : "Light");

    // Change browser tab title
    document.title = isDarkMode ? "Dark Mode" : "Light Mode";

    // Change page background and text color
    document.body.style.backgroundColor = isDarkMode ? "#222" : "#fff";
    document.body.style.color = isDarkMode ? "#fff" : "#000";
  }, [isDarkMode]);

  // Cleanup function
  useEffect(() => {
    return () => {
      console.log("BooleanState component unmounted");

      // Reset background when component is removed
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#000";
    };
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Boolean State</h1>

      <h2>Current Theme: {isDarkMode ? "Dark" : "Light"}</h2>

      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
};

export default BooleanState;