import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { InputField } from './InputField';
import { Button } from './Button';

export const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          resizeMode="contain"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/746df7e0640049108198b4f4aa316a35/d617f0e204bf2a2e5ea2c64dd16cfe358bbe400c77241e41598bc6e6d31bd90f?apiKey=746df7e0640049108198b4f4aa316a35&" }}
          style={styles.logoImage}
        />
        <Image
          resizeMode="contain"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/746df7e0640049108198b4f4aa316a35/eba6de352b84e9406ddbf755d4595aee4f98b0f48314f713818c526de21788aa?apiKey=746df7e0640049108198b4f4aa316a35&" }}
          style={styles.decorativeImage}
        />
      </View>

      <View style={styles.backButton}>
        <View style={styles.backButtonCircle} />
        <Text style={styles.backButtonText}>Back</Text>
      </View>

      <Text style={styles.title}>Talky.</Text>
      <Text style={styles.subtitle}>Sign in with Google</Text>

      <View style={styles.form}>
        <InputField
          label="Enter your gmail address"
          value={email}
          onChange={setEmail}
          id="emailInput"
        />
        
        <InputField
          label="Enter your password"
          type="password"
          value={password}
          onChange={setPassword}
          id="passwordInput"
        />

        <Text style={styles.forgotPassword}>Forgot password?</Text>

        <Button text="Sign in" onPress={() => {}} />
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Already have an account?</Text>
        <Button
          text="Sign up here"
          onPress={() => {}}
          variant="link"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 'auto',
    maxWidth: 480,
    width: '100%',
    padding: 18,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoImage: {
    width: 54,
    aspectRatio: 2.57,
    borderRadius: 32,
  },
  decorativeImage: {
    width: 66,
    aspectRatio: 3.14,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 31,
    gap: 5,
  },
  backButtonCircle: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  backButtonText: {
    fontFamily: 'Inter',
    fontSize: 16,
    color: 'rgba(55, 125, 255, 1)',
    fontWeight: '700',
  },
  title: {
    fontSize: 40,
    fontFamily: 'Inter',
    color: 'rgba(36, 52, 67, 1)',
    fontWeight: '700',
    marginTop: 21,
  },
  subtitle: {
    fontSize: 18,
    fontFamily: 'Inter',
    color: 'rgba(36, 52, 67, 1)',
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 40,
  },
  form: {
    width: '100%',
    alignItems: 'center',
    marginTop: 40,
  },
  forgotPassword: {
    alignSelf: 'flex-start',
    marginLeft: 30,
    fontSize: 12,
    fontFamily: 'Inter',
    color: 'rgba(36, 52, 67, 1)',
    fontWeight: '500',
    marginTop: 18,
  },
  footer: {
    marginTop: 30,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    fontFamily: 'Inter',
    color: 'rgba(36, 52, 67, 1)',
    fontWeight: '500',
  },
});