import { useEffect, useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import {
  getUsers,
  deleteUser,
  updateUser,
  type User
} from "./api/userApi";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setError("");

        const data = await getUsers();

        setUsers(data);
      } catch {
        setError("Failed to fetch users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleUserCreated = (newUser: User) => {
    setUsers((previousUsers) => [
      ...previousUsers,
      newUser
    ]);
  };

  const handleDelete = async (id: string) => {
    try {
      setError("");

      await deleteUser(id);

      setUsers((previousUsers) =>
        previousUsers.filter(
          (user) => user.id !== id
        )
      );
    } catch {
      setError("Failed to delete user");
    }
  };

  const handleUpdate = async (
    id: string,
    name: string,
    email: string
  ) => {
    try {
      setError("");

      const updatedUser = await updateUser(id, {
        name,
        email
      });

      setUsers((previousUsers) =>
        previousUsers.map((user) =>
          user.id === id ? updatedUser : user
        )
      );
    } catch {
      setError("Failed to update user");
    }
  };

  if (loading) {
    return <p>Loading users...</p>;
  }

  return (
    <div>
      <h1>Mock Server Practice</h1>

      {error && <p>{error}</p>}

      <UserForm
        onUserCreated={handleUserCreated}
      />

      <UserList
        users={users}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
      />
    </div>
  );
}

export default App;