import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";

interface AuthState {
  isLogined: boolean;
  email: string;
}

const initialState: AuthState = {
  isLogined: false,
  email: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    successLogin: (state, action: PayloadAction<string>) => {
      state.isLogined = true;
      state.email = action.payload;
      AsyncStorage.setItem("isLogined", "true");
      AsyncStorage.setItem("email", action.payload);
    },
    logout: (state) => {
      state.isLogined = false;
      state.email = "";
      AsyncStorage.removeItem("isLogined");
      AsyncStorage.removeItem("email");
    },
    setAuthState: (state, action) => {
      state.isLogined = action.payload.isLogined;
      state.email = action.payload.email;
    },
  },
});

export const { successLogin, logout, setAuthState } = authSlice.actions;

export const loadAuthState = () => async (dispatch: AppDispatch) => {
  try {
    const isLogined = await AsyncStorage.getItem("isLogined");
    const email = await AsyncStorage.getItem("email");

    dispatch(
      setAuthState({
        isLogined: isLogined === "true",
        email: email || "",
      })
    );
  } catch (e) {
    console.error("Error loading auth state:", e);
  }
};
