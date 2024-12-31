import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { AuthLayout } from "./AuthLayout";
import { SocialSignInButton } from "./SocialSignInButton";

const socialSignInOptions = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/746df7e0640049108198b4f4aa316a35/99c168c4159bbe5c24bab8d2e400f052f1648d6f9c2205696bb859125936ae6e?apiKey=746df7e0640049108198b4f4aa316a35&",
    text: "Sign in with Google"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/746df7e0640049108198b4f4aa316a35/827965de4cb48fb8a87adf7f941e6fd4bfbbd58e1d588e5e892bb04cbece4a05?apiKey=746df7e0640049108198b4f4aa316a35&",
    text: "Sign in with Facebook"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/746df7e0640049108198b4f4aa316a35/f83602cce125cf36978d3caabadb85f95cef9847aaa9c3ef23328ec9bdf02a58?apiKey=746df7e0640049108198b4f4aa316a35&",
    text: "Sign in with Apple"
  }
];

export const SignInScreen: React.FC = () => {
  return (
    <AuthLayout>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Talky.</Text>
      </View>
      <View style={styles.signInContainer}>
        {socialSignInOptions.map((option, index) => (
          <SocialSignInButton
            key={index}
            icon={option.icon}
            text={option.text}
          />
        ))}
        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>or</Text>
          <View style={styles.dividerLine} />
        </View>
        <View style={styles.phoneSignInButton}>
          <Text style={styles.phoneSignInText}>Continue with phone number</Text>
        </View>
        <Text style={styles.accountText}>Already have an account?</Text>
        <Text style={styles.signUpText}>Sign up here</Text>
      </View>
    </AuthLayout>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    fontSize: 60,
    fontWeight: "700",
    alignSelf: "center",
    marginTop: 82,
  },
  title: {
    fontSize: 60,
    fontWeight: "700",
  },
  signInContainer: {
    display: "flex",
    marginTop: 78,
    width: "100%",
    flexDirection: "column",
    alignItems: "stretch",
    fontSize: 16,
    fontWeight: "500",
  },
  dividerContainer: {
    alignSelf: "center",
    display: "flex",
    marginTop: 30,
    width: 254,
    maxWidth: "100%",
    alignItems: "center",
    flexDirection: "row",
    gap: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "rgba(88, 97, 106, 0.2)",
  },
  dividerText: {
    fontSize: 14,
    color: "rgba(88, 97, 106, 1)",
  },
  phoneSignInButton: {
    borderRadius: 8,
    marginTop: 30,
    paddingHorizontal: 45,
    paddingVertical: 21,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },
  phoneSignInText: {
    fontSize: 16,
    fontWeight: "500",
  },
  accountText: {
    fontSize: 14,
    textAlign: "center",
    alignSelf: "center",
    marginTop: 56,
    color: "rgba(88, 97, 106, 1)",
  },
  signUpText: {
    color: "rgba(55, 125, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    alignSelf: "center",
    marginTop: 5,
  },
});