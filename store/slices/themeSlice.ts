import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";

interface ThemeState {
  currentTheme: "dark" | "light";
}

const initialState: ThemeState = {
  currentTheme: "dark",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<"dark" | "light">) {
      state.currentTheme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export const loadCurrentTheme = () => async (dispatch: AppDispatch) => {
  try {
    const theme = await AsyncStorage.getItem("theme");

    dispatch(dispatch(setTheme(theme as "dark" | "light")));
  } catch (e) {
    console.error("Error loading theme:", e);
  }
};
