import { useEffect, useState } from "react";

const AsyncMessage = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("Data loaded");
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h2>Async Example</h2>

      {message && <p>{message}</p>}
    </div>
  );
};

export default AsyncMessage;