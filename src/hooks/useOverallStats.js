import { useMemo } from 'react';

export default function useOverallStats(courses, isLessonComplete, getQuizScore) {
  return useMemo(() => {
    let totalLessons = 0;
    let completedLessons = 0;
    let totalQuizzes = 0;
    let completedQuizzes = 0;

    courses.forEach(course => {
      course.chapters.forEach(ch => {
        ch.lessons.forEach(lesson => {
          totalLessons++;
          if (isLessonComplete(course.id, lesson.id)) completedLessons++;
        });
        if (ch.quiz) {
          totalQuizzes++;
          if (getQuizScore(course.id, ch.id)) completedQuizzes++;
        }
      });
    });

    const overallPercent = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

    return { totalLessons, completedLessons, totalQuizzes, completedQuizzes, overallPercent };
  }, [courses, isLessonComplete, getQuizScore]);
}
