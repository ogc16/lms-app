import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch } from 'react-native';
import PropTypes from 'prop-types';
import { useProgress } from '../context/ProgressContext';
import { useTheme } from '../context/ThemeContext';
import { pythonCourse } from '../data/pythonCourse';
import { cppCourse } from '../data/cppCourse';
import { cybersecurityCourse } from '../data/cybersecurityCourse';
import { ethicalhackerCourse } from '../data/ethicalhackerCourse';
import { bitCoreCourse } from '../data/bitCoreCourse';
import { goCourse } from '../data/goCourse';
import { swiftCourse } from '../data/swiftCourse';
import { csharpCourse } from '../data/csharpCourse';
import { vbCourse } from '../data/vbCourse';
import { webDevCourse } from '../data/webDevCourse';
import { sqlCourse } from '../data/sqlCourse';
import { nextjsCourse } from '../data/nextjsCourse';
import { reactNativeCourse } from '../data/reactNativeCourse';

const courses = [pythonCourse, cppCourse, cybersecurityCourse, ethicalhackerCourse, bitCoreCourse, goCourse, swiftCourse, csharpCourse, vbCourse, webDevCourse, sqlCourse, nextjsCourse, reactNativeCourse];

export default function ProfileScreen({ navigation }) {
  const { theme, isDark, toggleTheme } = useTheme();
  const { getCourseProgress, isLessonComplete, getQuizScore, progress, resetProgress } = useProgress();

  let totalLessons = 0;
  let completedLessons = 0;
  let totalQuizzes = 0;
  let completedQuizzes = 0;

  courses.forEach(course => {
    course.chapters.forEach(ch => {
      ch.lessons.forEach(lesson => {
        totalLessons++;
        if (isLessonComplete(course.id, lesson.id)) completedLessons++;
      });
      if (ch.quiz) {
        totalQuizzes++;
        if (getQuizScore(course.id, ch.id)) completedQuizzes++;
      }
    });
  });

  const overallPercent = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={[styles.header, { backgroundColor: theme.headerBg }]}>
        <View style={styles.avatarContainer}>
          <Text style={styles.avatar}>👤</Text>
        </View>
        <Text style={[styles.headerTitle, { color: theme.headerText }]}>Learner</Text>
        <Text style={[styles.headerSubtitle, { color: theme.textSecondary }]}>Keep learning every day</Text>
      </View>

      <View style={styles.statsRow}>
        <View style={[styles.statCard, { backgroundColor: theme.surface }]}>
          <Text style={styles.statNumber}>{completedLessons}</Text>
          <Text style={[styles.statLabel, { color: theme.textSecondary }]}>Lessons Done</Text>
        </View>
        <View style={[styles.statCard, { backgroundColor: theme.surface }]}>
          <Text style={styles.statNumber}>{totalLessons}</Text>
          <Text style={[styles.statLabel, { color: theme.textSecondary }]}>Total Lessons</Text>
        </View>
        <View style={[styles.statCard, { backgroundColor: theme.surface }]}>
          <Text style={styles.statNumber}>{completedQuizzes}</Text>
          <Text style={[styles.statLabel, { color: theme.textSecondary }]}>Quizzes Passed</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>Overall Progress</Text>
        <View style={[styles.overallCard, { backgroundColor: theme.surface }]}>
          <Text style={styles.overallPercent}>{overallPercent}%</Text>
          <View style={[styles.progressBarContainer, { backgroundColor: theme.border }]}>
            <View style={[styles.progressBar, { width: `${overallPercent}%` }]} />
          </View>
          <Text style={[styles.overallStats, { color: theme.textSecondary }]}>
            {completedLessons}/{totalLessons} lessons | {completedQuizzes}/{totalQuizzes} quizzes
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>Course Breakdown</Text>
        {courses.map(course => {
          const courseProgress = getCourseProgress(course.id, course.chapters);
          return (
            <TouchableOpacity
              key={course.id}
              style={[styles.courseCard, { backgroundColor: theme.surface }]}
              onPress={() => navigation.navigate('CourseDetail', { courseId: course.id })}
              activeOpacity={0.7}
            >
              <View style={styles.courseHeader}>
                <Text style={styles.courseIcon}>{course.icon}</Text>
                <View style={styles.courseInfo}>
                  <Text style={[styles.courseName, { color: theme.text }]}>{course.title}</Text>
                  <View style={[styles.courseProgressBar, { backgroundColor: course.bgColor }]}>
                    <View style={[styles.courseProgressFill, { width: `${courseProgress}%`, backgroundColor: course.color }]} />
                  </View>
                </View>
                <Text style={[styles.coursePercent, { color: course.color }]}>{courseProgress}%</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>Settings</Text>
        <View style={[styles.settingRow, { backgroundColor: theme.surface }]}>
          <View style={styles.settingInfo}>
            <Text style={styles.settingIcon}>{isDark ? '🌙' : '☀️'}</Text>
            <View>
              <Text style={[styles.settingLabel, { color: theme.text }]}>Dark Mode</Text>
              <Text style={[styles.settingDescription, { color: theme.textSecondary }]}>Switch between light and dark theme</Text>
            </View>
          </View>
          <Switch
            value={isDark}
            onValueChange={toggleTheme}
            trackColor={{ false: '#BDC3C7', true: '#4A90D9' }}
            thumbColor={isDark ? '#fff' : '#f4f3f4'}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Actions</Text>
        <TouchableOpacity
          style={[styles.actionButton, { backgroundColor: theme.surface }]}
          onPress={() => navigation.navigate('Progress')}
        >
          <Text style={styles.actionIcon}>📊</Text>
          <Text style={[styles.actionText, { color: theme.text }]}>Detailed Progress Report</Text>
          <Text style={[styles.actionArrow, { color: theme.textSecondary }]}>›</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionButton, styles.dangerButton, { backgroundColor: theme.surface }]}
          onPress={() => {
            resetProgress();
            navigation.navigate('Home');
          }}
        >
          <Text style={styles.actionIcon}>🔄</Text>
          <Text style={styles.dangerText}>Reset All Progress</Text>
          <Text style={[styles.actionArrow, { color: theme.textSecondary }]}>›</Text>
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
    paddingTop: 60,
    paddingBottom: 24,
    alignItems: 'center',
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    fontSize: 40,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '800',
  },
  headerSubtitle: {
    fontSize: 14,
    marginTop: 4,
  },
  statsRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginTop: -20,
    gap: 10,
  },
  statCard: {
    flex: 1,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    elevation: 3,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
  },
  statNumber: {
    fontSize: 28,
    fontWeight: '800',
    color: '#4A90D9',
  },
  statLabel: {
    fontSize: 12,
    marginTop: 2,
    textAlign: 'center',
  },
  section: {
    paddingHorizontal: 16,
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
  },
  overallCard: {
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    elevation: 3,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
  },
  overallPercent: {
    fontSize: 48,
    fontWeight: '800',
    color: '#4A90D9',
    marginBottom: 16,
  },
  progressBarContainer: {
    width: '100%',
    height: 10,
    borderRadius: 5,
    marginBottom: 8,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#4A90D9',
    borderRadius: 5,
  },
  overallStats: {
    fontSize: 14,
  },
  courseCard: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
    elevation: 2,
    boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.08)',
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 12,
    padding: 16,
    elevation: 2,
    boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.08)',
  },
  settingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 12,
  },
  settingIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  settingLabel: {
    fontSize: 15,
    fontWeight: '600',
  },
  settingDescription: {
    fontSize: 12,
    marginTop: 2,
  },
  courseHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  courseIcon: {
    fontSize: 28,
    marginRight: 12,
  },
  courseInfo: {
    flex: 1,
  },
  courseName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  courseProgressBar: {
    height: 6,
    borderRadius: 3,
    overflow: 'hidden',
  },
  courseProgressFill: {
    height: '100%',
    borderRadius: 3,
  },
  coursePercent: {
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 12,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
    elevation: 2,
    boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.08)',
  },
  actionIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  actionText: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
  },
  actionArrow: {
    fontSize: 20,
    fontWeight: '700',
    color: '#BDC3C7',
  },
  dangerButton: {
    borderWidth: 1,
    borderColor: '#E74C3C',
  },
  dangerText: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    color: '#E74C3C',
  },
});

ProfileScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
