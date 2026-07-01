import React from 'react';
import { render } from '@testing-library/react-native';
import HomeScreen from '../screens/HomeScreen';
import { ThemeProvider } from '../context/ThemeContext';
import { ProgressProvider } from '../context/ProgressContext';
import { CommunityProvider } from '../context/CommunityContext';

jest.mock('react-native-safe-area-context', () => {
  const inset = { top: 0, right: 0, bottom: 0, left: 0 };
  return {
    SafeAreaProvider: ({ children }) => children,
    SafeAreaView: ({ children }) => children,
    useSafeAreaInsets: () => inset,
  };
});

const mockNavigate = jest.fn();

function renderScreen() {
  return render(
    <ThemeProvider>
      <ProgressProvider>
        <CommunityProvider>
          <HomeScreen navigation={{ navigate: mockNavigate }} />
        </CommunityProvider>
      </ProgressProvider>
    </ThemeProvider>
  );
}

jest.setTimeout(30000);

describe('HomeScreen', () => {
  it('renders welcome greeting', async () => {
    const { getByText } = await renderScreen();
    expect(getByText(/Welcome back/)).toBeTruthy();
  });

  it('renders user name', async () => {
    const { getByText } = await renderScreen();
    expect(getByText('Learner!')).toBeTruthy();
  });

  it('renders tagline', async () => {
    const { getByText } = await renderScreen();
    expect(getByText(/Continue your learning journey/)).toBeTruthy();
  });

  it('renders Available Courses section', async () => {
    const { getByText } = await renderScreen();
    expect(getByText('Available Courses')).toBeTruthy();
  });

  it('renders quick action buttons', async () => {
    const { getByText } = await renderScreen();
    expect(getByText('Progress')).toBeTruthy();
    expect(getByText('Resume')).toBeTruthy();
    expect(getByText('New Course')).toBeTruthy();
  });

  it('renders badges section', async () => {
    const { getByText } = await renderScreen();
    expect(getByText(/Your Badges/)).toBeTruthy();
  });

  it('renders community section', async () => {
    const { getByText } = await renderScreen();
    expect(getByText(/Community/)).toBeTruthy();
  });
});
