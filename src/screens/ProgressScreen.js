import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
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

export default function ProgressScreen({ navigation }) {
  const { theme } = useTheme();
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
        <Text style={[styles.headerTitle, { color: theme.headerText }]}>📊 Your Progress</Text>
        <Text style={[styles.headerSubtitle, { color: theme.textSecondary }]}>Track your learning journey</Text>
      </View>

      <View style={[styles.overallCard, { backgroundColor: theme.surface }]}>
        <Text style={styles.overallPercent}>{overallPercent}%</Text>
        <Text style={[styles.overallLabel, { color: theme.textSecondary }]}>Overall Complete</Text>
        <View style={[styles.progressBarContainer, { backgroundColor: theme.border }]}>
          <View style={[styles.progressBar, { width: `${overallPercent}%` }]} />
        </View>
        <Text style={[styles.overallStats, { color: theme.textSecondary }]}>
          {completedLessons}/{totalLessons} lessons | {completedQuizzes}/{totalQuizzes} quizzes
        </Text>
      </View>

      <View style={styles.streakCard}>
        <Text style={styles.streakIcon}>🔥</Text>
        <View>
          <Text style={[styles.streakText, { color: theme.text }]}>Keep going!</Text>
          <Text style={[styles.streakSubtext, { color: theme.textSecondary }]}>
            {completedLessons > 0
              ? `You've completed ${completedLessons} lessons so far`
              : 'Start a lesson to begin tracking'}
          </Text>
        </View>
      </View>

      {courses.map((course) => {
        const courseProgress = getCourseProgress(course.id, course.chapters);
        return (
          <TouchableOpacity
            key={course.id}
            style={[styles.courseCard, { backgroundColor: theme.surface }]}
            onPress={() => navigation.navigate('CourseDetail', { courseId: course.id })}
          >
            <View style={styles.courseHeader}>
              <Text style={styles.courseIcon}>{course.icon}</Text>
              <Text style={[styles.courseName, { color: theme.text }]}>{course.title}</Text>
              <Text style={styles.coursePercent}>{courseProgress}%</Text>
            </View>
            <View style={[styles.progressBarContainer, { backgroundColor: theme.border }]}>
              <View style={[styles.progressBar, {
                width: `${courseProgress}%`,
                backgroundColor: course.color,
              }]} />
            </View>
            <View style={styles.chapterSummary}>
              {course.chapters.map((ch, idx) => {
                const chCompleted = ch.lessons.every(l => isLessonComplete(course.id, l.id));
                return (
                  <View key={ch.id} style={[
                    styles.chapterDot,
                    chCompleted ? styles.chapterDone : { backgroundColor: theme.border },
                  ]}>
                    <Text style={[styles.chapterDotText, chCompleted && styles.chapterDotTextDone]}>
                      {idx + 1}
                    </Text>
                  </View>
                );
              })}
            </View>
          </TouchableOpacity>
        );
      })}

      <TouchableOpacity style={styles.resetButton} onPress={resetProgress}>
        <Text style={styles.resetButtonText}>🔄 Reset All Progress</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    paddingTop: 48,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
  },
  headerSubtitle: {
    fontSize: 14,
    marginTop: 4,
  },
  overallCard: {
    margin: 16,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  overallPercent: {
    fontSize: 56,
    fontWeight: '800',
    color: '#4A90D9',
  },
  overallLabel: {
    fontSize: 16,
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
  streakCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF8E1',
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 12,
    padding: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#F39C12',
  },
  streakIcon: {
    fontSize: 32,
    marginRight: 16,
  },
  streakText: {
    fontSize: 18,
    fontWeight: '700',
  },
  streakSubtext: {
    fontSize: 13,
  },
  courseCard: {
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 12,
    padding: 16,
    boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.08)',
    elevation: 2,
  },
  courseHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  courseIcon: {
    fontSize: 28,
    marginRight: 12,
  },
  courseName: {
    flex: 1,
    fontSize: 18,
    fontWeight: '700',
  },
  coursePercent: {
    fontSize: 18,
    fontWeight: '700',
    color: '#4A90D9',
  },
  chapterSummary: {
    flexDirection: 'row',
    marginTop: 10,
    gap: 6,
  },
  chapterDot: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chapterDone: {
    backgroundColor: '#27AE60',
  },
  chapterDotText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#95A5A6',
  },
  chapterDotTextDone: {
    color: '#fff',
  },
  resetButton: {
    margin: 16,
    marginBottom: 32,
    padding: 14,
    borderRadius: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E74C3C',
    alignItems: 'center',
  },
  resetButtonText: {
    color: '#E74C3C',
    fontSize: 15,
    fontWeight: '600',
  },
});

ProgressScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
