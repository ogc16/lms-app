import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import PropTypes from 'prop-types';
import { useTheme } from '../context/ThemeContext';
import ProgressBar from './ProgressBar';

export default function CourseCard({ course, progress, onPress, style, variant }) {
  const { theme } = useTheme();
  const safeProgress = isNaN(progress) || progress < 0 ? 0 : progress;
  if (variant === 'compact') {
    return (
      <TouchableOpacity
        style={[styles.compactCard, { backgroundColor: theme.surface }, style]}
        onPress={onPress}
        activeOpacity={0.7}
        accessibilityLabel={`${course.title}, ${safeProgress}% complete`}
        accessibilityRole="button"
        android_ripple={{ color: 'rgba(0,0,0,0.1)', borderless: false }}
      >
        <View style={styles.compactHeader}>
          <Text style={styles.compactIcon} accessibilityRole="image">{course.icon}</Text>
          <View style={styles.compactInfo}>
            <Text style={[styles.compactName, { color: theme.text }]}>{course.title}</Text>
            <ProgressBar progress={safeProgress} color={course.color} backgroundColor={course.bgColor} height={Platform.OS === 'android' ? 8 : 6} />
          </View>
          <Text style={[styles.compactPercent, { color: course.color }]}>{safeProgress}%</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      style={[styles.card, { borderLeftColor: course.color, backgroundColor: theme.surface }, style]}
      onPress={onPress}
      activeOpacity={0.7}
      accessibilityLabel={`${course.title}, ${safeProgress}% complete`}
      accessibilityRole="button"
      android_ripple={{ color: 'rgba(0,0,0,0.1)', borderless: false }}
    >
      <View style={styles.header}>
        <Text style={styles.icon} accessibilityRole="image">{course.icon}</Text>
        <View style={styles.info}>
          <Text style={[styles.title, { color: theme.text }]}>{course.title}</Text>
          <Text style={[styles.subtitle, { color: theme.textSecondary }]}>{course.subtitle}</Text>
        </View>
      </View>
      <Text style={[styles.desc, { color: theme.textSecondary }]} numberOfLines={2}>{course.description}</Text>
      <ProgressBar progress={safeProgress} showLabel height={Platform.OS === 'android' ? 10 : 6} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 14,
    padding: 16,
    marginBottom: 14,
    borderLeftWidth: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    fontSize: 36,
    marginRight: 14,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 13,
    marginTop: 1,
  },
  desc: {
    fontSize: 13,
    lineHeight: 19,
    marginBottom: 10,
  },
  compactCard: {
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  compactHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  compactIcon: {
    fontSize: 26,
    marginRight: 10,
  },
  compactInfo: {
    flex: 1,
  },
  compactName: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 6,
  },
  compactPercent: {
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 10,
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
