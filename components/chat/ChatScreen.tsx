import * as React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { ChatHeader } from './components/ChatHeader';
import { ChatTabs } from './components/ChatTabs';
import { ChatListItem } from './components/ChatListItem'
import { chatMessages } from './data/messages';

export const ChatScreen: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<'chat' | 'call'>('chat');

  return (
    <View style={styles.screenContainer}>
      <ChatHeader
        onMenuPress={() => {}}
        onSearchPress={() => {}}
      />
      <ChatTabs
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <ScrollView>
        {chatMessages.map((message) => (
          <ChatListItem
            key={message.id}
            message={message}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 480,
    width: '100%',
    backgroundColor: '#ffffff',
  },
});