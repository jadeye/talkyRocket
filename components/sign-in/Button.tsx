import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({ text, onPress, variant = 'primary' }) => {
  return (
    <TouchableOpacity 
      style={[styles.button, variant === 'link' ? styles.linkButton : styles.primaryButton]}
      onPress={onPress}
      accessibilityRole="button"
    >
      <Text style={[styles.text, variant === 'link' ? styles.linkText : styles.primaryText]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    width: '100%',
    maxWidth: 319,
    padding: 16,
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: 'rgba(55, 125, 255, 1)',
  },
  linkButton: {
    backgroundColor: 'transparent',
  },
  text: {
    fontFamily: 'Inter',
    fontSize: 18,
    fontWeight: '500',
  },
  primaryText: {
    color: 'rgba(255, 255, 255, 1)',
  },
  linkText: {
    color: 'rgba(55, 125, 255, 1)',
  },
});