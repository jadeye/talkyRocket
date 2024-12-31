import * as React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { SocialSignInButtonProps } from "./types";

export const SocialSignInButton: React.FC<SocialSignInButtonProps> = ({
  icon,
  text,
  onPress
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.socialButton}>
      <Image
        resizeMode="contain"
        source={{ uri: icon }}
        style={styles.socialIcon}
      />
      <View style={styles.socialTextContainer}>
        <Text style={styles.socialText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  socialButton: {
    borderRadius: 8,
    display: "flex",
    paddingHorizontal: 39,
    paddingVertical: 18,
    alignItems: "stretch",
    gap: 38,
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
  },
  socialIcon: {
    width: 24,
    aspectRatio: 1,
    flexShrink: 0,
  },
  socialTextContainer: {
    marginVertical: "auto",
    flexGrow: 1,
    flexShrink: 1,
    width: 174,
  },
  socialText: {
    fontSize: 16,
    fontWeight: "500",
  },
});