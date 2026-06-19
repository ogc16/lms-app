import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { useProgress } from '../context/ProgressContext';
import { useTheme } from '../context/ThemeContext';
import { coursesArray } from '../data/courses';
import useOverallStats from '../hooks/useOverallStats';
import ProgressBar from '../components/ProgressBar';
import CourseCard from '../components/CourseCard';

export default function ProgressScreen({ navigation }) {
  const { theme, isDark } = useTheme();
  const { getCourseProgress, isLessonComplete, getQuizScore, resetProgress } = useProgress();
  const { totalLessons, completedLessons, totalQuizzes, completedQuizzes, overallPercent } = useOverallStats(coursesArray, isLessonComplete, getQuizScore);

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={[styles.header, { backgroundColor: theme.headerBg }]}>
        <Text style={[styles.headerTitle, { color: theme.headerText }]}>📊 Your Progress</Text>
        <Text style={[styles.headerSubtitle, { color: theme.textSecondary }]}>Track your learning journey</Text>
      </View>

      <View style={[styles.overallCard, { backgroundColor: theme.surface }]}>
        <Text style={styles.overallPercent}>{overallPercent}%</Text>
        <Text style={[styles.overallLabel, { color: theme.textSecondary }]}>Overall Complete</Text>
        <ProgressBar progress={overallPercent} backgroundColor={theme.border} height={10} />
        <Text style={[styles.overallStats, { color: theme.textSecondary }]}>
          {completedLessons}/{totalLessons} lessons | {completedQuizzes}/{totalQuizzes} quizzes
        </Text>
      </View>

      <View style={[styles.streakCard, { backgroundColor: isDark ? '#2C2416' : '#FFF8E1' }]}>
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

      {coursesArray.map((course) => {
        const courseProgress = getCourseProgress(course.id, course.chapters);
        return (
          <View key={course.id} style={styles.courseWrapper}>
            <CourseCard
              course={course}
              progress={courseProgress}
              variant="compact"
              onPress={() => navigation.navigate('Home', { screen: 'CourseDetail', params: { courseId: course.id } })}
            />
            <View style={styles.chapterSummary}>
              {course.chapters.map((ch, idx) => {
                const chCompleted = ch.lessons.every(l => isLessonComplete(course.id, l.id));
                return (
                  <View key={`${course.id}-ch-${ch.id || idx}`} style={[
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
          </View>
        );
      })}

      <TouchableOpacity style={[styles.resetButton, { backgroundColor: theme.surface }]} onPress={resetProgress} accessibilityLabel="Reset all progress" accessibilityRole="button">
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
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
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
  overallStats: {
    fontSize: 14,
  },
  streakCard: {
    flexDirection: 'row',
    alignItems: 'center',
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
  courseWrapper: {
    marginHorizontal: 16,
    marginBottom: 12,
  },
  chapterSummary: {
    flexDirection: 'row',
    marginTop: -2,
    marginBottom: 6,
    marginLeft: 52,
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
