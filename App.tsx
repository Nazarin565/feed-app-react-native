import { StyleSheet, View } from "react-native";
import { AuthNavigator } from "./navigation/AuthNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigator } from "./navigation/AppNavigator";
import { StatusBar } from "expo-status-bar";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store/store";
import { useEffect } from "react";
import { loadAuthState } from "./store/slices/authSlice";
import { loadCurrentTheme, setTheme } from "./store/slices/themeSlice";

export default function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(loadAuthState());
    dispatch(loadCurrentTheme());
  }, []);

  const { isLogined } = useSelector((state: RootState) => state.auth);

  return (
    <View style={styles.container}>
      <NavigationContainer>
        {isLogined ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
