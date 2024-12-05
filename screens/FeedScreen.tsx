import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { getImageList } from "../services/api";
import { ImageCardType } from "../types/ImageCardType";
import { ImageCard } from "../components/ImageCard";
import { getRandomPage } from "../utils/helpers";

export const FeedScreen = () => {
  const [imgList, setImgList] = useState<ImageCardType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [firstPage, setFirstPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const page = getRandomPage(100);
    getImageList(page).then((data) => {
      setImgList(data);
      setFirstPage(page);
      setCurrentPage(page + 1);
    });
  }, []);

  const onRefresh = () => {
    const page = getRandomPage(100);
    getImageList(page).then((data) => {
      setImgList(data);
      setFirstPage(page);
      setCurrentPage(page + 1);
    });
  };

  const handleAddImages = () => {
    if (loading) {
      return;
    }

    const nextPage = currentPage === 101 ? 1 : currentPage;

    if (nextPage === firstPage) {
      return;
    }

    setLoading(true);
    getImageList(nextPage)
      .then((data) => {
        setImgList((prev) => [...prev, ...data]);
        setCurrentPage(nextPage + 1);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={imgList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ImageCard item={item} />}
          refreshControl={
            <RefreshControl refreshing={false} onRefresh={onRefresh} />
          }
          onEndReached={handleAddImages}
          ListFooterComponent={
            loading ? <ActivityIndicator size="large" /> : null
          }
        />
      </View>
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
