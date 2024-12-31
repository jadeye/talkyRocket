import * as React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { ChatHeaderProps } from './types';

export const ChatHeader: React.FC<ChatHeaderProps> = ({ userName, onBack, userAvatar }) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={onBack} style={styles.backButton}>
        <Image
          source={{ uri: userAvatar }}
          style={styles.backIcon}
          resizeMode="contain"
        />
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.userName}>{userName}</Text>
      <View style={styles.actionsContainer}>
        <Image
          source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/746df7e0640049108198b4f4aa316a35/12c6435b611effab6b7ebaab469e17c30efd70c539a58c73ac595f8e9c3c8297?apiKey=746df7e0640049108198b4f4aa316a35&' }}
          style={styles.actionIcon}
          resizeMode="contain"
        />
        <Image
          source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/746df7e0640049108198b4f4aa316a35/955426fd9acf13153c6e74732e3d4e1a8c8eefae556259170505b91b27140c6b?apiKey=746df7e0640049108198b4f4aa316a35&' }}
          style={styles.menuIcon}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {
    width: 54,
    height: 21,
    borderRadius: 32,
  },
  backText: {
    color: '#377DFF',
    fontFamily: 'Inter, sans-serif',
    fontSize: 16,
    fontWeight: '700',
  },
  userName: {
    color: '#243443',
    fontSize: 16,
    fontFamily: 'Inter, sans-serif',
    fontWeight: '700',
  },
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 25,
  },
  actionIcon: {
    width: 66,
    height: 21,
  },
  menuIcon: {
    width: 52,
    height: 52,
  },
});