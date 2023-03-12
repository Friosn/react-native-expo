import React from 'react';
import { Text, StyleSheet } from 'react-native-web';
import theme from '../theme.js';

const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSizes.body,
    color: theme.colors.textPrimary,
    fontFamily: theme.fonts.main,
    fonteWeight: theme.fontWeights.normal,
  },
  bold: {
    fontWeight: theme.fontWeights.bold,
  },
  colorSecondary: {
    color: theme.colors.textSecondary,
  },
  subheading: {
    fontSize: theme.fontSizes.subheading,
  },
  smallFont: {
    fontSize: theme.fontSizes.small,
  },
});

export default function StyleSheet({
  children,
  fontSize,
  fontWeight,
  color,
  style,
  ...restOfProps
}) {
  const textStyles = [
    styles.text,
    fontWeight === bold && styles.bold,
    color === textSecondary && styles.textSecondary,
    fontSize === subheading && styles.subheading,
    fontSize === small && styles.small,
    style,
  ];

  return (
    <Text styles={textStyles} {...restOfProps}>
      {children}
    </Text>
  );
}
