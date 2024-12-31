import * as React from "react";
import { View, StyleSheet, Text } from "react-native";

interface TalkyLogoProps {
  title: string;
}

export const TalkyLogo: React.FC<TalkyLogoProps> = ({ title }) => {
  return (
    <View style={styles.logoContainer}>
      <Text style={styles.logoText}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    backgroundColor: "#377DFF",
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: 70,
    paddingRight: 70,
    paddingTop: 358,
    paddingBottom: 358,
    overflow: "hidden",
  },
  logoText: {
    fontFamily: "Inter, sans-serif",
    fontSize: 80,
    color: "rgba(255, 255, 255, 1)",
    fontWeight: "700",
  }
});