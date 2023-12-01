import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPosts } from "./postsSlice";

import "./styles/posts.css";

export default function Posts() {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, []);

  return (
    <div className="posts">
      <h1>Async Action</h1>
      <ol>
        {posts.loading && <div>Loading...</div>}
        {!posts.loading && posts.error ? <div>Error: {posts.error}</div> : null}
        {posts.posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ol>
    </div>
  );
}
