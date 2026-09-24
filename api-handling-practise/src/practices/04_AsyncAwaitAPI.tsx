import { useState } from "react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const AsyncAwaitAPI = () => {
  const [users, setUsers] = useState<User[]>([]);

  const getUsers = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    console.log("Response:", response);

    const data: User[] = await response.json();

    console.log("API Data:", data);

    setUsers(data);
  };

  return (
    <div>
      <h1>Async Await API Practice</h1>

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

export default AsyncAwaitAPI;