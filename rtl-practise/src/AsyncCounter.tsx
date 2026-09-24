import { useState } from "react";

const AsyncCounter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setTimeout(() => {
      setCount(1);
    }, 500);
  };

  return (
    <div>
      <h2>Async Counter</h2>

      <p>Count: {count}</p>

      <button onClick={handleIncrement}>
        Increment
      </button>
    </div>
  );
};

export default AsyncCounter;