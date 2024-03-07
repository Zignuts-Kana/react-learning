import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchPosts } from "../asyncThunk/posts";

export interface PostDetails {
  id: string;
  title: string;
  description: string;
}

export interface PostState {
  posts: PostDetails[];
  error: string | undefined | null;
}

const initialState: PostState = {
  posts: [],
  error: null,
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<PostDetails>) => {
      state.posts.push(action.payload);
    },
    removePost: (state, action: PayloadAction<string>) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },

    updatePost: (state, action: PayloadAction<PostDetails>) => {
      state.posts = state.posts.map((post) => {
        if (post.id === action.payload.id) {
          return action.payload;
        }
        return post;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { addPost, removePost, updatePost } = postSlice.actions;
export default postSlice.reducer;
