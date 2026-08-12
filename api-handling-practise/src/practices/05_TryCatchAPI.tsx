import { useState } from "react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const TryCatchAPI = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  const getUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const data: User[] = await response.json();

      setUsers(data);
    } catch (error) {
      console.log("API Error:", error);
      setError("Failed to fetch users");
    }
  };

  return (
    <div>
      <h1>Try Catch API Practice</h1>

      <button onClick={getUsers}>Get Users</button>

      {error && <p>{error}</p>}

      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default TryCatchAPI;