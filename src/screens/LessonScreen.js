import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { useProgress } from '../context/ProgressContext';
import { useTheme } from '../context/ThemeContext';
import { coursesMap } from '../data/courses';

const courses = coursesMap;

export default function LessonScreen({ route, navigation }) {
  const { courseId, chapterId, lessonId } = route.params;
  const { markLessonComplete, isLessonComplete } = useProgress();
  const { theme } = useTheme();

  const course = courses[courseId];
  if (!course) {
    return (
      <View style={[styles.errorContainer, { backgroundColor: theme.background }]}>
        <Text style={{ color: theme.text }}>Course not found</Text>
      </View>
    );
  }

  const chapter = course.chapters.find(ch => ch.id === chapterId);
  if (!chapter) {
    return (
      <View style={[styles.errorContainer, { backgroundColor: theme.background }]}>
        <Text style={{ color: theme.text }}>Chapter not found</Text>
      </View>
    );
  }

  const lesson = chapter.lessons.find(l => l.id === lessonId);
  if (!lesson) {
    return (
      <View style={[styles.errorContainer, { backgroundColor: theme.background }]}>
        <Text style={{ color: theme.text }}>Lesson not found</Text>
      </View>
    );
  }

  const completed = isLessonComplete(courseId, lessonId);
  const [showCode, setShowCode] = useState(() => {
    const initial = {};
    lesson.codeExamples.forEach((_, i) => { initial[i] = true; });
    return initial;
  });

  useEffect(() => {
    const initial = {};
    lesson.codeExamples.forEach((_, i) => { initial[i] = true; });
    setShowCode(initial);
  }, [lessonId]);

  const toggleCode = (index) => {
    setShowCode(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const handleToggleAll = () => {
    const allHidden = lesson.codeExamples.every((_, i) => !showCode[i]);
    const newVal = allHidden;
    const next = {};
    lesson.codeExamples.forEach((_, i) => { next[i] = newVal; });
    setShowCode(next);
  };

  const handleComplete = () => {
    markLessonComplete(courseId, lessonId);

    if (!navigation || !navigation.replace || !navigation.navigate) {
      return;
    }

    const chIndex = course.chapters.findIndex(ch => ch.id === chapterId);
    const lIndex = chapter.lessons.findIndex(l => l.id === lessonId);

    if (chIndex === -1 || lIndex === -1) {
      navigation.navigate('CourseDetail', { courseId });
      return;
    }

    if (lIndex < chapter.lessons.length - 1) {
      const nextLesson = chapter.lessons[lIndex + 1];
      if (!nextLesson) {
        navigation.navigate('CourseDetail', { courseId });
        return;
      }
      navigation.replace('Lesson', {
        courseId, chapterId, lessonId: nextLesson.id,
      });
    } else {
      navigation.navigate('Quiz', { courseId, chapterId });
    }
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={[styles.header, { backgroundColor: theme.headerBg }]}>
        <Text style={[styles.breadcrumb, { color: theme.textSecondary }]}>
          {chapter.title} › {lesson.title}
        </Text>
        <Text style={[styles.title, { color: theme.headerText }]}>{lesson.title}</Text>
      </View>

      <View style={styles.content}>
        <Text style={[styles.contentText, { color: theme.text }]}>{lesson.content}</Text>

        {lesson.codeExamples.length > 0 && (
          <View style={styles.codeSection}>
            <View style={styles.codeSectionHeader}>
              <Text style={[styles.codeSectionTitle, { color: theme.text }]}>💻 Code Examples</Text>
              <TouchableOpacity
                style={styles.toggleAllButton}
                onPress={handleToggleAll}
                accessibilityLabel={lesson.codeExamples.every((_, i) => !showCode[i]) ? 'Show all code examples' : 'Hide all code examples'}
                accessibilityRole="button"
              >
                <Text style={{ color: '#4A90D9', fontSize: 14, fontWeight: '600' }}>
                  {lesson.codeExamples.every((_, i) => !showCode[i]) ? 'Show All' : 'Hide All'}
                </Text>
              </TouchableOpacity>
            </View>
            {lesson.codeExamples.map((example, index) => (
              <View key={example.title} style={styles.codeCard}>
                <TouchableOpacity
                  style={styles.codeHeader}
                  onPress={() => toggleCode(index)}
                  accessibilityLabel={`${showCode[index] ? 'Hide' : 'Show'} code example: ${example.title}`}
                  accessibilityRole="button"
                >
                  <Text style={styles.codeTitle}>{example.title}</Text>
                  <Text style={styles.codeToggle}>{showCode[index] ? '▲' : '▼'}</Text>
                </TouchableOpacity>
                {showCode[index] && (
                  <View style={styles.codeBlock}>
                    <Text style={styles.codeText}>{example.code}</Text>
                  </View>
                )}
              </View>
            ))}
          </View>
        )}
      </View>

      <TouchableOpacity
        style={[styles.completeButton, completed && styles.completedButton]}
        onPress={handleComplete}
        activeOpacity={0.8}
        accessibilityLabel={completed ? 'Continue to next lesson' : 'Mark as complete and continue'}
        accessibilityRole="button"
      >
        <Text style={styles.completeButtonText}>
          {completed ? '✅ Continue to Next Lesson' : '✓ Mark as Complete & Continue'}
        </Text>
      </TouchableOpacity>
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
    padding: 20,
    paddingTop: 48,
  },
  breadcrumb: {
    fontSize: 13,
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
  },
  content: {
    padding: 20,
  },
  contentText: {
    fontSize: 16,
    lineHeight: 26,
  },
  codeSection: {
    marginTop: 24,
  },
  codeSectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  codeSectionTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
  toggleAllButton: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  codeCard: {
    backgroundColor: '#1E1E2E',
    borderRadius: 12,
    marginBottom: 12,
    overflow: 'hidden',
  },
  codeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#2D2D44',
  },
  codeTitle: {
    color: '#A0A0C0',
    fontSize: 13,
    fontWeight: '600',
  },
  codeToggle: {
    color: '#A0A0C0',
    fontSize: 12,
  },
  codeBlock: {
    padding: 16,
  },
  codeText: {
    fontFamily: 'monospace',
    fontSize: 13,
    lineHeight: 20,
    color: '#E6E6FA',
    letterSpacing: 0.3,
  },
  completeButton: {
    backgroundColor: '#27AE60',
    marginHorizontal: 20,
    marginBottom: 32,
    borderRadius: 12,
    padding: 18,
    alignItems: 'center',
  },
  completedButton: {
    backgroundColor: '#1E8449',
  },
  completeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});

LessonScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    replace: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      courseId: PropTypes.string.isRequired,
      chapterId: PropTypes.string.isRequired,
      lessonId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
