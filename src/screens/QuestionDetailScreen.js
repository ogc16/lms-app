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

export default function QuestionDetailScreen({ route }) {
  const { theme } = useTheme();
  const { userName } = useProgress();
  const { getQuestion, addReply } = useCommunity();
  const [replyText, setReplyText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const question = getQuestion(route.params?.questionId);

  if (!question) {
    return (
      <View style={[styles.container, { backgroundColor: theme.background, justifyContent: 'center', alignItems: 'center' }]}>
        <Text style={[styles.errorText, { color: theme.textSecondary }]}>Question not found</Text>
      </View>
    );
  }

  const handleReply = () => {
    if (!replyText.trim()) {
      Alert.alert('Empty Reply', 'Please write your reply before submitting.');
      return;
    }
    addReply(question.id, replyText, userName);
    setSubmitted(true);
    setReplyText('');
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={[styles.questionCard, { backgroundColor: theme.surface }]}>
        <View style={styles.questionHeader}>
          <View style={[styles.avatar, { backgroundColor: theme.border }]}>
            <Text style={styles.avatarText}>{question.user[0]}</Text>
          </View>
          <View>
            <Text style={[styles.questionUser, { color: theme.text }]}>{question.user}</Text>
            <Text style={[styles.questionTime, { color: theme.textSecondary }]}>{formatTime(question.time)}</Text>
          </View>
        </View>
        <Text style={[styles.questionText, { color: theme.text }]}>{question.question}</Text>
        <Text style={[styles.replyCount, { color: theme.textSecondary }]}>
          {question.replies?.length || 0} {question.replies?.length === 1 ? 'reply' : 'replies'}
        </Text>
      </View>

      <View style={[styles.replyCard, { backgroundColor: theme.surface }]}>
        <Text style={[styles.replyTitle, { color: theme.text }]}>Your Reply</Text>
        <TextInput
          style={[styles.replyInput, { color: theme.text, backgroundColor: theme.background, borderColor: theme.border }]}
          placeholder="Write your reply..."
          placeholderTextColor={theme.textSecondary}
          value={replyText}
          onChangeText={setReplyText}
          multiline
          numberOfLines={3}
          textAlignVertical="top"
        />
        <TouchableOpacity
          style={[styles.submitBtn, { opacity: replyText.trim() ? 1 : 0.6 }]}
          onPress={handleReply}
          accessibilityLabel="Post reply"
          accessibilityRole="button"
        >
          <Text style={styles.submitBtnText}>Post Reply</Text>
        </TouchableOpacity>
      </View>

      {submitted && (
        <View style={[styles.successCard, { backgroundColor: '#E8F5E9' }]}>
          <Text style={styles.successIcon}>✅</Text>
          <Text style={styles.successText}>Reply posted successfully!</Text>
        </View>
      )}

      <View style={styles.repliesSection}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>Replies</Text>
        {(question.replies || []).length === 0 ? (
          <Text style={[styles.noReplies, { color: theme.textSecondary }]}>No replies yet. Be the first to reply!</Text>
        ) : (
          question.replies.map((reply) => (
            <View key={reply.id} style={[styles.replyItem, { backgroundColor: theme.surface }]}>
              <View style={styles.replyHeader}>
                <View style={[styles.replyAvatar, { backgroundColor: theme.border }]}>
                  <Text style={styles.replyAvatarText}>{reply.user[0]}</Text>
                </View>
                <View>
                  <Text style={[styles.replyUser, { color: theme.text }]}>{reply.user}</Text>
                  <Text style={[styles.replyTime, { color: theme.textSecondary }]}>{formatTime(reply.time)}</Text>
                </View>
              </View>
              <Text style={[styles.replyText, { color: theme.text }]}>{reply.text}</Text>
            </View>
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
  errorText: {
    fontSize: 16,
  },
  questionCard: {
    margin: 16,
    borderRadius: 14,
    padding: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  questionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#4A90D9',
  },
  questionUser: {
    fontSize: 15,
    fontWeight: '700',
  },
  questionTime: {
    fontSize: 12,
    marginTop: 1,
  },
  questionText: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 26,
    marginBottom: 8,
  },
  replyCount: {
    fontSize: 13,
  },
  replyCard: {
    marginHorizontal: 16,
    borderRadius: 14,
    padding: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },
  replyTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
  },
  replyInput: {
    borderRadius: 10,
    borderWidth: 1,
    padding: 12,
    fontSize: 14,
    minHeight: 80,
    marginBottom: 10,
  },
  submitBtn: {
    backgroundColor: '#4A90D9',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },
  submitBtnText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
  },
  successCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 8,
    borderRadius: 10,
    padding: 12,
  },
  successIcon: {
    fontSize: 18,
    marginRight: 8,
  },
  successText: {
    color: '#2E7D32',
    fontSize: 13,
    flex: 1,
  },
  repliesSection: {
    paddingHorizontal: 16,
    marginTop: 16,
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
  },
  noReplies: {
    fontSize: 14,
    textAlign: 'center',
    paddingVertical: 24,
  },
  replyItem: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
  },
  replyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  replyAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  replyAvatarText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#4A90D9',
  },
  replyUser: {
    fontSize: 14,
    fontWeight: '600',
  },
  replyTime: {
    fontSize: 11,
    marginTop: 1,
  },
  replyText: {
    fontSize: 14,
    lineHeight: 20,
  },
});

QuestionDetailScreen.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      questionId: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
