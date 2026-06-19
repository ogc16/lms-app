import React from 'react';
import { render } from '@testing-library/react-native';
import ProfileScreen from '../screens/ProfileScreen';
import { ThemeProvider } from '../context/ThemeContext';
import { ProgressProvider } from '../context/ProgressContext';

const mockNavigate = jest.fn();

function renderScreen() {
  return render(
    <ThemeProvider>
      <ProgressProvider>
        <ProfileScreen navigation={{ navigate: mockNavigate }} />
      </ProgressProvider>
    </ThemeProvider>
  );
}

jest.setTimeout(30000);

describe('ProfileScreen', () => {
  it('renders header with default name', async () => {
    const { getByText } = await renderScreen();
    expect(getByText(/Learner/)).toBeTruthy();
  });

  it('renders settings section', async () => {
    const { getByText } = await renderScreen();
    expect(getByText('Dark Mode')).toBeTruthy();
  });

  it('renders actions section', async () => {
    const { getByText } = await renderScreen();
    expect(getByText(/Detailed Progress Report/)).toBeTruthy();
  });
});
