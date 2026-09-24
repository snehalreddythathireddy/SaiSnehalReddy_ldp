export interface User {
  id: string;
  name: string;
  email: string;
}

const API_URL = "http://localhost:3000/users";

export const getUsers = async (): Promise<User[]> => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return response.json();
};

export const createUser = async (
  user: Omit<User, "id">
): Promise<User> => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  });

  if (!response.ok) {
    throw new Error("Failed to create user");
  }

  return response.json();
};

export const deleteUser = async (
  id: string
): Promise<void> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });

  if (!response.ok) {
    throw new Error("Failed to delete user");
  }
};

export const updateUser = async (
  id: string,
  user: Partial<Omit<User, "id">>
): Promise<User> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  });

  if (!response.ok) {
    throw new Error("Failed to update user");
  }

  return response.json();
};