import React from 'react';
import { StatusBar } from 'expo-status-bar';
import ErrorBoundary from './src/components/ErrorBoundary';
import { ProgressProvider } from './src/context/ProgressContext';
import { ThemeProvider, useTheme } from './src/context/ThemeContext';
import { CommunityProvider } from './src/context/CommunityContext';
import AppNavigator from './src/navigation/AppNavigator';

function AppContent() {
  const { theme } = useTheme();
  return (
    <>
      <StatusBar
        style={theme.statusBar === 'dark' ? 'dark' : 'light'}
        translucent={true}
        backgroundColor="transparent"
      />
      <AppNavigator />
    </>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <ProgressProvider>
          <CommunityProvider>
            <AppContent />
          </CommunityProvider>
        </ProgressProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
