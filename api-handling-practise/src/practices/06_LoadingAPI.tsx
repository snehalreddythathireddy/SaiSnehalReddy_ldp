import { useState } from "react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const LoadingAPI = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getUsers = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const data: User[] = await response.json();

      setUsers(data);
    } catch (error) {
      console.log("API Error:", error);
      setError("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Loading API Practice</h1>

      <button onClick={getUsers}>Get Users</button>

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {!loading &&
        !error &&
        users.map((user) => (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        ))}
    </div>
  );
};

export default LoadingAPI;