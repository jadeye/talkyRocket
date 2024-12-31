import * as React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { ChatHeader } from './ChatHeader';
import { Message } from './Message';
import { ChatInput } from './ChatInput';

export const ChatScreen: React.FC = () => {
  const messages = [
    {
      text: "Hey, hey, hey...\nIt's morning here in Tokyo 😊",
      time: "08:15",
      isOutgoing: false,
    },
    {
      text: "Send me some pictures",
      time: "11:40",
      isOutgoing: true,
    },
    {
      text: "Ok... sending.",
      isOutgoing: false,
    },
    {
      text: "",
      images: ["https://cdn.builder.io/api/v1/image/assets/746df7e0640049108198b4f4aa316a35/b94d1eb5a3725c371adb0b8620fab64a75f8615865e0b50f401a49f6c20c190b?apiKey=746df7e0640049108198b4f4aa316a35&", "https://cdn.builder.io/api/v1/image/assets/746df7e0640049108198b4f4aa316a35/4d7ba2de85100525a1d435965292f27a3171b2aabc9e89daeb2274aead4c9210?apiKey=746df7e0640049108198b4f4aa316a35&"],
      time: "11:43",
      isOutgoing: false,
    },
    {
      text: "😱😱😱😱😱 so beautiful",
      isOutgoing: true,
    },
    {
      text: "You need to see it by yourself.\nWhen you come?",
      isOutgoing: false,
    },
  ];

  const handleSend = (message: string) => {
    console.log('Sending message:', message);
  };

  return (
    <View style={styles.container}>
      <ChatHeader
        userName="Annette Black"
        onBack={() => {}}
        userAvatar="https://cdn.builder.io/api/v1/image/assets/746df7e0640049108198b4f4aa316a35/895c77dfad36117c412bcd4708d11cffb0fba578d62278b9d00d1f1de84d79bb?apiKey=746df7e0640049108198b4f4aa316a35&"
      />
      <ScrollView style={styles.messageList}>
        {messages.map((message, index) => (
          <Message key={index} {...message} />
        ))}
      </ScrollView>
      <ChatInput onSend={handleSend} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 'auto',
    maxWidth: 480,
    width: '100%',
    paddingTop: 8,
    paddingBottom: 16,
  },
  messageList: {
    flex: 1,
    paddingHorizontal: 28,
  },
});