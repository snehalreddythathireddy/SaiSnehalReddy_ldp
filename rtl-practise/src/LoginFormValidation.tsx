import { useState } from "react";

const LoginFormValidation = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email || !password) {
      setError("Email and password are required");
      setSuccess(false);
      return;
    }

    setError("");
    setSuccess(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <label htmlFor="login-email">Email</label>
      <input
        id="login-email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <label htmlFor="login-password">Password</label>
      <input
        id="login-password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <button type="submit">Login</button>

      {error && <p>{error}</p>}

      {success && <p>Login successful</p>}
    </form>
  );
};

export default LoginFormValidation;