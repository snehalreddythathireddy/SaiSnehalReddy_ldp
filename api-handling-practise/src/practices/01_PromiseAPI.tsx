import { useState } from "react";

const PromiseAPI = () => {
  const [result, setResult] = useState("");

  const getUsers = () => {
    const promise = fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    console.log("Fetch result:", promise);

    setResult("API request sent");
  };

  return (
    <div>
      <h1>Practice 1 - Fetch and Promise</h1>

      <button onClick={getUsers}>Get Users</button>

      <p>{result}</p>
    </div>
  );
};

export default PromiseAPI;