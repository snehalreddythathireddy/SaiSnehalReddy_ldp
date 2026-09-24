import { useState } from "react";
import { createPost } from "../api/api";
import type { PostResponse } from "../api/api";

const ReusablePostAPI = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [result, setResult] = useState<PostResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const data = await createPost({
        title,
        body,
        userId: 1,
      });

      setResult(data);
    } catch (error) {
      console.log("API Error:", error);
      setError("Failed to create post");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Reusable POST API Practice</h1>

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

      <button onClick={handleSubmit}>Create Post</button>

      {loading && <p>Creating post...</p>}

      {error && <p>{error}</p>}

      {result && (
        <div>
          <h2>Created Post</h2>
          <p>ID: {result.id}</p>
          <p>Title: {result.title}</p>
          <p>Body: {result.body}</p>
        </div>
      )}
    </div>
  );
};

export default ReusablePostAPI;