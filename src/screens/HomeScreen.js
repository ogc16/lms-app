import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useProgress } from '../context/ProgressContext';
import { pythonCourse } from '../data/pythonCourse';
import { cppCourse } from '../data/cppCourse';

const courses = [pythonCourse, cppCourse];

export default function HomeScreen({ navigation }) {
  const { getCourseProgress } = useProgress();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>📚 CodeLMS</Text>
        <Text style={styles.tagline}>Learn Python & C++</Text>
        <Text style={styles.subtitle}>Interactive courses with lessons and quizzes</Text>
      </View>

      <View style={styles.coursesSection}>
        <Text style={styles.sectionTitle}>Available Courses</Text>
        {courses.map((course) => {
          const progress = getCourseProgress(course.id, course.chapters);
          return (
            <TouchableOpacity
              key={course.id}
              style={[styles.courseCard, { borderLeftColor: course.color }]}
              onPress={() => navigation.navigate('CourseDetail', { courseId: course.id })}
              activeOpacity={0.7}
            >
              <View style={styles.courseHeader}>
                <Text style={styles.courseIcon}>{course.icon}</Text>
                <View style={styles.courseInfo}>
                  <Text style={styles.courseTitle}>{course.title}</Text>
                  <Text style={styles.courseSubtitle}>{course.subtitle}</Text>
                </View>
              </View>
              <Text style={styles.courseDesc} numberOfLines={2}>{course.description}</Text>
              <View style={styles.progressBarContainer}>
                <View style={[styles.progressBar, { width: `${progress}%`, backgroundColor: course.color }]} />
              </View>
              <Text style={styles.progressText}>{progress}% complete</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={styles.quickActions}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate('Progress')}
        >
          <Text style={styles.actionIcon}>📊</Text>
          <Text style={styles.actionText}>View My Progress</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  header: {
    backgroundColor: '#4A90D9',
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
    color: '#2C3E50',
    marginBottom: 16,
  },
  courseCard: {
    backgroundColor: '#fff',
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
    color: '#2C3E50',
  },
  courseSubtitle: {
    fontSize: 14,
    color: '#7F8C8D',
    marginTop: 2,
  },
  courseDesc: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 12,
  },
  progressBarContainer: {
    height: 6,
    backgroundColor: '#E8EDF2',
    borderRadius: 3,
    marginBottom: 6,
  },
  progressBar: {
    height: '100%',
    borderRadius: 3,
  },
  progressText: {
    fontSize: 12,
    color: '#95A5A6',
  },
  quickActions: {
    paddingHorizontal: 20,
    paddingBottom: 32,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
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
    color: '#2C3E50',
  },
});
