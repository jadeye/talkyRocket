import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { MessageProps } from './types';

export const Message: React.FC<MessageProps> = ({ text, time, isOutgoing, images }) => {
  return (
    <View style={[styles.messageContainer, isOutgoing ? styles.outgoingMessage : styles.incomingMessage]}>
      <View style={styles.textContainer}>
        <Text style={[styles.messageText, isOutgoing ? styles.outgoingText : styles.incomingText]}>
          {text}
        </Text>
      </View>
      {images && (
        <View style={styles.imageGrid}>
          {images.map((image, index) => (
            <Image
              key={index}
              source={{ uri: image }}
              style={styles.messageImage}
              resizeMode="contain"
            />
          ))}
        </View>
      )}
      {time && (
        <Text style={styles.timeText}>{time}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    marginVertical: 8,
    maxWidth: '80%',
    alignSelf: 'flex-start',
  },
  outgoingMessage: {
    alignSelf: 'flex-end',
  },
  incomingMessage: {
    alignSelf: 'flex-start',
  },
  textContainer: {
    borderRadius: 8,
    padding: 10,
  },
  messageText: {
    fontSize: 16,
    fontFamily: 'Inter, sans-serif',
    fontWeight: '500',
  },
  outgoingText: {
    color: '#FFFFFF',
  },
  incomingText: {
    color: '#243443',
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
    marginTop: 15,
  },
  messageImage: {
    width: 125,
    height: 125,
    borderRadius: 8,
  },
  timeText: {
    fontSize: 12,
    color: '#AAB0B7',
    textAlign: 'center',
    marginTop: 8,
  },
});