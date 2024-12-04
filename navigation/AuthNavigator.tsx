import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthScreen } from "../screens/AuthScreen";

const Stack = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Auth"
        component={AuthScreen}
        options={{ title: "Login" }}
      />
    </Stack.Navigator>
  );
};