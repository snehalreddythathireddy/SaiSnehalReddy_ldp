import { useState } from "react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const ThenCatchAPI = () => {
  const [users, setUsers] = useState<User[]>([]);

  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log("Step 1 - Response:", response);

        return response.json();
      })
      .then((data: User[]) => {
        console.log("Step 2 - Data:", data);

        setUsers(data);
      })
      .catch((error) => {
        console.log("API Error:", error);
      });
  };

  return (
    <div>
      <h1>Then and Catch API Practice</h1>

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

export default ThenCatchAPI;