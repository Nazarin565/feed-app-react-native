import { StyleSheet, View } from "react-native";
import { AuthNavigator } from "./navigation/AuthNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigator } from "./navigation/AppNavigator";
import { StatusBar } from "expo-status-bar";
import { useSelector } from "react-redux";
import { RootState, store } from "./store/store";

export default function App() {
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
