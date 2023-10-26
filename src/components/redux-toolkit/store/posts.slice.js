import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk("posts/fetch", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
});

const initialState = {
  posts: [],
  isLoadingPosts: false,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPosts.pending, (state, action) => {
      return {
        ...state,
        isLoadingPosts: true,
      };
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      return {
        ...state,
        posts: action.payload.slice(0, 10),
        isLoadingPosts: false,
      };
    });
  },
});

export default postsSlice.reducer;
