import * as React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { InputFieldProps } from './types';

export const InputField: React.FC<InputFieldProps> = ({ value, onChange, placeholder }) => {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChange}
      placeholder={placeholder}
      accessibilityLabel={placeholder}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 8,
    borderColor: 'rgba(170, 176, 183, 1)',
    borderStyle: 'solid',
    borderWidth: 1,
    width: 319,
    maxWidth: '100%',
    paddingHorizontal: 20,
    paddingVertical: 19,
    fontFamily: 'Inter, sans-serif',
    fontSize: 14,
    color: 'rgba(36, 52, 67, 1)',
    fontWeight: '500',
  },
});