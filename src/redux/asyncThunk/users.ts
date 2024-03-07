import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, { rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();

      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
