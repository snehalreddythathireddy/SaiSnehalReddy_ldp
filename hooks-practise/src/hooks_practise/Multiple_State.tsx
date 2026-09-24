import { useState } from "react";

const MultipleStates = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  return (
    <div>
      <h1>Multiple States</h1>

      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />

      <br />
      <br />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <hr />

      <h2>First Name: {firstName}</h2>
      <h2>Last Name: {lastName}</h2>
      <h2>Email: {email}</h2>
    </div>
  );
};

export default MultipleStates;