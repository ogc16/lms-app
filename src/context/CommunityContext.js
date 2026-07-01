import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CommunityContext = createContext();

const STORAGE_KEY = '@lms_community';
const CURRENT_VERSION = 1;

const sampleQuestions = [
  {
    id: 'sample-1', user: 'Alice', question: 'What is the difference between var and let in JavaScript?',
    time: new Date(Date.now() - 7200000).toISOString(), replies: [
      { id: 'r1', user: 'Bob', text: 'var is function-scoped, let is block-scoped. Always prefer let.', time: new Date(Date.now() - 3600000).toISOString() },
    ],
  },
  {
    id: 'sample-2', user: 'Bob', question: 'How do I set up React Navigation in Expo?',
    time: new Date(Date.now() - 18000000).toISOString(), replies: [
      { id: 'r2', user: 'Alice', text: 'Install @react-navigation/native and the specific navigator package.', time: new Date(Date.now() - 14400000).toISOString() },
      { id: 'r3', user: 'Diana', text: 'Dont forget to wrap your app in NavigationContainer!', time: new Date(Date.now() - 10800000).toISOString() },
    ],
  },
  {
    id: 'sample-3', user: 'Charlie', question: 'Best practices for state management in large apps?',
    time: new Date(Date.now() - 86400000).toISOString(), replies: [
      { id: 'r4', user: 'Diana', text: 'Context API for simple state, Redux or Zustand for complex state.', time: new Date(Date.now() - 72000000).toISOString() },
    ],
  },
  {
    id: 'sample-4', user: 'Diana', question: 'Understanding closures in Python vs JavaScript',
    time: new Date(Date.now() - 172800000).toISOString(), replies: [],
  },
];

function generateId() {
  return 'q_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6);
}

export function CommunityProvider({ children }) {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadQuestions();
  }, []);

  const loadQuestions = async () => {
    try {
      const stored = await AsyncStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed._version === CURRENT_VERSION) {
          setQuestions(parsed.questions || []);
        } else {
          const migrated = { _version: CURRENT_VERSION, questions: sampleQuestions };
          await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(migrated));
          setQuestions(sampleQuestions);
        }
      } else {
        const initial = { _version: CURRENT_VERSION, questions: sampleQuestions };
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
        setQuestions(sampleQuestions);
      }
    } catch (e) {
      console.warn('Failed to load community data', e);
      setQuestions(sampleQuestions);
    } finally {
      setLoading(false);
    }
  };

  const saveQuestions = useCallback(async (updatedQuestions) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify({ _version: CURRENT_VERSION, questions: updatedQuestions }));
    } catch (e) {
      console.warn('Failed to save community data', e);
    }
  }, []);

  const addQuestion = useCallback((text, userName) => {
    const newQuestion = {
      id: generateId(),
      user: userName || 'Anonymous',
      question: text.trim(),
      time: new Date().toISOString(),
      replies: [],
    };
    setQuestions(prev => {
      const updated = [newQuestion, ...prev];
      saveQuestions(updated);
      return updated;
    });
    return newQuestion;
  }, [saveQuestions]);

  const addReply = useCallback((questionId, text, userName) => {
    const reply = {
      id: 'r_' + Date.now(),
      user: userName || 'Anonymous',
      text: text.trim(),
      time: new Date().toISOString(),
    };
    setQuestions(prev => {
      const updated = prev.map(q => {
        if (q.id === questionId) {
          return { ...q, replies: [...(q.replies || []), reply] };
        }
        return q;
      });
      saveQuestions(updated);
      return updated;
    });
    return reply;
  }, [saveQuestions]);

  const getQuestion = useCallback((questionId) => {
    return questions.find(q => q.id === questionId) || null;
  }, [questions]);

  const value = useMemo(() => ({
    questions,
    loading,
    addQuestion,
    addReply,
    getQuestion,
  }), [questions, loading, addQuestion, addReply, getQuestion]);

  return (
    <CommunityContext.Provider value={value}>
      {children}
    </CommunityContext.Provider>
  );
}

CommunityProvider.propTypes = {
  children: PropTypes.node,
};

export function useCommunity() {
  const context = useContext(CommunityContext);
  if (!context) throw new Error('useCommunity must be used within CommunityProvider');
  return context;
}
