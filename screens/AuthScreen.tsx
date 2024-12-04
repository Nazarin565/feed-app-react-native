import React from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export const AuthScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <View style={styles.container}>
      <View style={styles.inputField}>
        <Controller
          control={control}
          rules={{
            required: "Email is Required",
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
              message: "Incorrect email",
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Email"
              placeholderTextColor="#72777B"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.input}
              textContentType="emailAddress"
              keyboardType="email-address"
            />
          )}
          name="email"
        />
        {errors.email && (
          <Text style={styles.error}>{errors.email.message}</Text>
        )}
      </View>

      <View style={styles.inputField}>
        <Controller
          control={control}
          rules={{
            required: true,
            minLength: 8,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Password"
              placeholderTextColor="#72777B"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.input}
              textContentType="password"
              secureTextEntry
            />
          )}
          name="password"
        />
        {errors.password && (
          <Text style={styles.error}>Min length 8 symbols</Text>
        )}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3D464E",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    gap: 16,
  },
  inputField: {
    width: "100%",
  },
  input: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 8,
    padding: 12,
    width: "100%",
    color: "#fff",
  },
  error: {
    color: "red",
    alignSelf: "flex-start",
  },
  button: {
    width: "100%",
    backgroundColor: "#4C808D",
    display: "flex",
    padding: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: 500,
  },
});
