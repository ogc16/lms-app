import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { useProgress } from '../context/ProgressContext';
import { useTheme } from '../context/ThemeContext';
import { coursesArray } from '../data/courses';
import CourseCard from '../components/CourseCard';

export default function HomeScreen({ navigation }) {
  const { theme } = useTheme();
  const { getCourseProgress } = useProgress();

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={[styles.header, { backgroundColor: theme.headerBg }]}>
        <Text style={styles.logo}>📚 MyLec</Text>
        <Text style={styles.tagline}>Learn {coursesArray.length} Courses</Text>
        <Text style={styles.subtitle}>Interactive courses with lessons and quizzes</Text>
      </View>

      <View style={styles.coursesSection}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>Available Courses</Text>
        {coursesArray.map((course) => {
          const progress = getCourseProgress(course.id, course.chapters);
          return (
            <CourseCard
              key={course.id}
              course={course}
              progress={progress}
              onPress={() => navigation.navigate('CourseDetail', { courseId: course.id })}
            />
          );
        })}
      </View>

      <View style={styles.quickActions}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>Quick Actions</Text>
        <TouchableOpacity
          style={[styles.actionButton, { backgroundColor: theme.surface }]}
          onPress={() => navigation.navigate('Progress')}
          accessibilityLabel="View My Progress"
          accessibilityRole="button"
        >
          <Text style={styles.actionIcon}>📊</Text>
          <Text style={[styles.actionText, { color: theme.text }]}>View My Progress</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionButton, { backgroundColor: theme.surface }]}
          onPress={() => navigation.navigate('Profile')}
          accessibilityLabel="My Profile"
          accessibilityRole="button"
        >
          <Text style={styles.actionIcon}>👤</Text>
          <Text style={[styles.actionText, { color: theme.text }]}>My Profile</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 32,
    alignItems: 'center',
  },
  logo: {
    fontSize: 36,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 8,
  },
  tagline: {
    fontSize: 18,
    color: '#E8F0FE',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#B3D4FC',
    textAlign: 'center',
  },
  coursesSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 16,
  },
  quickActions: {
    paddingHorizontal: 20,
    paddingBottom: 32,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    padding: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  actionIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  actionText: {
    fontSize: 16,
    fontWeight: '600',
  },
});

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
