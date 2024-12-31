import * as React from 'react';
import { View, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { ChatInputProps } from './types';

export const ChatInput: React.FC<ChatInputProps> = ({ onSend }) => {
  const [message, setMessage] = React.useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  return (
    <View style={styles.inputContainer}>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Message"
          value={message}
          onChangeText={setMessage}
          accessibilityLabel="Message input field"
        />
        <TouchableOpacity onPress={handleSend}>
          <Image
            source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/746df7e0640049108198b4f4aa316a35/7e261b7595657881525e1fad48171113bb73d91642818a7eb270cab67ff3b33f?apiKey=746df7e0640049108198b4f4aa316a35&' }}
            style={styles.sendIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <Image
        source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/746df7e0640049108198b4f4aa316a35/f9d73414dbdb45c8919451493bbe4e807f20f6cbf7cc754820d170e4b6e20681?apiKey=746df7e0640049108198b4f4aa316a35&' }}
        style={styles.attachIcon}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    paddingHorizontal: 28,
    marginTop: 37,
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    borderColor: '#AAB0B7',
    borderWidth: 1,
    paddingHorizontal: 18,
    paddingVertical: 15,
    gap: 100,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#AAB0B7',
    fontFamily: 'Inter, sans-serif',
  },
  sendIcon: {
    width: 24,
    height: 24,
  },
  attachIcon: {
    width: 76,
    height: 76,
  },
});