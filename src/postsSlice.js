import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  posts: [],
  error: null,
};

export const fetchAllPosts = createAsyncThunk(
  "posts/fetchAllPost",
  async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return response.json();
  }
);

export const postsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchAllPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAllPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    });
    builder.addCase(fetchAllPosts.rejected, (state, action) => {
      state.loading = false;
      state.posts = [];
      state.error = action.error.message;
    });
  },
});

export default postsSlice.reducer;
