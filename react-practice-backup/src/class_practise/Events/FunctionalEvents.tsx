import { useState } from "react";

const FunctionalEvents = () => {
  const [message, setMessage] = useState("Click the button");

  const handleClick = () => {
    setMessage("Button Clicked!");
  };

  return (
    <div>
      <h3>Functional Component</h3>

      <p>{message}</p>

      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default FunctionalEvents;