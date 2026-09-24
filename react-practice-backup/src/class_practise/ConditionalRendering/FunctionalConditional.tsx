import { useState } from "react";

const FunctionalConditional = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h3>Functional Component</h3>

      <h4>
        {isLoggedIn ? "Welcome, Snehal!" : "Please Login"}
      </h4>

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default FunctionalConditional;