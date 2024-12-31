import * as React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { ProfileHeaderProps } from './types';

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ onBackPress, onProfilePress }) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
        <Image
          resizeMode="contain"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/746df7e0640049108198b4f4aa316a35/d617f0e204bf2a2e5ea2c64dd16cfe358bbe400c77241e41598bc6e6d31bd90f?apiKey=746df7e0640049108198b4f4aa316a35&" }}
          style={styles.backIcon}
        />
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onProfilePress} style={styles.profileButton}>
        <Image
          resizeMode="contain"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/746df7e0640049108198b4f4aa316a35/eba6de352b84e9406ddbf755d4595aee4f98b0f48314f713818c526de21788aa?apiKey=746df7e0640049108198b4f4aa316a35&" }}
          style={styles.profileIcon}
        />
        <Text style={styles.profileText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignSelf: 'stretch',
    display: 'flex',
    gap: 20,
    fontFamily: 'Inter, sans-serif',
    fontSize: 16,
    fontWeight: '700',
    justifyContent: 'space-between',
  },
  backButton: {
    display: 'flex',
    marginTop: 4,
    flexDirection: 'column',
    alignItems: 'stretch',
    color: 'rgba(55, 125, 255, 1)',
  },
  backIcon: {
    borderRadius: 32,
    width: 54,
    aspectRatio: 2.57,
  },
  backText: {
    marginTop: 31,
  },
  profileButton: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  profileIcon: {
    width: 66,
    aspectRatio: 3.14,
  },
  profileText: {
    marginTop: 41,
    color: 'rgba(36, 52, 67, 1)',
  },
});