import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ChatTabsProps } from '../types/ChatTypes';

export const ChatTabs: React.FC<ChatTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <View style={styles.tabContainer}>
      <View style={styles.tabBackground} />
      <View style={[styles.tabIndicator, activeTab === 'chat' ? styles.leftTab : styles.rightTab]} />
      <Text 
        style={[styles.tabText, activeTab === 'chat' ? styles.activeText : styles.inactiveText]}
        onPress={() => onTabChange('chat')}
      >
        Chat
      </Text>
      <Text 
        style={[styles.tabText, activeTab === 'call' ? styles.activeText : styles.inactiveText]}
        onPress={() => onTabChange('call')}
      >
        Call
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    position: 'relative',
    minHeight: 60,
    width: '100%',
    paddingHorizontal: 24,
    paddingVertical: 4,
    fontFamily: 'Inter, sans-serif',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
  tabBackground: {
    borderRadius: 8,
    minHeight: 52,
    width: '100%',
  },
  tabIndicator: {
    borderRadius: 8,
    position: 'absolute',
    minHeight: 40,
    width: 158,
    top: 10,
    bottom: 10,
  },
  leftTab: {
    left: 30,
  },
  rightTab: {
    right: 30,
  },
  tabText: {
    position: 'absolute',
    top: 21,
    bottom: 20,
    width: 158,
    textAlign: 'center',
  },
  activeText: {
    color: 'rgba(36, 52, 67, 1)',
  },
  inactiveText: {
    color: 'rgba(170, 176, 183, 1)',
  },
});