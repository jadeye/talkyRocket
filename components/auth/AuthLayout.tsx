import * as React from "react";
import { View, StyleSheet, Image } from "react-native";
import { AuthLayoutProps } from "./types";

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/746df7e0640049108198b4f4aa316a35/eba6de352b84e9406ddbf755d4595aee4f98b0f48314f713818c526de21788aa?apiKey=746df7e0640049108198b4f4aa316a35&" }}
        style={styles.topImage}
      />
      <View style={styles.contentWrapper}>
        <Image
          resizeMode="contain"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/746df7e0640049108198b4f4aa316a35/d617f0e204bf2a2e5ea2c64dd16cfe358bbe400c77241e41598bc6e6d31bd90f?apiKey=746df7e0640049108198b4f4aa316a35&" }}
          style={styles.logo}
        />
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F7F9",
    display: "flex",
    marginHorizontal: "auto",
    maxWidth: 480,
    width: "100%",
    paddingTop: 8,
    paddingBottom: 102,
    flexDirection: "column",
    overflow: "hidden",
    alignItems: "stretch",
    fontFamily: "Inter, sans-serif",
    color: "rgba(36, 52, 67, 1)",
  },
  topImage: {
    position: "relative",
    display: "flex",
    width: 66,
    aspectRatio: "3.14",
  },
  contentWrapper: {
    zIndex: 10,
    display: "flex",
    marginTop: -17,
    width: "100%",
    paddingHorizontal: 21,
    flexDirection: "column",
  },
  logo: {
    borderRadius: 32,
    position: "relative",
    display: "flex",
    width: 54,
    aspectRatio: "2.57",
  },
});