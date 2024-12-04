import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const FeedScreen = () => {
  return (
    <View style={styles.container}>
      <Text>FeedScreen</Text>
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
