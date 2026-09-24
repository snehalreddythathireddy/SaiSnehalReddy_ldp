import { useState } from "react";
import {
  createPost,
  deletePost,
  getPosts,
  updatePost,
} from "./utils/service";
import type { Post } from "./utils/service";

const AxiosCRUD = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleGet = async () => {
    const data = await getPosts();

    setPosts(data);
  };

  const handleCreate = async () => {
    const newPost = await createPost(title, body, 1);

    setPosts((currentPosts) => [...currentPosts, newPost]);

    setTitle("");
    setBody("");
  };

  const handleUpdate = async (id: number) => {
    const updatedPost = await updatePost(
      id,
      "Updated Title",
      "Updated Body",
      1
    );

    setPosts((currentPosts) =>
      currentPosts.map((post) =>
        post.id === id ? updatedPost : post
      )
    );
  };

  const handleDelete = async (id: number) => {
    await deletePost(id);

    setPosts((currentPosts) =>
      currentPosts.filter((post) => post.id !== id)
    );
  };

  return (
    <div>
      <h1>Axios CRUD</h1>

      <button onClick={handleGet}>Get Posts</button>

      <h2>Create Post</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <br />

      <textarea
        placeholder="Body"
        value={body}
        onChange={(event) => setBody(event.target.value)}
      />

      <br />

      <button onClick={handleCreate}>Create</button>

      <h2>Posts</h2>

      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>

          <button onClick={() => handleUpdate(post.id)}>
            Update
          </button>

          <button onClick={() => handleDelete(post.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default AxiosCRUD;