import { useState } from "react";
import { createUser, type User } from "../api/userApi";

interface UserFormProps {
  onUserCreated: (user: User) => void;
}

const UserForm=({ onUserCreated }: UserFormProps) =>{
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (!name.trim() || !email.trim()) {
      setError("Name and email are required");
      return;
    }

    try {
      setError("");

      const newUser = await createUser({
        name,
        email
      });

      setName("");
      setEmail("");

      onUserCreated(newUser);
    } catch {
      setError("Failed to create user");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create User</h2>

      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) =>
            setName(event.target.value)
          }
        />
      </div>

      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) =>
            setEmail(event.target.value)
          }
        />
      </div>

      <button type="submit">
        Add User
      </button>

      {error && <p>{error}</p>}
    </form>
  );
}

export default UserForm;