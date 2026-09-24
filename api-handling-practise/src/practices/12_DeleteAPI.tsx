import { useState } from "react";
import { deletePost } from "../api/api";

const DeleteAPI = () => {
  const [id, setId] = useState("1");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleDelete = async () => {
    setLoading(true);
    setError("");
    setMessage("");

    try {
      await deletePost(Number(id));

      setMessage(`Post ${id} deleted successfully`);
    } catch (error) {
      console.log("API Error:", error);
      setError("Failed to delete post");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>DELETE API Practice</h1>

      <input
        type="number"
        value={id}
        onChange={(event) => setId(event.target.value)}
        placeholder="Post ID"
      />

      <br />

      <button onClick={handleDelete}>Delete Post</button>

      {loading && <p>Deleting...</p>}

      {error && <p>{error}</p>}

      {message && <p>{message}</p>}
    </div>
  );
};

export default DeleteAPI;