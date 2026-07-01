import React, { createContext, useContext, useState, useEffect, useCallback, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProgressContext = createContext();

const STORAGE_KEY = '@lms_progress';
const CURRENT_VERSION = 2;

const defaultMeta = { userName: 'Learner', profilePicture: null };

function createEnrollment() {
  return {
    status: 'enrolled',
    progress: 0,
    currentLessonId: null,
    enrollmentDate: null,
    completionDate: null,
    lastAccessedDate: null,
    lessons: {},
    quizzes: {},
  };
}

function createLessonProgress() {
  return {
    status: 'not_started',
    startedOn: null,
    lastViewedOn: null,
    completedOn: null,
  };
}

function createQuizProgress() {
  return {
    bestScore: 0,
    bestTotal: 0,
    attempts: [],
  };
}

function generateSerial() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let serial = '';
  for (let i = 0; i < 12; i++) {
    if (i > 0 && i % 4 === 0) serial += '-';
    serial += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return serial;
}

function migrateOldData(old) {
  const enrollments = {};
  const enrollmentMap = {};
  const meta = old._meta || {};

  if (!meta.userName && old._userName) {
    meta.userName = old._userName;
  }
  if (!meta.userName) meta.userName = 'Learner';
  if (!meta.profilePicture) meta.profilePicture = null;

  Object.keys(old).forEach(key => {
    if (key.startsWith('_')) return;

    const parts = key.split('_');
    if (key.startsWith('quiz_')) {
      const courseId = parts[1];
      const chapterId = parts.slice(2).join('_');
      if (old[key] && typeof old[key] === 'object' && 'score' in old[key]) {
        if (!enrollments[courseId]) enrollments[courseId] = createEnrollment();
        if (!enrollments[courseId].quizzes[chapterId]) {
          enrollments[courseId].quizzes[chapterId] = createQuizProgress();
        }
        const qp = enrollments[courseId].quizzes[chapterId];
        const { score, total } = old[key];
        qp.bestScore = score;
        qp.bestTotal = total;
        qp.attempts.push({
          score,
          total,
          passed: score >= Math.ceil(total / 2),
          date: new Date().toISOString(),
        });
      }
    } else if (key.startsWith('completedDate_')) {
      const courseId = parts[1];
      if (!enrollments[courseId]) enrollments[courseId] = createEnrollment();
      enrollments[courseId].status = 'completed';
      enrollments[courseId].completionDate = old[key];
    } else {
      const courseId = parts[0];
      const lessonId = parts.slice(1).join('_');
      if (courseId && lessonId && old[key] === true) {
        if (!enrollments[courseId]) enrollments[courseId] = createEnrollment();
        if (!enrollments[courseId].lessons[lessonId]) {
          enrollments[courseId].lessons[lessonId] = createLessonProgress();
        }
        enrollments[courseId].lessons[lessonId].status = 'completed';
        enrollments[courseId].lessons[lessonId].completedOn = new Date().toISOString();
      }
    }
  });

  Object.keys(enrollments).forEach(courseId => {
    const enrollment = enrollments[courseId];
    const lessonValues = Object.values(enrollment.lessons);
    const totalLessons = lessonValues.length;
    const completedLessons = lessonValues.filter(l => l.status === 'completed').length;
    enrollment.progress = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
    enrollment.enrollmentDate = new Date().toISOString();
    enrollment.lastAccessedDate = new Date().toISOString();
    if (enrollment.status !== 'completed') {
      enrollment.status = completedLessons > 0 ? 'in_progress' : 'enrolled';
    }
  });

  return {
    _version: CURRENT_VERSION,
    _meta: meta,
    enrollments,
  };
}

export function ProgressProvider({ children }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProgress();
  }, []);

  const loadProgress = async () => {
    try {
      const stored = await AsyncStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed._version === CURRENT_VERSION) {
          if (!parsed._meta) parsed._meta = { ...defaultMeta };
          setData(parsed);
        } else {
          const migrated = migrateOldData(parsed);
          await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(migrated));
          setData(migrated);
        }
      } else {
        setData({ _version: CURRENT_VERSION, _meta: { ...defaultMeta }, enrollments: {} });
      }
    } catch (e) {
      console.warn('Failed to load progress', e);
      setData({ _version: CURRENT_VERSION, _meta: { ...defaultMeta }, enrollments: {} });
    } finally {
      setLoading(false);
    }
  };

  const saveData = useCallback(async (newData) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
    } catch (e) {
      console.warn('Failed to save progress', e);
    }
  }, []);

  const ensureEnrollment = useCallback((courseId) => {
    if (!data) return null;
    let updated = false;
    const next = { ...data, enrollments: { ...data.enrollments } };
    if (!next.enrollments[courseId]) {
      next.enrollments[courseId] = createEnrollment();
      next.enrollments[courseId].enrollmentDate = new Date().toISOString();
      updated = true;
    }
    next.enrollments[courseId].lastAccessedDate = new Date().toISOString();
    if (next.enrollments[courseId].status === 'enrolled') {
      next.enrollments[courseId].status = 'in_progress';
    }
    if (updated) {
      setData(next);
      saveData(next);
    }
    return next.enrollments[courseId];
  }, [data, saveData]);

  const recalculateProgress = useCallback((enrollment, chapters) => {
    if (!chapters) return enrollment;
    let total = 0;
    let completed = 0;
    chapters.forEach(ch => {
      ch.lessons.forEach(lesson => {
        total++;
        if (enrollment.lessons[lesson.id]?.status === 'completed') completed++;
      });
    });
    enrollment.progress = total > 0 ? Math.round((completed / total) * 100) : 0;
    if (enrollment.progress >= 100 && enrollment.status !== 'completed') {
      enrollment.status = 'completed';
      enrollment.completionDate = enrollment.completionDate || new Date().toISOString();
    }
    return enrollment;
  }, []);

  const markLessonComplete = useCallback((courseId, lessonId) => {
    if (!data) return;
    setData(prev => {
      const next = { ...prev, enrollments: { ...prev.enrollments } };
      if (!next.enrollments[courseId]) {
        next.enrollments[courseId] = createEnrollment();
        next.enrollments[courseId].enrollmentDate = new Date().toISOString();
      }
      const enrollment = { ...next.enrollments[courseId], lessons: { ...next.enrollments[courseId].lessons } };
      next.enrollments[courseId] = enrollment;

      if (!enrollment.lessons[lessonId]) {
        enrollment.lessons[lessonId] = createLessonProgress();
      }
      const lesson = { ...enrollment.lessons[lessonId] };
      enrollment.lessons[lessonId] = lesson;

      if (lesson.status !== 'completed') {
        lesson.status = 'completed';
        lesson.completedOn = lesson.completedOn || new Date().toISOString();
        if (!lesson.startedOn) lesson.startedOn = new Date().toISOString();
        lesson.lastViewedOn = new Date().toISOString();
      }

      enrollment.lastAccessedDate = new Date().toISOString();
      if (enrollment.status === 'enrolled') enrollment.status = 'in_progress';

      saveData(next);
      return next;
    });
  }, [data, saveData]);

  const markLessonViewed = useCallback((courseId, lessonId) => {
    if (!data) return;
    setData(prev => {
      const next = { ...prev, enrollments: { ...prev.enrollments } };
      if (!next.enrollments[courseId]) {
        next.enrollments[courseId] = createEnrollment();
        next.enrollments[courseId].enrollmentDate = new Date().toISOString();
      }
      const enrollment = { ...next.enrollments[courseId], lessons: { ...next.enrollments[courseId].lessons } };
      next.enrollments[courseId] = enrollment;

      if (!enrollment.lessons[lessonId]) {
        enrollment.lessons[lessonId] = createLessonProgress();
      }
      const lesson = { ...enrollment.lessons[lessonId] };
      enrollment.lessons[lessonId] = lesson;

      lesson.lastViewedOn = new Date().toISOString();
      if (lesson.status === 'not_started') {
        lesson.status = 'in_progress';
        lesson.startedOn = lesson.startedOn || new Date().toISOString();
      }

      enrollment.lastAccessedDate = new Date().toISOString();
      if (enrollment.status === 'enrolled') enrollment.status = 'in_progress';

      saveData(next);
      return next;
    });
  }, [data, saveData]);

  const markQuizScore = useCallback((courseId, chapterId, score, total) => {
    if (!data) return;
    setData(prev => {
      const next = { ...prev, enrollments: { ...prev.enrollments } };
      if (!next.enrollments[courseId]) {
        next.enrollments[courseId] = createEnrollment();
        next.enrollments[courseId].enrollmentDate = new Date().toISOString();
      }
      const enrollment = { ...next.enrollments[courseId], quizzes: { ...next.enrollments[courseId].quizzes } };
      next.enrollments[courseId] = enrollment;

      if (!enrollment.quizzes[chapterId]) {
        enrollment.quizzes[chapterId] = createQuizProgress();
      }
      const quiz = { ...enrollment.quizzes[chapterId], attempts: [...enrollment.quizzes[chapterId].attempts] };
      enrollment.quizzes[chapterId] = quiz;

      const passed = score >= Math.ceil(total / 2);
      quiz.attempts.push({
        score,
        total,
        passed,
        date: new Date().toISOString(),
      });

      if (score > quiz.bestScore || (score === quiz.bestScore && total > quiz.bestTotal)) {
        quiz.bestScore = score;
        quiz.bestTotal = total;
      }

      enrollment.lastAccessedDate = new Date().toISOString();
      if (enrollment.status === 'enrolled') enrollment.status = 'in_progress';

      saveData(next);
      return next;
    });
  }, [data, saveData]);

  const isLessonComplete = useCallback((courseId, lessonId) => {
    if (!data) return false;
    const enrollment = data.enrollments[courseId];
    if (!enrollment) return false;
    const lesson = enrollment.lessons[lessonId];
    return lesson?.status === 'completed';
  }, [data]);

  const getLessonProgress = useCallback((courseId, lessonId) => {
    if (!data) return null;
    return data.enrollments[courseId]?.lessons[lessonId] || null;
  }, [data]);

  const getQuizScore = useCallback((courseId, chapterId) => {
    if (!data) return null;
    const quiz = data.enrollments[courseId]?.quizzes[chapterId];
    if (!quiz || quiz.bestTotal === 0) return null;
    return { score: quiz.bestScore, total: quiz.bestTotal };
  }, [data]);

  const getQuizAttempts = useCallback((courseId, chapterId) => {
    if (!data) return [];
    return data.enrollments[courseId]?.quizzes[chapterId]?.attempts || [];
  }, [data]);

  const getCourseProgress = useCallback((courseId, chapters) => {
    if (!data || !data.enrollments[courseId]) return 0;
    const enrollment = data.enrollments[courseId];
    if (enrollment.progress !== undefined && enrollment.progress !== null) {
      return enrollment.progress;
    }
    let completed = 0;
    let total = 0;
    chapters.forEach(ch => {
      ch.lessons.forEach(lesson => {
        total++;
        if (enrollment.lessons[lesson.id]?.status === 'completed') completed++;
      });
    });
    return total > 0 ? Math.round((completed / total) * 100) : 0;
  }, [data]);

  const isCourseComplete = useCallback((courseId, chapters) => {
    if (!data || !data.enrollments[courseId]) return false;
    const enrollment = data.enrollments[courseId];
    if (enrollment.status === 'completed') return true;
    for (const ch of chapters) {
      for (const lesson of ch.lessons) {
        if (enrollment.lessons[lesson.id]?.status !== 'completed') return false;
      }
      if (ch.quiz) {
        const quiz = enrollment.quizzes[ch.id];
        if (!quiz || quiz.bestTotal === 0) return false;
      }
    }
    return true;
  }, [data]);

  const setCourseCompletionDate = useCallback((courseId) => {
    if (!data) return;
    setData(prev => {
      if (!prev.enrollments[courseId]) return prev;
      if (prev.enrollments[courseId].completionDate) return prev;
      const next = {
        ...prev,
        enrollments: {
          ...prev.enrollments,
          [courseId]: {
            ...prev.enrollments[courseId],
            status: 'completed',
            completionDate: new Date().toISOString(),
            lastAccessedDate: new Date().toISOString(),
          },
        },
      };
      saveData(next);
      return next;
    });
  }, [data, saveData]);

  const getCourseCompletionDate = useCallback((courseId) => {
    if (!data) return null;
    const dateStr = data.enrollments[courseId]?.completionDate;
    return dateStr ? new Date(dateStr) : null;
  }, [data]);

  const getEnrollment = useCallback((courseId) => {
    if (!data) return null;
    return data.enrollments[courseId] || null;
  }, [data]);

  const getEnrollments = useCallback(() => {
    if (!data) return {};
    return data.enrollments || {};
  }, [data]);

  const setUserName = useCallback((name) => {
    if (!data) return;
    setData(prev => {
      const next = { ...prev, _meta: { ...(prev._meta || {}), userName: name } };
      saveData(next);
      return next;
    });
  }, [data, saveData]);

  const setProfilePicture = useCallback((uri) => {
    if (!data) return;
    setData(prev => {
      const next = { ...prev, _meta: { ...(prev._meta || {}), profilePicture: uri } };
      saveData(next);
      return next;
    });
  }, [data, saveData]);

  const resetProgress = useCallback(async () => {
    const fresh = { _version: CURRENT_VERSION, _meta: { ...defaultMeta }, enrollments: {} };
    setData(fresh);
    await AsyncStorage.removeItem(STORAGE_KEY);
  }, []);

  const serialCacheRef = useRef({});

  const getCertificateSerial = useCallback((courseId) => {
    if (!data) return null;
    const enrollment = data.enrollments[courseId];
    if (!enrollment || enrollment.status !== 'completed') return null;
    if (enrollment._certificateSerial) return enrollment._certificateSerial;
    if (!serialCacheRef.current[courseId]) {
      serialCacheRef.current[courseId] = generateSerial();
    }
    return serialCacheRef.current[courseId];
  }, [data]);

  useEffect(() => {
    if (!data) return;
    let changed = false;
    const next = { ...data, enrollments: { ...data.enrollments } };
    Object.keys(serialCacheRef.current).forEach(courseId => {
      const enrollment = next.enrollments[courseId];
      if (enrollment && !enrollment._certificateSerial) {
        next.enrollments[courseId] = { ...enrollment, _certificateSerial: serialCacheRef.current[courseId] };
        changed = true;
      }
    });
    if (changed) {
      setData(next);
      saveData(next);
    }
  }, [data, saveData]);

  const value = useMemo(() => ({
    progress: data || {},
    loading,
    userName: data?._meta?.userName || 'Learner',
    profilePicture: data?._meta?.profilePicture || null,
    setUserName,
    setProfilePicture,
    markLessonComplete,
    markLessonViewed,
    markQuizScore,
    isLessonComplete,
    getLessonProgress,
    getQuizScore,
    getQuizAttempts,
    getCourseProgress,
    isCourseComplete,
    setCourseCompletionDate,
    getCourseCompletionDate,
    getEnrollment,
    getEnrollments,
    getCertificateSerial,
    resetProgress,
  }), [data, loading, setUserName, setProfilePicture, markLessonComplete, markLessonViewed, markQuizScore, isLessonComplete, getLessonProgress, getQuizScore, getQuizAttempts, getCourseProgress, isCourseComplete, setCourseCompletionDate, getCourseCompletionDate, getEnrollment, getEnrollments, getCertificateSerial, resetProgress]);

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
}

ProgressProvider.propTypes = {
  children: PropTypes.node,
};

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) throw new Error('useProgress must be used within ProgressProvider');
  return context;
}
