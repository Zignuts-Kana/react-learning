import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchUsers } from "../asyncThunk/users";

interface GeoType {
  lat: string;
  lng: string;
}
interface CompanyType {
  name?: string;
  catchPhrase: string;
  bs: string;
}

export interface AddressType {
  street?: string;
  suite?: string;
  city?: string;
  zipcode?: string;
  geo: GeoType;
}
export interface UserDetails {
  id: number;
  name: string;
  username?: string;
  email?: string;
  address?: AddressType;
  phone: string;
  website: string;
  company: CompanyType;
}

export interface UserState {
  users: UserDetails[];
  error: string | undefined | null;
}

const initialState: UserState = {
  users: [],
  error: null,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UserDetails>) => {
      state.users.push(action.payload);
    },
    removeUser: (state, action: PayloadAction<number>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },

    updateUser: (state, action: PayloadAction<UserDetails>) => {
      state.users = state.users.map((user) => {
        if (user.id === action.payload.id) {
          return action.payload;
        }
        return user;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { addUser, removeUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
