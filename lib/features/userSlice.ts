import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  role: string;
  token: string;
}

export const createEmptyUserState = (): UserState => ({
  _id: "",
  firstName: "",
  lastName: "",
  email: "",
  username: "",
  role: "",
  token: "",
});

const initialState: UserState = createEmptyUserState();

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (_state, action: PayloadAction<UserState>) => action.payload,
    logoutUser: () => {
      return createEmptyUserState();
    },
    updateUser: (state, action: PayloadAction<Partial<UserState>>) => {
      if (state) {
        return { ...state, ...action.payload };
      }
      return state;
    },
  },
});

export const { setUser, logoutUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
