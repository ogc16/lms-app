import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ProgressProvider } from './src/context/ProgressContext';
import { ThemeProvider, useTheme } from './src/context/ThemeContext';
import AppNavigator from './src/navigation/AppNavigator';

function AppContent() {
  const { theme } = useTheme();
  return (
    <>
      <StatusBar style={theme.statusBar} />
      <AppNavigator />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <ProgressProvider>
        <AppContent />
      </ProgressProvider>
    </ThemeProvider>
  );
}
