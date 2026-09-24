import {
  memo,
  useCallback,
  useState,
} from "react";

const Child = memo(
  ({ onClick }: { onClick: () => void }) => {
    console.log("Child rendered");

    return (
      <button onClick={onClick}>
        Child Button
      </button>
    );
  }
);

function CallbackDemo() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Child button clicked");
  }, []);

  return (
    <div>
      <h2>useCallback Demo</h2>

      <p>Count: {count}</p>

      <button
        onClick={() =>
          setCount((prev) => prev + 1)
        }
      >
        Increment
      </button>

      <Child onClick={handleClick} />
    </div>
  );
}

export default CallbackDemo;