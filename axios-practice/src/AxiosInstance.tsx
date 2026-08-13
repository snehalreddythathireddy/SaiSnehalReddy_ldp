import { useState } from "react";
import { getPostById } from "./utils/service";
import type { Post } from "./utils/service";

const AxiosInstance = () => {
  const [post, setPost] = useState<Post | null>(null);

  const handleRequest = async () => {
    const data = await getPostById(1);

    setPost(data);
  };

  return (
    <div>
      <h1>Axios Instance</h1>

      <button onClick={handleRequest}>Get Post</button>

      {post && (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
};

export default AxiosInstance;