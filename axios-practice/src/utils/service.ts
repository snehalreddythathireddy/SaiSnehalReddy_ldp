import axios from "axios";

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    console.log("Request sent:", config.url);

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log("Response received:", response.data);

    return response;
  },
  (error) => {
    console.log("Response error:", error);

    return Promise.reject(error);
  }
);

export const getPosts = async () => {
  const response = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return response.data;
};

export const createPost = async (
  title: string,
  body: string,
  userId: number
) => {
  const response = await axios.post<Post>(
    "https://jsonplaceholder.typicode.com/posts",
    {
      title,
      body,
      userId,
    }
  );

  return response.data;
};

export const updatePost = async (
  id: number,
  title: string,
  body: string,
  userId: number
) => {
  const response = await axios.put<Post>(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      id,
      title,
      body,
      userId,
    }
  );

  return response.data;
};

export const patchPost = async (id: number, title: string) => {
  const response = await axios.patch<Post>(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      title,
    }
  );

  return response.data;
};

export const deletePost = async (id: number) => {
  await axios.delete(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
};

export const getPostsByUser = async (userId: string) => {
  const response = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts",
    {
      params: {
        userId,
      },
    }
  );

  return response.data;
};

export const getPostWithHeaders = async () => {
  const response = await axios.get<Post>(
    "https://jsonplaceholder.typicode.com/posts/1",
    {
      headers: {
        Authorization: "Bearer my-token",
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
};

export const getPostById = async (id: number) => {
  const response = await api.get<Post>(`/posts/${id}`);

  return response.data;
};

export const getPostWithInterceptor = async (id: number) => {
  const response = await api.get<Post>(`/posts/${id}`);

  return response.data;
};