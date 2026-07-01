import React, { useMemo } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Platform } from 'react-native';
import PropTypes from 'prop-types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useProgress } from '../context/ProgressContext';
import { useTheme } from '../context/ThemeContext';
import { useCommunity } from '../context/CommunityContext';
import { coursesArray } from '../data/courses';
import CourseCard from '../components/CourseCard';
import ProgressBar from '../components/ProgressBar';
import useOverallStats from '../hooks/useOverallStats';

function getBadges(completedLessons, totalLessons, overallPercent) {
  const badges = [];
  if (totalLessons > 0) badges.push({ icon: '🌱', label: 'Beginner Learner', unlocked: true });
  if (completedLessons >= 5) badges.push({ icon: '🔥', label: 'Consistency Streak', unlocked: true });
  if (overallPercent >= 25) badges.push({ icon: '⭐', label: 'Quarter Master', unlocked: true });
  if (overallPercent >= 50) badges.push({ icon: '🏅', label: 'Halfway Hero', unlocked: true });
  if (overallPercent >= 100) badges.push({ icon: '🏆', label: 'Course Complete', unlocked: true });
  return badges;
}

export default function HomeScreen({ navigation }) {
  const { theme } = useTheme();
  const { getCourseProgress, userName, profilePicture, isLessonComplete, getQuizScore, loading } = useProgress();
  const { totalLessons, completedLessons, overallPercent } = useOverallStats(coursesArray, isLessonComplete, getQuizScore);
  const insets = useSafeAreaInsets();

  const { questions } = useCommunity();
  const badges = useMemo(() => getBadges(completedLessons, totalLessons, overallPercent), [completedLessons, totalLessons, overallPercent]);

  const lastAccessedCourse = useMemo(() => {
    let last = null;
    let lastDate = null;
    coursesArray.forEach(course => {
      const enrollment = getCourseProgress(course.id, course.chapters);
      if (enrollment > 0 && enrollment < 100) {
        if (!lastDate) {
          last = course;
          lastDate = true;
        }
      }
    });
    if (!last && coursesArray.length > 0) last = coursesArray[0];
    return last;
  }, []);

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={[styles.header, { backgroundColor: theme.headerBg, paddingTop: Platform.OS === 'android' ? insets.top + 20 : 60 }]}>
        <View style={styles.headerTopRow}>
          <View>
            <Text style={styles.greeting}>Welcome back,</Text>
            <Text style={styles.userName}>{userName}!</Text>
          </View>
          <TouchableOpacity
            style={styles.profileCircle}
            onPress={() => navigation.navigate('Profile')}
            accessibilityLabel="Go to profile"
            accessibilityRole="button"
          >
            {profilePicture ? (
              <Image source={{ uri: profilePicture }} style={styles.profileImage} />
            ) : (
              <Text style={styles.profileCircleText}>👤</Text>
            )}
          </TouchableOpacity>
        </View>
        <Text style={styles.tagline}>Continue your learning journey</Text>
      </View>

      <View style={[styles.progressSnapshot, { backgroundColor: theme.surface }]}>
        <View style={styles.snapshotLeft}>
          <Text style={[styles.snapshotPercent, { color: '#4A90D9' }]}>{overallPercent}%</Text>
          <Text style={[styles.snapshotLabel, { color: theme.textSecondary }]}>Overall Complete</Text>
          <Text style={[styles.snapshotStats, { color: theme.textSecondary }]}>
            {completedLessons}/{totalLessons} lessons
          </Text>
        </View>
        <View style={styles.snapshotRight}>
          <View style={[styles.circularProgress, { borderColor: theme.border }]}>
            <View style={[styles.circularFill, { borderColor: '#4A90D9' }]} />
            <View style={styles.circularInner}>
              <Text style={styles.circularText}>{overallPercent}%</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.quickActionsRow}>
        <TouchableOpacity
          style={[styles.quickActionBtn, { backgroundColor: theme.surface }]}
          onPress={() => {
            if (lastAccessedCourse) {
              navigation.navigate('CourseDetail', { courseId: lastAccessedCourse.id });
            }
          }}
          accessibilityLabel="Resume last course"
          accessibilityRole="button"
        >
          <Text style={styles.quickActionIcon}>▶️</Text>
          <Text style={[styles.quickActionLabel, { color: theme.text }]}>Resume</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.quickActionBtn, { backgroundColor: theme.surface }]}
          onPress={() => {
            if (coursesArray.length > 0) {
              navigation.navigate('CourseDetail', { courseId: coursesArray[0].id });
            }
          }}
          accessibilityLabel="Start new course"
          accessibilityRole="button"
        >
          <Text style={styles.quickActionIcon}>➕</Text>
          <Text style={[styles.quickActionLabel, { color: theme.text }]}>New Course</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.quickActionBtn, { backgroundColor: theme.surface }]}
          onPress={() => navigation.navigate('Progress')}
          accessibilityLabel="View progress"
          accessibilityRole="button"
        >
          <Text style={styles.quickActionIcon}>📊</Text>
          <Text style={[styles.quickActionLabel, { color: theme.text }]}>Progress</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.coursesSection}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>Available Courses</Text>
        {loading ? (
          <Text style={[styles.loadingText, { color: theme.textSecondary }]}>Loading progress...</Text>
        ) : (
          coursesArray.map((course) => {
            const progress = getCourseProgress(course.id, course.chapters);
            return (
              <CourseCard
                key={course.id}
                course={course}
                progress={progress}
                onPress={() => navigation.navigate('CourseDetail', { courseId: course.id })}
              />
            );
          })
        )}
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>🏅 Your Badges</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.badgesScroll}>
          {badges.map((badge, idx) => (
            <View key={idx} style={[styles.badgeCard, { backgroundColor: theme.surface }]}>
              <Text style={styles.badgeIcon}>{badge.icon}</Text>
              <Text style={[styles.badgeLabel, { color: theme.text }]}>{badge.label}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>💬 Community</Text>
        <View style={[styles.communityCard, { backgroundColor: theme.surface }]}>
          <Text style={styles.communityIcon}>🗣️</Text>
          <View style={styles.communityInfo}>
            <Text style={[styles.communityTitle, { color: theme.text }]}>Discuss & Learn Together</Text>
            <Text style={[styles.communityDesc, { color: theme.textSecondary }]}>
              {questions.length > 0
                ? `${questions.length} question${questions.length !== 1 ? 's' : ''} in the community`
                : 'Ask questions, share insights, and connect with fellow learners.'}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.communityBtn}
            onPress={() => navigation.navigate('AskQuestion')}
            accessibilityLabel="Ask a question"
            accessibilityRole="button"
          >
            <Text style={styles.communityBtnText}>Ask</Text>
          </TouchableOpacity>
        </View>
        {questions.length > 0 && (
          <TouchableOpacity
            style={[styles.latestQuestion, { backgroundColor: theme.surface }]}
            onPress={() => navigation.navigate('AskQuestion')}
            activeOpacity={0.7}
          >
            <Text style={[styles.latestQuestionLabel, { color: theme.textSecondary }]}>Latest:</Text>
            <Text style={[styles.latestQuestionText, { color: theme.text }]} numberOfLines={1}>
              {questions[0].question}
            </Text>
            <Text style={[styles.latestQuestionArrow, { color: theme.textSecondary }]}>›</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 28,
  },
  headerTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  greeting: {
    fontSize: 16,
    color: '#B3D4FC',
  },
  userName: {
    fontSize: 28,
    fontWeight: '800',
    color: '#fff',
  },
  profileCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  profileCircleText: {
    fontSize: 22,
  },
  tagline: {
    fontSize: 15,
    color: '#E8F0FE',
  },
  progressSnapshot: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginTop: -20,
    borderRadius: 16,
    padding: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  snapshotLeft: {
    flex: 1,
    justifyContent: 'center',
  },
  snapshotPercent: {
    fontSize: 40,
    fontWeight: '800',
  },
  snapshotLabel: {
    fontSize: 14,
    marginTop: 2,
  },
  snapshotStats: {
    fontSize: 13,
    marginTop: 4,
  },
  snapshotRight: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
  },
  circularProgress: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circularFill: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 6,
    borderColor: '#4A90D9',
  },
  circularInner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  circularText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#4A90D9',
  },
  quickActionsRow: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginTop: 16,
    gap: 10,
  },
  quickActionBtn: {
    flex: 1,
    borderRadius: 12,
    padding: 14,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },
  quickActionIcon: {
    fontSize: 22,
    marginBottom: 4,
  },
  quickActionLabel: {
    fontSize: 12,
    fontWeight: '600',
  },
  coursesSection: {
    padding: 16,
  },
  section: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12,
  },
  loadingText: {
    textAlign: 'center',
    paddingVertical: 32,
    fontSize: 16,
  },
  badgesScroll: {
    marginBottom: 8,
  },
  badgeCard: {
    borderRadius: 12,
    padding: 14,
    marginRight: 10,
    alignItems: 'center',
    minWidth: 100,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },
  badgeIcon: {
    fontSize: 32,
    marginBottom: 6,
  },
  badgeLabel: {
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
  },
  communityCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 14,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },
  communityIcon: {
    fontSize: 32,
    marginRight: 12,
  },
  communityInfo: {
    flex: 1,
  },
  communityTitle: {
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 2,
  },
  communityDesc: {
    fontSize: 12,
    lineHeight: 17,
  },
  communityBtn: {
    backgroundColor: '#4A90D9',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginLeft: 8,
  },
  communityBtnText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 13,
  },
  latestQuestion: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    padding: 12,
    marginTop: 8,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  latestQuestionLabel: {
    fontSize: 12,
    fontWeight: '600',
    marginRight: 6,
  },
  latestQuestionText: {
    flex: 1,
    fontSize: 13,
  },
  latestQuestionArrow: {
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 6,
  },
});

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
