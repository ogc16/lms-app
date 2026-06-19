import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { useTheme } from '../context/ThemeContext';

export default function StatCard({ number, label, color, backgroundColor }) {
  const { theme } = useTheme();
  return (
    <View style={[styles.card, { backgroundColor: backgroundColor || theme.surface }]}>
      <Text style={[styles.number, { color: color || '#4A90D9' }]}>{number}</Text>
      <Text style={[styles.label, { color: theme.textSecondary }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  number: {
    fontSize: 28,
    fontWeight: '800',
  },
  label: {
    fontSize: 12,
    marginTop: 2,
    textAlign: 'center',
  },
});

StatCard.propTypes = {
  number: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
};
