import { useState } from "react";
import { getPostsByUser } from "./utils/service";
import type { Post } from "./utils/service";

const AxiosParams = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [userId, setUserId] = useState("1");

  const handleSearch = async () => {
    const data = await getPostsByUser(userId);

    setPosts(data);
  };

  return (
    <div>
      <h1>Axios Query Parameters</h1>

      <input
        type="number"
        value={userId}
        onChange={(event) => setUserId(event.target.value)}
      />

      <button onClick={handleSearch}>Search</button>

      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <p>User ID: {post.userId}</p>
        </div>
      ))}
    </div>
  );
};

export default AxiosParams;