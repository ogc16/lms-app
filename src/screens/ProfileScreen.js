import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Switch } from 'react-native';
import PropTypes from 'prop-types';
import { useProgress } from '../context/ProgressContext';
import { useTheme } from '../context/ThemeContext';
import { coursesArray } from '../data/courses';
import useOverallStats from '../hooks/useOverallStats';
import StatCard from '../components/StatCard';
import ProgressBar from '../components/ProgressBar';
import CourseCard from '../components/CourseCard';

export default function ProfileScreen({ navigation }) {
  const { theme, isDark, toggleTheme } = useTheme();
  const { getCourseProgress, isLessonComplete, getQuizScore, resetProgress, userName, setUserName } = useProgress();
  const { totalLessons, completedLessons, totalQuizzes, completedQuizzes, overallPercent } = useOverallStats(coursesArray, isLessonComplete, getQuizScore);
  const [editingName, setEditingName] = useState(false);
  const [nameInput, setNameInput] = useState(userName);

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={[styles.header, { backgroundColor: theme.headerBg }]}>
        <View style={styles.avatarContainer}>
          <Text style={styles.avatar}>👤</Text>
        </View>
        {editingName ? (
          <TextInput
            style={[styles.nameInput, { color: theme.headerText, borderColor: theme.headerText }]}
            value={nameInput}
            onChangeText={setNameInput}
            onBlur={() => {
              setEditingName(false);
              if (nameInput.trim()) setUserName(nameInput.trim());
              else setNameInput(userName);
            }}
            onSubmitEditing={() => {
              setEditingName(false);
              if (nameInput.trim()) setUserName(nameInput.trim());
              else setNameInput(userName);
            }}
            autoFocus
            selectTextOnFocus
          />
        ) : (
          <TouchableOpacity onPress={() => { setNameInput(userName); setEditingName(true); }} accessibilityLabel="Edit name" accessibilityRole="button">
            <Text style={[styles.headerTitle, { color: theme.headerText }]}>{userName} ✏️</Text>
          </TouchableOpacity>
        )}
        <Text style={[styles.headerSubtitle, { color: theme.textSecondary }]}>Keep learning every day</Text>
      </View>

      <View style={styles.statsRow}>
        <StatCard number={completedLessons} label="Lessons Done" backgroundColor={theme.surface} />
        <StatCard number={totalLessons} label="Total Lessons" backgroundColor={theme.surface} />
        <StatCard number={completedQuizzes} label="Quizzes Passed" backgroundColor={theme.surface} />
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>Overall Progress</Text>
        <View style={[styles.overallCard, { backgroundColor: theme.surface }]}>
          <Text style={styles.overallPercent}>{overallPercent}%</Text>
          <ProgressBar progress={overallPercent} backgroundColor={theme.border} height={10} />
          <Text style={[styles.overallStats, { color: theme.textSecondary }]}>
            {completedLessons}/{totalLessons} lessons | {completedQuizzes}/{totalQuizzes} quizzes
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>Course Breakdown</Text>
        {coursesArray.map(course => {
          const courseProgress = getCourseProgress(course.id, course.chapters);
          return (
            <CourseCard
              key={course.id}
              course={course}
              progress={courseProgress}
              variant="compact"
              onPress={() => navigation.navigate('CourseDetail', { courseId: course.id })}
            />
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
        <Text style={[styles.sectionTitle, { color: theme.text }]}>Actions</Text>
        <TouchableOpacity
          style={[styles.actionButton, { backgroundColor: theme.surface }]}
          onPress={() => navigation.navigate('Progress')}
          accessibilityLabel="Detailed progress report"
          accessibilityRole="button"
        >
          <Text style={styles.actionIcon}>📊</Text>
          <Text style={[styles.actionText, { color: theme.text }]}>Detailed Progress Report</Text>
          <Text style={[styles.actionArrow, { color: theme.textSecondary }]}>›</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionButton, styles.dangerButton, { backgroundColor: theme.surface }]}
          onPress={async () => {
            await resetProgress();
            navigation.navigate('Home');
          }}
          accessibilityLabel="Reset all progress"
          accessibilityRole="button"
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
  nameInput: {
    fontSize: 24,
    fontWeight: '800',
    borderBottomWidth: 2,
    paddingVertical: 2,
    textAlign: 'center',
    minWidth: 120,
  },
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  overallPercent: {
    fontSize: 48,
    fontWeight: '800',
    color: '#4A90D9',
    marginBottom: 16,
  },
  overallStats: {
    fontSize: 14,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 12,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
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
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
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
