import axios from "axios";

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getPosts = async () => {
  const response = await api.get<Post[]>("/posts");

  return response.data;
};

export const getPost = async (id: number) => {
  const response = await api.get<Post>(`/posts/${id}`);

  return response.data;
};

export const createPost = async (
  title: string,
  body: string,
  userId: number
) => {
  const response = await api.post<Post>("/posts", {
    title,
    body,
    userId,
  });

  return response.data;
};

export const updatePost = async (
  id: number,
  title: string,
  body: string,
  userId: number
) => {
  const response = await api.put<Post>(`/posts/${id}`, {
    id,
    title,
    body,
    userId,
  });

  return response.data;
};

export const deletePost = async (id: number) => {
  await api.delete(`/posts/${id}`);
};