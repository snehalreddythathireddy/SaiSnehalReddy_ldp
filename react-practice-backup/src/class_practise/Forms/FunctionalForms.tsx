import { useState } from "react";

const FunctionalForm = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <h3>Functional Component</h3>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Name: {name}</p>
    </div>
  );
};

export default FunctionalForm;