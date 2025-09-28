import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

export interface UserState {
  id?: number;
  name?: string;
}

// Define the initial state using that type
const initialState: UserState = {};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ id: number; name: string }>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
    },
    logOut: (state) => {
      delete state.id;
      delete state.name;
    },
  },
});

export const IsUserAuth = (state: RootState) => (state.user?.id ? true : false);
export const { login, logOut } = userSlice.actions;
export default userSlice.reducer;
