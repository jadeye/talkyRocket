import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { InputFieldProps } from './types';

export const InputField: React.FC<InputFieldProps> = ({
  label,
  type = 'text',
  value,
  onChange,
  id
}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label} nativeID={`${id}Label`}>
        {label}
      </Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChange}
        secureTextEntry={type === 'password'}
        accessibilityLabel={label}
        accessibilityLabelledBy={`${id}Label`}
        id={id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    maxWidth: 319,
    marginVertical: 9,
  },
  input: {
    borderRadius: 8,
    borderColor: 'rgba(170, 176, 183, 1)',
    borderWidth: 1,
    padding: 19,
    fontFamily: 'Inter',
    fontSize: 14,
    color: 'rgba(36, 52, 67, 1)',
  },
  label: {
    fontFamily: 'Inter',
    fontSize: 14,
    color: 'rgba(36, 52, 67, 1)',
    marginBottom: 8,
  },
});