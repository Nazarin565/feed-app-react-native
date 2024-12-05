import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ImageCardType } from "../types/ImageCardType";

type Props = {
  item: ImageCardType;
};

export const ImageCard: React.FC<Props> = ({ item }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.download_url }} style={styles.img} />
      <Text style={styles.author}>{item.author}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 12,
  },
  img: {
    width: "100%",
    height: 240,
    borderRadius: 8,
  },
  author: {
    position: "absolute",
    bottom: 0,
    left: 0,
    color: "#fff",
    backgroundColor: "rgba(79, 85, 82, 0.8)",
    width: "100%",
    borderEndEndRadius: 8,
    borderEndStartRadius: 8,
    padding: 8,
  },
});
