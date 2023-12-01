import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import postsReducer from "./postsSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
  },
});
