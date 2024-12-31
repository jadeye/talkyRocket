import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { StatusIndicatorProps } from './types';

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({ isAvailable, hasNotification }) => {
  return (
    <View style={styles.statusContainer}>
      <View style={styles.statusWrapper}>
        <View style={[styles.statusDot, isAvailable && styles.statusDotAvailable]} />
        <Text style={styles.statusText}>Available</Text>
      </View>
      {hasNotification && (
        <View style={styles.notificationWrapper}>
          <View style={styles.divider} />
          <Image
            resizeMode="contain"
            source={{ uri: "https://cdn.builder.io/api/v1/image/assets/746df7e0640049108198b4f4aa316a35/30a2c81d79851cfb97e41c97618dfde097ce992e8358022651ee6c905e49022b?apiKey=746df7e0640049108198b4f4aa316a35&" }}
            style={styles.notificationIcon}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  statusContainer: {
    borderRadius: 8,
    borderColor: 'rgba(170, 176, 183, 1)',
    borderStyle: 'solid',
    borderWidth: 1,
    display: 'flex',
    width: '100%',
    maxWidth: 319,
    paddingHorizontal: 17,
    paddingVertical: 5,
    alignItems: 'stretch',
    gap: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  statusWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    flexDirection: 'row',
  },
  statusDot: {
    borderRadius: 50,
    width: 18,
    height: 18,
    backgroundColor: 'gray',
  },
  statusDotAvailable: {
    backgroundColor: 'green',
  },
  statusText: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 14,
    color: 'rgba(36, 52, 67, 1)',
    fontWeight: '500',
  },
  notificationWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: 15,
    flexDirection: 'row',
  },
  divider: {
    width: 1,
    height: 44,
    backgroundColor: 'rgba(170, 176, 183, 1)',
  },
  notificationIcon: {
    width: 24,
    aspectRatio: 1,
  },
});