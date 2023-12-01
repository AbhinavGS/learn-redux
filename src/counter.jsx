import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counterSlice";
import { fetchAllPosts } from "./postsSlice";

import "./styles/counter.css";

export default function Counter() {
  const [amount, setAmount] = useState(5);

  const count = useSelector((state) => state.counter.value);
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, []);

  return (
    <div className="counter">
      <h1>Sync Action</h1>
      <div>{count}</div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <br />
      <br />
      <input
        name="amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <br />
      <button onClick={() => dispatch(incrementByAmount(amount))}>+</button>
      {posts.loading && <p>Loading...</p>}
      {!posts.loading && posts.error ? <p>Error: {posts.error}</p> : null}
      <p>{`First post: ${posts.posts[0].title}`}</p>
    </div>
  );
}
