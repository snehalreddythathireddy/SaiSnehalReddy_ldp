import { useState } from "react";
import { createPost } from "./utils/service";
import type { Post } from "./utils/service";

const AxiosPost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [result, setResult] = useState<Post | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = await createPost(title, body, 1);

    setResult(data);
  };

  return (
    <div>
      <h1>Axios POST</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <br />

        <textarea
          placeholder="Enter body"
          value={body}
          onChange={(event) => setBody(event.target.value)}
        />

        <br />

        <button type="submit">Create Post</button>
      </form>

      {result && (
        <div>
          <h2>Created Post</h2>
          <p>ID: {result.id}</p>
          <p>Title: {result.title}</p>
          <p>Body: {result.body}</p>
          <p>User ID: {result.userId}</p>
        </div>
      )}
    </div>
  );
};

export default AxiosPost;