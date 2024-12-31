import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { UserAvatarProps } from './types';

export const UserAvatar: React.FC<UserAvatarProps> = ({ imageUrl, size, borderRadius = 50 }) => {
  return (
    <Image
      resizeMode="cover"
      source={{ uri: imageUrl }}
      style={[
        styles.avatar,
        {
          width: size,
          height: size,
          borderRadius: borderRadius,
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  avatar: {
    position: 'relative',
    display: 'flex',
  },
});