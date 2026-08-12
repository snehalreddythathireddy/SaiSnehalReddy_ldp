export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface PostData {
  title: string;
  body: string;
  userId: number;
}

export interface PostResponse extends PostData {
  id: number;
}

export interface UpdatePostData {
  title: string;
  body: string;
}

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export const getUsers = async (): Promise<User[]> => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  const data: User[] = await response.json();

  return data;
};

export const createPost = async (
  postData: PostData
): Promise<PostResponse> => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to create post");
  }

  const data: PostResponse = await response.json();

  return data;
};

export const updatePost = async (
  id: number,
  postData: UpdatePostData
): Promise<PostResponse> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to update post");
  }

  const data: PostResponse = await response.json();

  return data;
};

export const deletePost = async (id: number): Promise<void> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      method: "DELETE",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to delete post");
  }
};

export const getPosts = async (): Promise<Post[]> => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  const data: Post[] = await response.json();

  return data;
};