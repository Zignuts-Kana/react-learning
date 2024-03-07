import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk(
  "users/fetchPosts",
  async (_, { rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();

      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
