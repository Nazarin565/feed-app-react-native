import { StyleSheet, View } from "react-native";
import { AuthNavigator } from "./navigation/AuthNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import { AppNavigator } from "./navigation/AppNavigator";
import { StatusBar } from "expo-status-bar";

// const validData = {
//   email: "test@test.test",
//   password: "Qwerty12345",
// };

export default function App() {
  const [isLogined, setIsLogined] = useState(false);

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
