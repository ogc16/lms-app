import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { useTheme } from '../context/ThemeContext';

export default function ProgressBar({ progress, color, backgroundColor, height, showLabel, labelColor }) {
  const { theme } = useTheme();
  return (
    <View style={styles.container}>
      <View style={[styles.bar, { height, backgroundColor: backgroundColor || theme.border }]}>
        <View style={[styles.fill, { width: `${progress}%`, backgroundColor: color || '#4A90D9' }]} />
      </View>
      {showLabel && (
        <Text style={[styles.label, { color: labelColor || theme.textSecondary }]}>{progress}% complete</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  bar: {
    borderRadius: 5,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    borderRadius: 5,
  },
  label: {
    fontSize: 12,
    marginTop: 4,
  },
});

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  height: PropTypes.number,
  showLabel: PropTypes.bool,
  labelColor: PropTypes.string,
};

ProgressBar.defaultProps = {
  height: 6,
  showLabel: false,
};
