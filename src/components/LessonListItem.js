import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { useTheme } from '../context/ThemeContext';

export default function LessonListItem({ lesson, completed, onPress }) {
  const { theme } = useTheme();
  return (
    <TouchableOpacity
      style={[styles.item, { borderBottomColor: theme.border }]}
      onPress={onPress}
      activeOpacity={0.7}
      accessibilityLabel={`${completed ? 'Completed' : 'Start'} lesson: ${lesson.title}`}
      accessibilityRole="button"
    >
      <Text style={styles.status} accessibilityRole="image">{completed ? '✅' : '📖'}</Text>
      <Text style={[styles.title, { color: theme.text }, completed && { color: theme.textSecondary }]}>
        {lesson.title}
      </Text>
      <Text style={[styles.arrow, { color: theme.textSecondary }]}>›</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
  },
  status: {
    fontSize: 16,
    marginRight: 12,
  },
  title: {
    flex: 1,
    fontSize: 15,
    fontWeight: '500',
  },
  arrow: {
    fontSize: 20,
    fontWeight: '700',
  },
});

LessonListItem.propTypes = {
  lesson: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  completed: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
};
