import React from 'react';
import { Animated, StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const DotIndicator = ({ index, scrollX }) => {
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
  const dotWidth = scrollX.interpolate({
    inputRange,
    outputRange: [8, 24, 8],
    extrapolate: 'clamp',
  });
  const backgroundColor = scrollX.interpolate({
    inputRange,
    outputRange: ['#B0B0B0', '#2196F3', '#B0B0B0'],
    extrapolate: 'clamp',
  });

  return <Animated.View style={[styles.dot, { width: dotWidth, backgroundColor }]} />;
};

const styles = StyleSheet.create({
  dot: {
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
});

export default DotIndicator;