import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { useProgress } from '../context/ProgressContext';
import { useTheme } from '../context/ThemeContext';
import { coursesArray } from '../data/courses';

const courses = coursesArray;

export default function HomeScreen({ navigation }) {
  const { theme } = useTheme();
  const { getCourseProgress } = useProgress();

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={[styles.header, { backgroundColor: theme.headerBg }]}>
        <Text style={styles.logo}>📚 MyLec</Text>
        <Text style={styles.tagline}>Learn Python & C++</Text>
        <Text style={styles.subtitle}>Interactive courses with lessons and quizzes</Text>
      </View>

      <View style={styles.coursesSection}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>Available Courses</Text>
        {courses.map((course) => {
          const progress = getCourseProgress(course.id, course.chapters);
          return (
            <TouchableOpacity
              key={course.id}
              style={[styles.courseCard, { backgroundColor: theme.surface, borderLeftColor: course.color }]}
              onPress={() => navigation.navigate('CourseDetail', { courseId: course.id })}
              activeOpacity={0.7}
            >
              <View style={styles.courseHeader}>
                <Text style={styles.courseIcon}>{course.icon}</Text>
                <View style={styles.courseInfo}>
                  <Text style={[styles.courseTitle, { color: theme.text }]}>{course.title}</Text>
                  <Text style={[styles.courseSubtitle, { color: theme.textSecondary }]}>{course.subtitle}</Text>
                </View>
              </View>
              <Text style={[styles.courseDesc, { color: theme.textSecondary }]} numberOfLines={2}>{course.description}</Text>
              <View style={[styles.progressBarContainer, { backgroundColor: theme.border }]}>
                <View style={[styles.progressBar, { width: `${progress}%`, backgroundColor: course.color }]} />
              </View>
              <Text style={[styles.progressText, { color: theme.textSecondary }]}>{progress}% complete</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={styles.quickActions}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>Quick Actions</Text>
        <TouchableOpacity
          style={[styles.actionButton, { backgroundColor: theme.surface }]}
          onPress={() => navigation.navigate('Progress')}
        >
          <Text style={styles.actionIcon}>📊</Text>
          <Text style={[styles.actionText, { color: theme.text }]}>View My Progress</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionButton, { backgroundColor: theme.surface }]}
          onPress={() => navigation.navigate('Profile')}
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
  courseCard: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    borderLeftWidth: 4,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  courseHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  courseIcon: {
    fontSize: 40,
    marginRight: 16,
  },
  courseInfo: {
    flex: 1,
  },
  courseTitle: {
    fontSize: 22,
    fontWeight: '700',
  },
  courseSubtitle: {
    fontSize: 14,
    marginTop: 2,
  },
  courseDesc: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 12,
  },
  progressBarContainer: {
    height: 6,
    borderRadius: 3,
    marginBottom: 6,
  },
  progressBar: {
    height: '100%',
    borderRadius: 3,
  },
  progressText: {
    fontSize: 12,
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
    boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.08)',
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
