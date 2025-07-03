import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import theme from '../../utils/theme';

const PrimaryButton = ({ title, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.primary,
    paddingVertical: 14,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    marginBottom: 12,
  },
  text: {
    color: theme.white,
    fontSize: 14,
    fontFamily: theme.fontSemiBold,
  },
});

export default PrimaryButton;