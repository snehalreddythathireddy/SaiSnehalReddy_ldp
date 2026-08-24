import { useMemo, useState } from "react";
import { calculateFactorial } from "../utils/expensiveCalculation";

function MemoDemo() {
  const [number, setNumber] = useState(5);
  const [name, setName] = useState("");

  const factorial = useMemo(() => {
    return calculateFactorial(number);
  }, [number]);

  return (
    <div>
      <h2>useMemo Demo</h2>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <br />

      <button
        onClick={() =>
          setNumber((prev) => prev + 1)
        }
      >
        Increment Number
      </button>

      <h3>Number: {number}</h3>

      <h3>Factorial: {factorial}</h3>
    </div>
  );
}

export default MemoDemo;