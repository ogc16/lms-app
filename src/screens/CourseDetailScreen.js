import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { useProgress } from '../context/ProgressContext';
import { useTheme } from '../context/ThemeContext';
import { coursesMap } from '../data/courses';
import ProgressBar from '../components/ProgressBar';
import LessonListItem from '../components/LessonListItem';

export default function CourseDetailScreen({ route, navigation }) {
  const { courseId } = route.params;
  const course = coursesMap[courseId];
  const { isLessonComplete, getQuizScore, getCourseProgress, isCourseComplete } = useProgress();
  const { theme, isDark } = useTheme();

  if (!course) {
    return (
      <View style={styles.errorContainer}>
        <Text>Course not found</Text>
      </View>
    );
  }

  const overallProgress = getCourseProgress(course.id, course.chapters);
  const completed = isCourseComplete(course.id, course.chapters);

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={[styles.header, { backgroundColor: course.color }]}>
        <Text style={styles.courseIcon}>{course.icon}</Text>
        <Text style={styles.courseTitle}>{course.title}</Text>
        <Text style={styles.courseDesc}>{course.description}</Text>
        <ProgressBar progress={overallProgress} color="#fff" backgroundColor="rgba(255,255,255,0.3)" height={8} showLabel labelColor="#E8F0FE" />
      </View>

      {completed && (
        <TouchableOpacity
          style={[styles.certificateBanner, { backgroundColor: isDark ? '#2C2416' : '#f0ebc2', borderColor: isDark ? '#D4B896' : '#5e0e08' }]}
          onPress={() => navigation.navigate('Certificate', { courseId: course.id })}
          activeOpacity={0.7}
          accessibilityLabel="View course certificate"
          accessibilityRole="button"
        >
          <Text style={styles.certificateIcon}>🏆</Text>
          <View style={styles.certificateBannerText}>
            <Text style={[styles.certificateBannerTitle, { color: isDark ? '#D4B896' : '#5e0e08' }]}>Course Completed!</Text>
            <Text style={[styles.certificateBannerSubtitle, { color: isDark ? '#B89B72' : '#5e0e08' }]}>Tap to view your certificate</Text>
          </View>
          <Text style={[styles.certificateArrow, { color: isDark ? '#D4B896' : '#5e0e08' }]}>›</Text>
        </TouchableOpacity>
      )}

      <View style={styles.chaptersContainer}>
        {course.chapters.map((chapter, chIndex) => {
          const completedLessons = chapter.lessons.filter(l => isLessonComplete(course.id, l.id)).length;
          const quizScore = getQuizScore(course.id, chapter.id);

          return (
            <View key={chapter.id} style={[styles.chapterCard, { backgroundColor: theme.surface }]}>
              <View style={styles.chapterHeader}>
                <View style={[styles.chapterNumBadge, { backgroundColor: theme.border }]}>
                  <Text style={styles.chapterNum}>{chIndex + 1}</Text>
                </View>
                <View style={styles.chapterInfo}>
                  <Text style={[styles.chapterTitle, { color: theme.text }]}>{chapter.title}</Text>
                  <Text style={[styles.chapterProgress, { color: theme.textSecondary }]}>
                    {completedLessons}/{chapter.lessons.length} lessons
                    {quizScore ? ` | Quiz: ${quizScore.score}/${quizScore.total}` : ''}
                  </Text>
                </View>
              </View>

              {chapter.lessons.map((lesson) => {
                const completed = isLessonComplete(course.id, lesson.id);
                return (
                  <LessonListItem
                    key={lesson.id}
                    lesson={lesson}
                    completed={completed}
                    onPress={() => navigation.navigate('Lesson', {
                      courseId: course.id,
                      chapterId: chapter.id,
                      lessonId: lesson.id,
                    })}
                  />
                );
              })}

              <TouchableOpacity
                style={[styles.quizButton, { backgroundColor: isDark ? '#2C2416' : '#FFF8E1' }]}
                onPress={() => navigation.navigate('Quiz', {
                  courseId: course.id,
                  chapterId: chapter.id,
                })}
                activeOpacity={0.7}
                accessibilityLabel={quizScore ? `Retake quiz, previous score ${quizScore.score} out of ${quizScore.total}` : 'Take chapter quiz'}
                accessibilityRole="button"
              >
                <Text style={styles.quizIcon}>🧠</Text>
                <Text style={styles.quizText}>
                  {quizScore ? `Retake Quiz (${quizScore.score}/${quizScore.total})` : 'Take Chapter Quiz'}
                </Text>
                <Text style={[styles.lessonArrow, { color: theme.textSecondary }]}>›</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    padding: 24,
    paddingTop: 48,
    alignItems: 'center',
  },
  courseIcon: {
    fontSize: 48,
    marginBottom: 8,
  },
  courseTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 8,
  },
  courseDesc: {
    fontSize: 14,
    color: '#E8F0FE',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 16,
  },
  certificateBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 16,
    padding: 16,
    borderRadius: 16,
    borderWidth: 2,
    elevation: 4,
    shadowColor: '#5e0e08',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
  },
  certificateIcon: {
    fontSize: 36,
    marginRight: 14,
  },
  certificateBannerText: {
    flex: 1,
  },
  certificateBannerTitle: {
    fontSize: 18,
    fontWeight: '800',
  },
  certificateBannerSubtitle: {
    fontSize: 13,
    marginTop: 2,
    opacity: 0.8,
  },
  certificateArrow: {
    fontSize: 24,
    fontWeight: '700',
    marginLeft: 8,
  },
  chaptersContainer: {
    padding: 16,
  },
  chapterCard: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  chapterHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  chapterNumBadge: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  chapterNum: {
    fontSize: 16,
    fontWeight: '700',
    color: '#4A90D9',
  },
  chapterInfo: {
    flex: 1,
  },
  chapterTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
  chapterProgress: {
    fontSize: 13,
    marginTop: 2,
  },
  lessonArrow: {
    fontSize: 20,
    fontWeight: '700',
  },
  quizIcon: {
    fontSize: 18,
    marginRight: 12,
  },
  quizText: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    color: '#F39C12',
  },
  quizButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8,
    marginTop: 4,
    borderRadius: 10,
  },
});

CourseDetailScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      courseId: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
