import { useState } from "react";
import { updatePost } from "./utils/service";
import type { Post } from "./utils/service";

const AxiosPut = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [result, setResult] = useState<Post | null>(null);

  const handleUpdate = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = await updatePost(1, title, body, 1);

    setResult(data);
  };

  return (
    <div>
      <h1>Axios PUT</h1>

      <form onSubmit={handleUpdate}>
        <input
          type="text"
          placeholder="Enter new title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <br />

        <textarea
          placeholder="Enter new body"
          value={body}
          onChange={(event) => setBody(event.target.value)}
        />

        <br />

        <button type="submit">Update Post</button>
      </form>

      {result && (
        <div>
          <h2>Updated Post</h2>
          <p>ID: {result.id}</p>
          <p>Title: {result.title}</p>
          <p>Body: {result.body}</p>
          <p>User ID: {result.userId}</p>
        </div>
      )}
    </div>
  );
};

export default AxiosPut;