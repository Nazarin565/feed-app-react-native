import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogined: false,
    email: "",
  },
  reducers: {
    successLogin: (state, action: PayloadAction<string>) => {
      state.isLogined = true;
      state.email = action.payload;
    },
    failLogin: (state) => {
      state.isLogined = false;
      state.email = "";
    },
    logout: (state) => {
      state.isLogined = false;
      state.email = "";
    },
  },
});

export const { successLogin, failLogin, logout } = authSlice.actions;
