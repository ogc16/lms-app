import React, { createContext, useContext, useState, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useColorScheme } from 'react-native';

const lightTheme = {
  dark: false,
  background: '#F5F7FA',
  surface: '#fff',
  text: '#2C3E50',
  textSecondary: '#95A5A6',
  border: '#E8EDF2',
  headerBg: '#4A90D9',
  headerText: '#fff',
  statusBar: 'dark',
};

const darkTheme = {
  dark: true,
  background: '#121212',
  surface: '#1E1E1E',
  text: '#E0E0E0',
  textSecondary: '#9E9E9E',
  border: '#333',
  headerBg: '#1E1E1E',
  headerText: '#E0E0E0',
  statusBar: 'light',
};

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const systemScheme = useColorScheme();
  const [isDark, setIsDark] = useState(systemScheme === 'dark');

  const theme = useMemo(() => (isDark ? darkTheme : lightTheme), [isDark]);

  const toggleTheme = useCallback(() => setIsDark(prev => !prev), []);

  const value = useMemo(() => ({ theme, isDark, toggleTheme }), [theme, isDark, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
}
