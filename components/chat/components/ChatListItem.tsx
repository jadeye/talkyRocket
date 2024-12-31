import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { ChatListItemProps } from '../types/ChatTypes';

export const ChatListItem: React.FC<ChatListItemProps> = ({ message }) => {
  return (
    <View style={styles.messageContainer}>
      <View style={styles.messageDivider} />
      <Image
        resizeMode="contain"
        source={{ uri: message.avatar }}
        style={styles.avatar}
      />
      <Text style={styles.name}>{message.name}</Text>
      <Text style={styles.messageText}>{message.message}</Text>
      <Text style={styles.timeText}>{message.time}</Text>
      <Image
        resizeMode="contain"
        source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/746df7e0640049108198b4f4aa316a35/939b7b3ce9b361c1f84168265f8362a3830e73188998b0dd3cb34985ca61e397?apiKey=746df7e0640049108198b4f4aa316a35&' }}
        style={styles.statusIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    position: 'relative',
    width: '100%',
    minHeight: 70,
    fontFamily: 'Inter, sans-serif',
    color: 'rgba(88, 97, 106, 1)',
  },
  messageDivider: {
    width: '100%',
    height: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  avatar: {
    position: 'absolute',
    width: 50,
    aspectRatio: 1,
    left: 28,
    top: 10,
  },
  name: {
    position: 'absolute',
    left: 90,
    top: 10,
    color: 'rgba(36, 52, 67, 1)',
    fontSize: 16,
    fontWeight: '600',
  },
  messageText: {
    position: 'absolute',
    left: 90,
    top: 32,
    fontSize: 14,
  },
  timeText: {
    position: 'absolute',
    right: 47,
    top: 12,
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'right',
  },
  statusIcon: {
    position: 'absolute',
    width: 24,
    aspectRatio: 1,
    right: 18,
    top: 23,
  },
});