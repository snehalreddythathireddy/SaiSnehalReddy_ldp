import { useEffect, useState } from "react";
import { deletePost, getPosts } from "../api/api";
import type { Post } from "../api/api";

const GetDeleteAPI = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError("");

      try {
        const data = await getPosts();

        setPosts(data);
      } catch (error) {
        console.log("API Error:", error);
        setError("Failed to fetch posts");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleDelete = async (id: number) => {
    setDeletingId(id);
    setError("");

    try {
      await deletePost(id);

      setPosts((currentPosts) =>
        currentPosts.filter((post) => post.id !== id)
      );
    } catch (error) {
      console.log("Delete Error:", error);
      setError("Failed to delete post");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div>
      <h1>GET + DELETE API Practice</h1>

      {loading && <p>Loading posts...</p>}

      {error && <p>{error}</p>}

      {!loading &&
        posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>

            <button
              onClick={() => handleDelete(post.id)}
              disabled={deletingId === post.id}
            >
              {deletingId === post.id ? "Deleting..." : "Delete"}
            </button>
          </div>
        ))}
    </div>
  );
};

export default GetDeleteAPI;