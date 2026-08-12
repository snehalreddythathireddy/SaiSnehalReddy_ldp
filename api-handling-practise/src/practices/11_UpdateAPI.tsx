import { useState } from "react";
import { updatePost } from "../api/api";

const UpdateAPI = () => {
  const [id, setId] = useState("1");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleUpdate = async () => {
    setLoading(true);
    setError("");
    setMessage("");

    try {
      const data = await updatePost(Number(id), {
        title,
        body,
      });

      console.log("Updated Post:", data);

      setMessage(`Post ${data.id} updated successfully`);
    } catch (error) {
      console.log("API Error:", error);
      setError("Failed to update post");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>PATCH API Practice</h1>

      <input
        type="number"
        value={id}
        onChange={(event) => setId(event.target.value)}
        placeholder="Post ID"
      />

      <br />

      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="New title"
      />

      <br />

      <textarea
        value={body}
        onChange={(event) => setBody(event.target.value)}
        placeholder="New body"
      />

      <br />

      <button onClick={handleUpdate}>Update Post</button>

      {loading && <p>Updating...</p>}

      {error && <p>{error}</p>}

      {message && <p>{message}</p>}
    </div>
  );
};

export default UpdateAPI;