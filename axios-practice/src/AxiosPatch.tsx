import { useState } from "react";
import { patchPost } from "./utils/service";
import type { Post } from "./utils/service";

const AxiosPatch = () => {
  const [title, setTitle] = useState("");
  const [result, setResult] = useState<Post | null>(null);

  const handleUpdate = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = await patchPost(1, title);

    setResult(data);
  };

  return (
    <div>
      <h1>Axios PATCH</h1>

      <form onSubmit={handleUpdate}>
        <input
          type="text"
          placeholder="Enter new title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <button type="submit">Update Title</button>
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

export default AxiosPatch;