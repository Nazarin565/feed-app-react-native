import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#677179",
    paddingInline: 8,
  },
});
