import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { ChatHeaderProps } from '../types/ChatTypes';

export const ChatHeader: React.FC<ChatHeaderProps> = ({ onMenuPress, onSearchPress }) => {
  return (
    <View style={styles.headerContainer}>
      <Image
        resizeMode="contain"
        source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/746df7e0640049108198b4f4aa316a35/895c77dfad36117c412bcd4708d11cffb0fba578d62278b9d00d1f1de84d79bb?apiKey=746df7e0640049108198b4f4aa316a35&' }}
        style={styles.menuIcon}
      />
      <Image
        resizeMode="contain"
        source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/746df7e0640049108198b4f4aa316a35/a143661fc32ca03b8bc05f2cdd3fa43729a3e25edc689ac975fe3ab9d8511c62?apiKey=746df7e0640049108198b4f4aa316a35&' }}
        style={styles.searchIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  menuIcon: {
    borderRadius: 32,
    width: 54,
    aspectRatio: 2.57,
  },
  searchIcon: {
    width: 67,
    aspectRatio: 3.19,
  },
});