import { useState } from "react";
import { getPostWithInterceptor } from "./utils/service";
import type { Post } from "./utils/service";

const AxiosInterceptors = () => {
  const [post, setPost] = useState<Post | null>(null);

  const handleRequest = async () => {
    try {
      const data = await getPostWithInterceptor(1);

      setPost(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Axios Interceptors</h1>

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

export default AxiosInterceptors;