import { useState } from "react";

interface PostResponse {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const PostAPI = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [result, setResult] = useState<PostResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const createPost = async () => {
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            body,
            userId: 1,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create post");
      }

      const data: PostResponse = await response.json();

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
      <h1>POST API Practice</h1>

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

      <button onClick={createPost}>Create Post</button>

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

export default PostAPI;