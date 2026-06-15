import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { useProgress } from '../context/ProgressContext';
import { pythonCourse } from '../data/pythonCourse';
import { cppCourse } from '../data/cppCourse';

const courses = { python: pythonCourse, cpp: cppCourse };

export default function CourseDetailScreen({ route, navigation }) {
  const { courseId } = route.params;
  const course = courses[courseId];
  const { isLessonComplete, getQuizScore, getCourseProgress } = useProgress();

  if (!course) {
    return (
      <View style={styles.errorContainer}>
        <Text>Course not found</Text>
      </View>
    );
  }

  const overallProgress = getCourseProgress(course.id, course.chapters);

  return (
    <ScrollView style={styles.container}>
      <View style={[styles.header, { backgroundColor: course.color }]}>
        <Text style={styles.courseIcon}>{course.icon}</Text>
        <Text style={styles.courseTitle}>{course.title}</Text>
        <Text style={styles.courseDesc}>{course.description}</Text>
        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBar, { width: `${overallProgress}%` }]} />
        </View>
        <Text style={styles.progressText}>{overallProgress}% complete</Text>
      </View>

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
    backgroundColor: '#F5F7FA',
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
