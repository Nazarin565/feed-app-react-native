import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { UserType } from "../types/UserType";
import { getUser } from "../services/api";
import { getRandomNumber } from "../utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { logout } from "../store/slices/authSlice";
import { setTheme } from "../store/slices/themeSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ProfileScreen = () => {
  const { email } = useSelector((state: RootState) => state.auth);
  const { currentTheme } = useSelector((state: RootState) => state.theme);
  const [user, setUser] = useState<UserType>();
  const dispatch = useDispatch();

  useEffect(() => {
    const num = getRandomNumber(12);
    getUser(num).then(setUser);
  }, []);

  const toogleTheme = () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    dispatch(setTheme(newTheme));
    AsyncStorage.setItem("theme", currentTheme);
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: currentTheme === "dark" ? "#3D464E" : "#F0F4F8" },
      ]}
    >
      <View style={styles.profile}>
        <Image source={{ uri: user?.avatar }} style={styles.avatar} />

        <View>
          <Text style={styles.description}>Name: {user?.first_name}</Text>
          <Text style={styles.description}>Email: {email}</Text>
        </View>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={toogleTheme}>
          <Text style={styles.buttonText}>
            Change theme to {currentTheme === "dark" ? "light" : "dark"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(logout())}
        >
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3D464E",
    padding: 20,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  profile: {
    width: "100%",
    height: 90,
    backgroundColor: "#677179",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingInline: 20,
  },
  avatar: {
    height: 60,
    width: 60,
    borderRadius: 50,
  },
  description: {
    color: "#fff",
  },
  button: {
    width: "100%",
    backgroundColor: "#4C808D",
    display: "flex",
    padding: 12,
    alignItems: "center",
    borderRadius: 12,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: 500,
  },
  buttons: {
    flexDirection: "column",
    gap: 8,
  },
});
