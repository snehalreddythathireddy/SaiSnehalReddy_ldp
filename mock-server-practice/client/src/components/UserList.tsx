import { useState } from "react";
import type { User } from "../api/userApi";

interface UserListProps {
  users: User[];
  onDelete: (id: string) => void;
  onUpdate: (
    id: string,
    name: string,
    email: string
  ) => void;
}

const UserList=({
  users,
  onDelete,
  onUpdate
}: UserListProps) =>{
  const [editingId, setEditingId] =
    useState<string | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleEdit = (user: User) => {
    setEditingId(user.id);
    setName(user.name);
    setEmail(user.email);
  };

  const handleUpdate = () => {
    if (!editingId) {
      return;
    }

    if (!name.trim() || !email.trim()) {
      return;
    }

    onUpdate(editingId, name, email);

    setEditingId(null);
    setName("");
    setEmail("");
  };

  const handleCancel = () => {
    setEditingId(null);
    setName("");
    setEmail("");
  };

  return (
    <div>
      <h2>Users</h2>

      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        users.map((user) => (
          <div key={user.id}>
            {editingId === user.id ? (
              <div>
                <input
                  type="text"
                  value={name}
                  onChange={(event) =>
                    setName(event.target.value)
                  }
                />

                <input
                  type="email"
                  value={email}
                  onChange={(event) =>
                    setEmail(event.target.value)
                  }
                />

                <button onClick={handleUpdate}>
                  Save
                </button>

                <button onClick={handleCancel}>
                  Cancel
                </button>
              </div>
            ) : (
              <div>
                <h3>{user.name}</h3>

                <p>{user.email}</p>

                <button
                  onClick={() => handleEdit(user)}
                >
                  Edit
                </button>

                <button
                  onClick={() => onDelete(user.id)}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default UserList;