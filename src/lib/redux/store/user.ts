import { createSlice, PayloadAction, WritableDraft } from "@reduxjs/toolkit";
import { RootState } from "..";

export interface UserData {
  _uuid: string;
  firstName: string;
  lastName: string;
  login: string;
  email: string;
  avatarURL: string;
}

export interface UserState {
  data: UserData | null;
  isLoading: boolean;
}

const initialState: UserState = { data: null, isLoading: false };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (
      state: WritableDraft<UserState>,
      action: PayloadAction<UserData>
    ) => {
      state.data = action.payload;
      state.isLoading = true;
    },
    logOut: (state) => {
      if (state.data?._uuid) {
        state.data = null;
        state.isLoading = false;
      }
    },
  },
});

export const IsUserAuth = (state: RootState) =>
  state.user.data?._uuid ? true : false;
export const { login, logOut } = userSlice.actions;
export default userSlice.reducer;
