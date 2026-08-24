import { useState } from "react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const PromiseChainingAPI = () => {
  const [users, setUsers] = useState<User[]>([]);

  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log("1. Fetch response:", response);

        return response.json();
      })
      .then((data: User[]) => {
        console.log("2. JSON data:", data);

        return data;
      })
      .then((data) => {
        console.log("3. Final data:", data);

        setUsers(data);
      })
      .catch((error) => {
        console.log("API Error:", error);
      });
  };

  return (
    <div>
      <h1>Promise Chaining API Practice</h1>

      <button onClick={getUsers}>Get Users</button>

      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default PromiseChainingAPI;