import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { useTheme } from '../context/ThemeContext';
import ProgressBar from './ProgressBar';

export default function CourseCard({ course, progress, onPress, style, variant }) {
  const { theme } = useTheme();
  if (variant === 'compact') {
    return (
      <TouchableOpacity
        style={[styles.compactCard, { backgroundColor: theme.surface }, style]}
        onPress={onPress}
        activeOpacity={0.7}
        accessibilityLabel={`${course.title}, ${progress}% complete`}
        accessibilityRole="button"
      >
        <View style={styles.compactHeader}>
          <Text style={styles.compactIcon} accessibilityRole="image">{course.icon}</Text>
          <View style={styles.compactInfo}>
            <Text style={[styles.compactName, { color: theme.text }]}>{course.title}</Text>
            <ProgressBar progress={progress} color={course.color} backgroundColor={course.bgColor} />
          </View>
          <Text style={[styles.compactPercent, { color: course.color }]}>{progress}%</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      style={[styles.card, { borderLeftColor: course.color, backgroundColor: theme.surface }, style]}
      onPress={onPress}
        activeOpacity={0.7}
        accessibilityLabel={`${course.title}, ${progress}% complete`}
        accessibilityRole="button"
      >
        <View style={styles.header}>
          <Text style={styles.icon} accessibilityRole="image">{course.icon}</Text>
        <View style={styles.info}>
          <Text style={[styles.title, { color: theme.text }]}>{course.title}</Text>
          <Text style={[styles.subtitle, { color: theme.textSecondary }]}>{course.subtitle}</Text>
        </View>
      </View>
      <Text style={[styles.desc, { color: theme.textSecondary }]} numberOfLines={2}>{course.description}</Text>
      <ProgressBar progress={progress} showLabel />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    borderLeftWidth: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  icon: {
    fontSize: 40,
    marginRight: 16,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 14,
    marginTop: 2,
  },
  desc: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 12,
  },
  compactCard: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  compactHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  compactIcon: {
    fontSize: 28,
    marginRight: 12,
  },
  compactInfo: {
    flex: 1,
  },
  compactName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  compactPercent: {
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 12,
  },
});

CourseCard.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    icon: PropTypes.string,
    color: PropTypes.string,
    bgColor: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  progress: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  variant: PropTypes.oneOf(['full', 'compact']),
};

CourseCard.defaultProps = {
  variant: 'full',
};
