import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export const AuthScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: "white" }}>AuthScreen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3D464E",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
