import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogined: false,
  },
  reducers: {
    successLogin: (state) => {
      state.isLogined = true;
    },
    failLogin: (state) => {
      state.isLogined = false;
    },
  },
});

export const { successLogin, failLogin } = authSlice.actions;
