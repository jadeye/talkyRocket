import * as React from "react";
import { InputField } from "../../components/profile/InputField";

import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { UserAvatar } from "@/components/profile/UserAvatar";
import { StatusIndicator } from "@/components/profile/StatusIndicator";

export default function TabThreeScreen() {
const [name, setName] = React.useState('Suzan Winterson');
  const [status, setStatus] = React.useState('Today is a better day');

  return (
    <View style={styles.container}>
      <ProfileHeader
        onBackPress={() => {}}
        onProfilePress={() => {}}
      />
      
      <UserAvatar
        imageUrl="https://cdn.builder.io/api/v1/image/assets/746df7e0640049108198b4f4aa316a35/ed1af314ebd19a4b3098b7a3b7bbe31f3237c53fd52d0569d4dc6061ba5e284d?apiKey=746df7e0640049108198b4f4aa316a35&"
        size={190}
      />

      <InputField
        value={name}
        onChange={setName}
        placeholder="Name"
      />

      <InputField
        value={status}
        onChange={setStatus}
        placeholder="Status"
      />

      <StatusIndicator
        isAvailable={true}
        hasNotification={true}
      />

      <TouchableOpacity style={styles.completeButton}>
        <Text style={styles.completeButtonText}>Complete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginHorizontal: 'auto',
    maxWidth: 480,
    width: '100%',
    paddingHorizontal: 18,
    paddingTop: 8,
    paddingBottom: 90,
    flexDirection: 'column',
    overflow: 'hidden',
    alignItems: 'center',
    gap: 18,
  },
  completeButton: {
    borderRadius: 8,
    marginTop: 91,
    width: '100%',
    maxWidth: 319,
    paddingHorizontal: 70,
    paddingVertical: 16,
    backgroundColor: 'rgba(55, 125, 255, 1)',
  },
  completeButtonText: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 18,
    color: 'rgba(255, 255, 255, 1)',
    fontWeight: '500',
    textAlign: 'center',
  },
});