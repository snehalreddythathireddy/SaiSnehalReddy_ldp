import { useState } from "react";

const FunctionalState = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Functional Component</h3>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};

export default FunctionalState;