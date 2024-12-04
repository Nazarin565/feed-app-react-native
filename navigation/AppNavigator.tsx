import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { FeedScreen } from "../screens/FeedScreen";
import { ProfileScreen } from "../screens/ProfileScreen";
import { SafeAreaView, StyleSheet } from "react-native";

const Tab = createMaterialTopTabNavigator();

export const AppNavigator = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: "#677179" },
          tabBarLabelStyle: {
            color: "white",
            fontSize: 16,
            fontWeight: "600",
          },
          tabBarIndicatorStyle: { backgroundColor: "#518795" },
        }}
      >
        <Tab.Screen
          name="Feed"
          component={FeedScreen}
          options={{ title: "Feed" }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: "Profile" }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#677179",
  },
});
