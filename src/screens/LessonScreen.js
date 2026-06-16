import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { useProgress } from '../context/ProgressContext';
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

export default function LessonScreen({ route, navigation }) {
  const { courseId, chapterId, lessonId } = route.params;
  const { markLessonComplete, isLessonComplete } = useProgress();

  const course = courses[courseId];
  const chapter = course.chapters.find(ch => ch.id === chapterId);
  const lesson = chapter.lessons.find(l => l.id === lessonId);

  if (!lesson) {
    return (
      <View style={styles.errorContainer}>
        <Text>Lesson not found</Text>
      </View>
    );
  }

  const completed = isLessonComplete(courseId, lessonId);
  const [showCode, setShowCode] = useState({});
  const [showAllCode, setShowAllCode] = useState(true);

  const toggleCode = (index) => {
    setShowCode(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const handleComplete = () => {
    markLessonComplete(courseId, lessonId);

    const chIndex = course.chapters.findIndex(ch => ch.id === chapterId);
    const lIndex = chapter.lessons.findIndex(l => l.id === lessonId);

    if (lIndex < chapter.lessons.length - 1) {
      const nextLesson = chapter.lessons[lIndex + 1];
      navigation.replace('Lesson', {
        courseId, chapterId, lessonId: nextLesson.id,
      });
    } else if (chIndex < course.chapters.length - 1) {
      // Move to next chapter's first lesson
      const nextChapter = course.chapters[chIndex + 1];
      const nextLesson = nextChapter.lessons[0];
      navigation.replace('Lesson', {
        courseId, chapterId: nextChapter.id, lessonId: nextLesson.id,
      });
    } else {
      navigation.goBack();
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.breadcrumb}>
          {chapter.title} › {lesson.title}
        </Text>
        <Text style={styles.title}>{lesson.title}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.contentText}>{lesson.content}</Text>

        {lesson.codeExamples.length > 0 && (
          <View style={styles.codeSection}>
            <Text style={styles.codeSectionTitle}>💻 Code Examples</Text>
            {!showAllCode && (
              <TouchableOpacity
                style={styles.showCodeButton}
                onPress={() => setShowAllCode(true)}
              >
                <Text style={styles.showCodeText}>Show Code Examples</Text>
              </TouchableOpacity>
            )}
            {lesson.codeExamples.map((example, index) => (
              <View key={example.title} style={styles.codeCard}>
                <TouchableOpacity
                  style={styles.codeHeader}
                  onPress={() => toggleCode(index)}
                >
                  <Text style={styles.codeTitle}>{example.title}</Text>
                  <Text style={styles.codeToggle}>{showCode[index] !== false ? '▲' : '▼'}</Text>
                </TouchableOpacity>
                {(showCode[index] !== false) && (
                  <View style={styles.codeBlock}>
                    <Text style={styles.codeText}>{example.code}</Text>
                  </View>
                )}
              </View>
            ))}
          </View>
        )}

        {showAllCode && lesson.codeExamples.length > 0 && (
          <TouchableOpacity
            style={styles.hideAllButton}
            onPress={() => setShowAllCode(false)}
          >
            <Text style={styles.hideAllText}>Hide Code Examples</Text>
          </TouchableOpacity>
        )}
      </View>

      <TouchableOpacity
        style={[styles.completeButton, completed && styles.completedButton]}
        onPress={handleComplete}
        activeOpacity={0.8}
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
    backgroundColor: '#F5F7FA',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#2C3E50',
    padding: 20,
    paddingTop: 48,
  },
  breadcrumb: {
    fontSize: 13,
    color: '#95A5A6',
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#fff',
  },
  content: {
    padding: 20,
  },
  contentText: {
    fontSize: 16,
    lineHeight: 26,
    color: '#2C3E50',
  },
  codeSection: {
    marginTop: 24,
  },
  codeSectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 12,
  },
  showCodeButton: {
    backgroundColor: '#4A90D9',
    borderRadius: 8,
    padding: 14,
    alignItems: 'center',
    marginBottom: 12,
  },
  showCodeText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
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
  hideAllButton: {
    alignItems: 'center',
    padding: 12,
    marginBottom: 8,
  },
  hideAllText: {
    color: '#95A5A6',
    fontSize: 14,
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
