import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { useProgress } from '../context/ProgressContext';
import { useTheme } from '../context/ThemeContext';
import { coursesMap } from '../data/courses';

const courses = coursesMap;

export default function QuizScreen({ route, navigation }) {
  const { courseId, chapterId } = route.params;
  const { markQuizScore } = useProgress();
  const { theme, isDark } = useTheme();

  const course = courses[courseId];
  if (!course) {
    return (
      <View style={[styles.errorContainer, { backgroundColor: theme.background }]}>
        <Text style={{ color: theme.text }}>Course not found</Text>
      </View>
    );
  }

  const chapter = course.chapters.find(ch => ch.id === chapterId);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  if (!chapter || !chapter.quiz) {
    return (
      <View style={[styles.errorContainer, { backgroundColor: theme.background }]}>
        <Text style={{ color: theme.text }}>No quiz available for this chapter</Text>
      </View>
    );
  }

  const questions = chapter.quiz;
  const totalQuestions = questions.length;

  const handleAnswer = (questionIndex, optionIndex) => {
    if (showResults) return;
    setSelectedAnswers(prev => ({ ...prev, [questionIndex]: optionIndex }));
  };

  const handleSubmit = () => {
    let correct = 0;
    questions.forEach((q, i) => {
      if (selectedAnswers[i] === q.correct) correct++;
    });
    setScore(correct);
    setShowResults(true);
    markQuizScore(courseId, chapterId, correct, totalQuestions);
  };

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
    setScore(0);
  };

  const renderQuestion = () => {
    const q = questions[currentQuestion];
    const selected = selectedAnswers[currentQuestion];

    return (
      <View style={styles.questionCard}>
        <Text style={[styles.questionCounter, { color: theme.textSecondary }]}>
          Question {currentQuestion + 1} of {totalQuestions}
        </Text>
        <Text style={[styles.questionText, { color: theme.text }]}>{q.question}</Text>

        {q.options.map((option, idx) => {
          const isSelected = selected === idx;
          const isCorrect = showResults && idx === q.correct;
          const isWrong = showResults && isSelected && idx !== q.correct;

          let optionStyle = [styles.optionButton, { backgroundColor: theme.surface, borderColor: theme.border }];
          if (isSelected && !showResults) optionStyle = [styles.optionButton, styles.optionSelected];
          if (isCorrect) optionStyle = [styles.optionButton, styles.optionCorrect];
          if (isWrong) optionStyle = [styles.optionButton, styles.optionWrong];

          let indicator = '○';
          if (showResults && isCorrect) indicator = '✓';
          else if (showResults && isWrong) indicator = '✗';
          else if (isSelected && !showResults) indicator = '●';

          return (
            <TouchableOpacity
              key={option}
              style={optionStyle}
              onPress={() => handleAnswer(currentQuestion, idx)}
              activeOpacity={0.7}
              disabled={showResults}
              accessibilityLabel={`Option ${idx + 1}: ${option}`}
              accessibilityRole="button"
            >
              <Text style={styles.optionIndicator}>{indicator}</Text>
              <Text style={[
                styles.optionText,
                isSelected && !showResults && styles.optionTextSelected,
                isCorrect && styles.optionTextCorrect,
                isWrong && styles.optionTextWrong,
              ]}>{option}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  if (showResults) {
    return (
      <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
        <View style={styles.resultsContainer}>
          <Text style={styles.resultsIcon}>
            {score === totalQuestions ? '🏆' : score >= totalQuestions / 2 ? '👏' : '💪'}
          </Text>
          <Text style={[styles.resultsTitle, { color: theme.text }]}>Quiz Complete!</Text>
          <Text style={styles.scoreText}>
            {score} / {totalQuestions}
          </Text>
          <Text style={[styles.scorePercent, { color: theme.textSecondary }]}>
            {Math.round((score / totalQuestions) * 100)}%
          </Text>
          <Text style={[styles.encouragement, { color: theme.textSecondary }]}>
            {score === totalQuestions
              ? 'Perfect score! You\'re a rockstar!'
              : score >= totalQuestions / 2
              ? 'Good job! Review the wrong answers.'
              : 'Keep practicing, you\'ll get better!'}
          </Text>

          <View style={styles.reviewSection}>
            <Text style={[styles.reviewTitle, { color: theme.text }]}>Review Answers</Text>
              {questions.map((q, idx) => {
              const selected = selectedAnswers[idx];
              const isCorrect = selected === q.correct;
              return (
                <View key={q.question} style={[styles.reviewItem, { backgroundColor: theme.surface }]}>
                  <Text style={styles.reviewIndicator}>
                    {isCorrect ? '✅' : '❌'}
                  </Text>
                  <View style={styles.reviewContent}>
                    <Text style={[styles.reviewQuestion, { color: theme.text }]}>{q.question}</Text>
                    <Text style={styles.reviewAnswer}>
                      Your answer: {q.options[selected] || 'Not answered'}
                    </Text>
                    {!isCorrect && (
                      <Text style={styles.reviewCorrect}>
                        Correct: {q.options[q.correct]}
                      </Text>
                    )}
                  </View>
                </View>
              );
            })}
          </View>

          <View style={styles.resultsActions}>
            <TouchableOpacity style={styles.retryButton} onPress={handleRetry} accessibilityLabel="Retry quiz" accessibilityRole="button">
              <Text style={styles.retryButtonText}>🔄 Retry Quiz</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.doneButton}
              onPress={() => navigation.goBack()}
              accessibilityLabel="Back to course"
              accessibilityRole="button"
            >
              <Text style={styles.doneButtonText}>Back to Course</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={[styles.progressHeader, { backgroundColor: theme.surface, borderBottomColor: theme.border }]}>

        <View style={styles.progressBar}>
          {questions.map((q, idx) => (
            <View
              key={q.question}
              style={[
                styles.progressDot,
                idx <= currentQuestion && styles.progressDotActive,
                selectedAnswers[idx] !== undefined && styles.progressDotAnswered,
              ]}
            />
          ))}
        </View>
      </View>

      {renderQuestion()}

      <View style={[styles.navigation, { backgroundColor: theme.surface, borderTopColor: theme.border }]}>
        <TouchableOpacity
          style={[styles.navButton, currentQuestion === 0 && styles.navButtonDisabled]}
          onPress={handlePrev}
          disabled={currentQuestion === 0}
          accessibilityLabel="Previous question"
          accessibilityRole="button"
        >
          <Text style={styles.navButtonText}>← Previous</Text>
        </TouchableOpacity>

        {currentQuestion === totalQuestions - 1 ? (
          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleSubmit}
            accessibilityLabel="Submit quiz"
            accessibilityRole="button"
          >
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[styles.navButton, selectedAnswers[currentQuestion] === undefined && styles.navButtonDisabled]}
            onPress={handleNext}
            disabled={selectedAnswers[currentQuestion] === undefined}
            accessibilityLabel="Next question"
            accessibilityRole="button"
          >
            <Text style={styles.navButtonText}>Next →</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
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
  progressHeader: {
    paddingHorizontal: 20,
    paddingTop: 48,
    paddingBottom: 16,
    borderBottomWidth: 1,
  },
  progressBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  progressDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#E0E0E0',
  },
  progressDotActive: {
    backgroundColor: '#4A90D9',
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  progressDotAnswered: {
    backgroundColor: '#27AE60',
  },
  questionCard: {
    flex: 1,
    padding: 20,
  },
  questionCounter: {
    fontSize: 14,
    marginBottom: 8,
  },
  questionText: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 24,
    lineHeight: 28,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
    borderWidth: 2,
  },
  optionSelected: {
    borderColor: '#4A90D9',
    backgroundColor: '#EBF5FB',
  },
  optionCorrect: {
    borderColor: '#27AE60',
    backgroundColor: '#E8F8F5',
  },
  optionWrong: {
    borderColor: '#E74C3C',
    backgroundColor: '#FDEDEC',
  },
  optionIndicator: {
    fontSize: 20,
    marginRight: 12,
    width: 24,
    textAlign: 'center',
  },
  optionText: {
    flex: 1,
    fontSize: 16,
    color: '#2C3E50',
  },
  optionTextSelected: {
    fontWeight: '600',
    color: '#4A90D9',
  },
  optionTextCorrect: {
    fontWeight: '600',
    color: '#27AE60',
  },
  optionTextWrong: {
    fontWeight: '600',
    color: '#E74C3C',
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderTopWidth: 1,
  },
  navButton: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 10,
    backgroundColor: '#4A90D9',
  },
  navButtonDisabled: {
    backgroundColor: '#BDC3C7',
  },
  navButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
  submitButton: {
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 10,
    backgroundColor: '#27AE60',
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 15,
  },
  resultsContainer: {
    padding: 20,
    alignItems: 'center',
  },
  resultsIcon: {
    fontSize: 64,
    marginBottom: 12,
  },
  resultsTitle: {
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 8,
  },
  scoreText: {
    fontSize: 48,
    fontWeight: '800',
    color: '#4A90D9',
  },
  scorePercent: {
    fontSize: 20,
    marginBottom: 8,
  },
  encouragement: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
  },
  reviewSection: {
    width: '100%',
    marginBottom: 24,
  },
  reviewTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
  },
  reviewItem: {
    flexDirection: 'row',
    borderRadius: 12,
    padding: 14,
    marginBottom: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#E8EDF2',
  },
  reviewIndicator: {
    fontSize: 20,
    marginRight: 12,
    marginTop: 2,
  },
  reviewContent: {
    flex: 1,
  },
  reviewQuestion: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  reviewAnswer: {
    fontSize: 13,
    color: '#E74C3C',
    marginBottom: 2,
  },
  reviewCorrect: {
    fontSize: 13,
    color: '#27AE60',
    fontWeight: '500',
  },
  resultsActions: {
    width: '100%',
    gap: 12,
  },
  retryButton: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#4A90D9',
  },
  retryButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#4A90D9',
  },
  doneButton: {
    backgroundColor: '#4A90D9',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  doneButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
  },
});

QuizScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      courseId: PropTypes.string.isRequired,
      chapterId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
