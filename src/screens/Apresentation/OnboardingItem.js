import React from 'react';
import { Text, Animated, StyleSheet, Dimensions } from 'react-native';
import FastImage from 'react-native-fast-image';
import theme from '../../utils/theme';

const { width, height } = Dimensions.get('window');

const OnboardingItem = ({ item, index, scrollX }) => {
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
  const opacity = scrollX.interpolate({
    inputRange,
    outputRange: [0, 1, 0],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View style={[styles.carouselItem, { opacity }]}>
      <FastImage source={item.image} style={styles.carouselImage} resizeMode="contain" />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.carouselText}>{item.text}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  carouselItem: {
    width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  carouselImage: {
    width: '100%',
    height: height * 0.4,
    marginBottom: 32,
  },
  title: {
    fontSize: 22,
    fontFamily: theme.fontSemiBold,
    textAlign: 'center',
    color: theme.textPrimary,
    marginBottom: 16,
    paddingHorizontal: 20,
  },
  carouselText: {
    fontSize: 16,
    textAlign: 'center',
    color: theme.textSecondary,
    fontFamily: theme.fontRegular,
    paddingHorizontal: 20,
  },
});

export default OnboardingItem;