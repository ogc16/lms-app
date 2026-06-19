import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProgressContext = createContext();

const STORAGE_KEY = '@lms_progress';

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState({});
  const [loading, setLoading] = useState(true);
  const [userName, setUserNameState] = useState('Learner');

  useEffect(() => {
    loadProgress();
  }, []);

  const loadProgress = async () => {
    try {
      const stored = await AsyncStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setProgress(parsed);
        if (parsed._userName) setUserNameState(parsed._userName);
      }
    } catch (e) {
      console.warn('Failed to load progress', e);
    } finally {
      setLoading(false);
    }
  };

  const saveProgress = async (newProgress) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newProgress));
    } catch (e) {
      console.warn('Failed to save progress', e);
    }
  };

  const markLessonComplete = useCallback((courseId, lessonId) => {
    setProgress(prev => {
      const key = `${courseId}_${lessonId}`;
      if (prev[key]) return prev;
      const next = { ...prev, [key]: true };
      saveProgress(next);
      return next;
    });
  }, []);

  const markQuizScore = useCallback((courseId, chapterId, score, total) => {
    setProgress(prev => {
      const key = `quiz_${courseId}_${chapterId}`;
      const existing = prev[key];
      if (existing && existing.score >= score) return prev;
      const next = { ...prev, [key]: { score, total } };
      saveProgress(next);
      return next;
    });
  }, []);

  const isLessonComplete = useCallback((courseId, lessonId) => {
    return !!progress[`${courseId}_${lessonId}`];
  }, [progress]);

  const getQuizScore = useCallback((courseId, chapterId) => {
    return progress[`quiz_${courseId}_${chapterId}`] || null;
  }, [progress]);

  const getCourseProgress = useCallback((courseId, chapters) => {
    let completed = 0;
    let total = 0;
    chapters.forEach(ch => {
      ch.lessons.forEach(lesson => {
        total++;
        if (progress[`${courseId}_${lesson.id}`]) completed++;
      });
    });
    return total > 0 ? Math.round((completed / total) * 100) : 0;
  }, [progress]);

  const isCourseComplete = useCallback((courseId, chapters) => {
    for (const ch of chapters) {
      for (const lesson of ch.lessons) {
        if (!progress[`${courseId}_${lesson.id}`]) return false;
      }
      if (ch.quiz && !progress[`quiz_${courseId}_${ch.id}`]) return false;
    }
    return true;
  }, [progress]);

  const setUserName = useCallback((name) => {
    setProgress(prev => {
      const next = { ...prev, _userName: name };
      saveProgress(next);
      return next;
    });
    setUserNameState(name);
  }, []);

  const setCourseCompletionDate = useCallback((courseId) => {
    setProgress(prev => {
      const key = `completedDate_${courseId}`;
      if (prev[key]) return prev;
      const next = { ...prev, [key]: new Date().toISOString() };
      saveProgress(next);
      return next;
    });
  }, []);

  const getCourseCompletionDate = useCallback((courseId) => {
    const dateStr = progress[`completedDate_${courseId}`];
    return dateStr ? new Date(dateStr) : null;
  }, [progress]);

  const resetProgress = useCallback(async () => {
    setProgress({});
    setUserNameState('Learner');
    await AsyncStorage.removeItem(STORAGE_KEY);
  }, []);

  const value = useMemo(() => ({
    progress, loading, userName,
    setUserName,
    markLessonComplete, markQuizScore,
    isLessonComplete, getQuizScore,
    getCourseProgress, isCourseComplete,
    setCourseCompletionDate, getCourseCompletionDate,
    resetProgress
  }), [progress, loading, userName, setUserName, markLessonComplete, markQuizScore, isLessonComplete, getQuizScore, getCourseProgress, isCourseComplete, setCourseCompletionDate, getCourseCompletionDate, resetProgress]);

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
