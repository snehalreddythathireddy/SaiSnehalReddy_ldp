import { useState } from "react";

const CounterControls = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter Controls</h2>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default CounterControls;