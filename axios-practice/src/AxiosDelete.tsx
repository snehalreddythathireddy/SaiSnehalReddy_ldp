import { useState } from "react";
import { deletePost } from "./utils/service";

const AxiosDelete = () => {
  const [message, setMessage] = useState("");

  const handleDelete = async () => {
    try {
      await deletePost(1);

      setMessage("Post deleted successfully");
    } catch (error) {
      console.log(error);
      setMessage("Failed to delete post");
    }
  };

  return (
    <div>
      <h1>Axios DELETE</h1>

      <button onClick={handleDelete}>Delete Post</button>

      {message && <p>{message}</p>}
    </div>
  );
};

export default AxiosDelete;