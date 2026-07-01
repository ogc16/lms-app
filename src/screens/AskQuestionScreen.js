import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import PropTypes from 'prop-types';
import { useTheme } from '../context/ThemeContext';
import { useProgress } from '../context/ProgressContext';
import { useCommunity } from '../context/CommunityContext';

function formatTime(dateStr) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'just now';
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  if (days < 30) return `${days}d ago`;
  return new Date(dateStr).toLocaleDateString();
}

export default function AskQuestionScreen({ navigation }) {
  const { theme } = useTheme();
  const { userName } = useProgress();
  const { questions, addQuestion } = useCommunity();
  const [question, setQuestion] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!question.trim()) {
      Alert.alert('Empty Question', 'Please write your question before submitting.');
      return;
    }
    addQuestion(question, userName);
    setSubmitted(true);
    setQuestion('');
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={[styles.header, { backgroundColor: theme.headerBg }]}>
        <Text style={[styles.headerTitle, { color: theme.headerText }]}>💬 Community Q&A</Text>
        <Text style={[styles.headerSubtitle, { color: theme.textSecondary }]}>Ask questions, help others, learn together</Text>
      </View>

      <View style={[styles.askCard, { backgroundColor: theme.surface }]}>
        <Text style={[styles.askTitle, { color: theme.text }]}>Ask a Question</Text>
        <TextInput
          style={[styles.askInput, { color: theme.text, backgroundColor: theme.background, borderColor: theme.border }]}
          placeholder="What would you like to know?"
          placeholderTextColor={theme.textSecondary}
          value={question}
          onChangeText={setQuestion}
          multiline
          numberOfLines={4}
          textAlignVertical="top"
        />
        <TouchableOpacity
          style={[styles.submitBtn, { opacity: question.trim() ? 1 : 0.6 }]}
          onPress={handleSubmit}
          accessibilityLabel="Submit question"
          accessibilityRole="button"
        >
          <Text style={styles.submitBtnText}>Post Question</Text>
        </TouchableOpacity>
      </View>

      {submitted && (
        <View style={[styles.successCard, { backgroundColor: '#E8F5E9' }]}>
          <Text style={styles.successIcon}>✅</Text>
          <Text style={styles.successText}>Your question was posted! Check back for answers.</Text>
        </View>
      )}

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>Recent Questions ({questions.length})</Text>
        {questions.length === 0 ? (
          <Text style={[styles.emptyText, { color: theme.textSecondary }]}>No questions yet. Be the first to ask!</Text>
        ) : (
          questions.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={[styles.questionCard, { backgroundColor: theme.surface }]}
              activeOpacity={0.7}
              onPress={() => navigation.navigate('QuestionDetail', { questionId: item.id })}
              accessibilityLabel={`Question by ${item.user}: ${item.question}`}
              accessibilityRole="button"
            >
              <View style={styles.questionHeader}>
                <View style={[styles.avatar, { backgroundColor: theme.border }]}>
                  <Text style={styles.avatarText}>{item.user[0]}</Text>
                </View>
                <View style={styles.questionInfo}>
                  <Text style={[styles.questionUser, { color: theme.textSecondary }]}>{item.user}</Text>
                  <Text style={[styles.questionTime, { color: theme.textSecondary }]}>{formatTime(item.time)}</Text>
                </View>
              </View>
              <Text style={[styles.questionText, { color: theme.text }]}>{item.question}</Text>
              <Text style={[styles.replyCount, { color: theme.textSecondary }]}>
                {(item.replies || []).length} {(item.replies || []).length === 1 ? 'reply' : 'replies'}
              </Text>
            </TouchableOpacity>
          ))
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
    padding: 20,
    paddingTop: 48,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '800',
  },
  headerSubtitle: {
    fontSize: 13,
    marginTop: 4,
    textAlign: 'center',
  },
  askCard: {
    margin: 16,
    borderRadius: 14,
    padding: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  askTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
  },
  askInput: {
    borderRadius: 10,
    borderWidth: 1,
    padding: 14,
    fontSize: 15,
    minHeight: 100,
    marginBottom: 12,
  },
  submitBtn: {
    backgroundColor: '#4A90D9',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  submitBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  successCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 8,
    borderRadius: 10,
    padding: 14,
  },
  successIcon: {
    fontSize: 20,
    marginRight: 10,
  },
  successText: {
    color: '#2E7D32',
    fontSize: 13,
    flex: 1,
  },
  section: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
  },
  emptyText: {
    fontSize: 14,
    textAlign: 'center',
    paddingVertical: 24,
  },
  questionCard: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },
  questionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  avatarText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#4A90D9',
  },
  questionInfo: {
    flexDirection: 'row',
    flex: 1,
  },
  questionUser: {
    fontSize: 13,
    fontWeight: '600',
    marginRight: 8,
  },
  questionTime: {
    fontSize: 12,
  },
  questionText: {
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 21,
    marginBottom: 6,
  },
  replyCount: {
    fontSize: 12,
  },
});

AskQuestionScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
