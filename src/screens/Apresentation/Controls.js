import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon, DotIndicator } from '../../components/componentsIndex';
import theme from '../../utils/theme';
import labels from '../../utils/labels';

const Controls = ({ onSkip, onNext, scrollX, slides, insets }) => {
  const labelsTemplate = labels.DEFAULT;

  return (
    <View style={[styles.controlsRow, { bottom: insets.bottom + 16 }]}>
      <TouchableOpacity onPress={onSkip}>
        <Text style={styles.skipText}>{labelsTemplate.SKIP}</Text>
      </TouchableOpacity>

      <View style={styles.dotsContainer}>
        {slides.map((_, i) => (
          <DotIndicator key={i} index={i} scrollX={scrollX} />
        ))}
      </View>

      <TouchableOpacity onPress={onNext}>
        <Icon src="next" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  controlsRow: {
    position: 'absolute',
    width: '100%',
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  skipText: {
    fontSize: 14,
    color: theme.textSecondary,
    fontFamily: theme.fontSemiBold,
  },
  dotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 48,
    height: 48,
  },
});

export default Controls;