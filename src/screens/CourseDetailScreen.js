import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
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
import { financialRecordsCourse } from '../data/financialRecordsCourse';
import { operationsManagementCourse } from '../data/operationsManagementCourse';
import { financialAccountingCourse } from '../data/financialAccountingCourse';

const courses = { python: pythonCourse, cpp: cppCourse, cybersecurity: cybersecurityCourse, ethicalhacker: ethicalhackerCourse, bit_core: bitCoreCourse, go: goCourse, swift: swiftCourse, csharp: csharpCourse, vb: vbCourse, web_dev: webDevCourse, sql: sqlCourse, nextjs: nextjsCourse, react_native: reactNativeCourse, financial_records: financialRecordsCourse, operations_management: operationsManagementCourse, financial_accounting: financialAccountingCourse };

export default function CourseDetailScreen({ route, navigation }) {
  const { courseId } = route.params;
  const course = courses[courseId];
  const { isLessonComplete, getQuizScore, getCourseProgress, isCourseComplete } = useProgress();
  const { theme } = useTheme();

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
        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBar, { width: `${overallProgress}%` }]} />
        </View>
        <Text style={styles.progressText}>{overallProgress}% complete</Text>
      </View>

      {completed && (
        <TouchableOpacity
          style={styles.certificateBanner}
          onPress={() => navigation.navigate('Certificate', { courseId: course.id })}
          activeOpacity={0.7}
        >
          <Text style={styles.certificateIcon}>🏆</Text>
          <View style={styles.certificateBannerText}>
            <Text style={styles.certificateBannerTitle}>Course Completed!</Text>
            <Text style={styles.certificateBannerSubtitle}>Tap to view your certificate</Text>
          </View>
          <Text style={styles.certificateArrow}>›</Text>
        </TouchableOpacity>
      )}

      <View style={styles.chaptersContainer}>
        {course.chapters.map((chapter, chIndex) => {
          const completedLessons = chapter.lessons.filter(l => isLessonComplete(course.id, l.id)).length;
          const quizScore = getQuizScore(course.id, chapter.id);

          return (
            <View key={chapter.id} style={styles.chapterCard}>
              <View style={styles.chapterHeader}>
                <View style={styles.chapterNumBadge}>
                  <Text style={styles.chapterNum}>{chIndex + 1}</Text>
                </View>
                <View style={styles.chapterInfo}>
                  <Text style={styles.chapterTitle}>{chapter.title}</Text>
                  <Text style={styles.chapterProgress}>
                    {completedLessons}/{chapter.lessons.length} lessons
                    {quizScore ? ` | Quiz: ${quizScore.score}/${quizScore.total}` : ''}
                  </Text>
                </View>
              </View>

              {chapter.lessons.map((lesson) => {
                const completed = isLessonComplete(course.id, lesson.id);
                return (
                  <TouchableOpacity
                    key={lesson.id}
                    style={styles.lessonItem}
                    onPress={() => navigation.navigate('Lesson', {
                      courseId: course.id,
                      chapterId: chapter.id,
                      lessonId: lesson.id,
                    })}
                    activeOpacity={0.7}
                  >
                    <Text style={styles.lessonStatus}>{completed ? '✅' : '📖'}</Text>
                    <Text style={[styles.lessonTitle, completed && styles.lessonCompleted]}>
                      {lesson.title}
                    </Text>
                    <Text style={styles.lessonArrow}>›</Text>
                  </TouchableOpacity>
                );
              })}

              <TouchableOpacity
                style={styles.quizButton}
                onPress={() => navigation.navigate('Quiz', {
                  courseId: course.id,
                  chapterId: chapter.id,
                })}
                activeOpacity={0.7}
              >
                <Text style={styles.quizIcon}>🧠</Text>
                <Text style={styles.quizText}>
                  {quizScore ? `Retake Quiz (${quizScore.score}/${quizScore.total})` : 'Take Chapter Quiz'}
                </Text>
                <Text style={styles.lessonArrow}>›</Text>
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
  progressBarContainer: {
    width: '80%',
    height: 8,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 4,
    marginBottom: 8,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 13,
    color: '#E8F0FE',
  },
  certificateBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 16,
    padding: 16,
    backgroundColor: '#f0ebc2',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#5e0e08',
    elevation: 4,
    boxShadow: '0px 2px 12px rgba(94, 14, 8, 0.15)',
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
    color: '#5e0e08',
  },
  certificateBannerSubtitle: {
    fontSize: 13,
    color: '#5e0e08',
    marginTop: 2,
    opacity: 0.8,
  },
  certificateArrow: {
    fontSize: 24,
    color: '#5e0e08',
    fontWeight: '700',
    marginLeft: 8,
  },
  chaptersContainer: {
    padding: 16,
  },
  chapterCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
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
    backgroundColor: '#E8EDF2',
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
    color: '#2C3E50',
  },
  chapterProgress: {
    fontSize: 13,
    color: '#95A5A6',
    marginTop: 2,
  },
  lessonItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F2F5',
  },
  lessonStatus: {
    fontSize: 16,
    marginRight: 12,
  },
  lessonTitle: {
    flex: 1,
    fontSize: 15,
    color: '#2C3E50',
    fontWeight: '500',
  },
  lessonCompleted: {
    color: '#95A5A6',
  },
  lessonArrow: {
    fontSize: 20,
    color: '#BDC3C7',
    fontWeight: '700',
  },
  quizButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8,
    marginTop: 4,
    backgroundColor: '#FFF8E1',
    borderRadius: 10,
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
