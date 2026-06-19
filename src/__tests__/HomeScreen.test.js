import React from 'react';
import { render } from '@testing-library/react-native';
import HomeScreen from '../screens/HomeScreen';
import { ThemeProvider } from '../context/ThemeContext';
import { ProgressProvider } from '../context/ProgressContext';

const mockNavigate = jest.fn();

function renderScreen() {
  return render(
    <ThemeProvider>
      <ProgressProvider>
        <HomeScreen navigation={{ navigate: mockNavigate }} />
      </ProgressProvider>
    </ThemeProvider>
  );
}

jest.setTimeout(30000);

describe('HomeScreen', () => {
  it('renders the logo', async () => {
    const { getByText } = await renderScreen();
    expect(getByText('📚 MyLec')).toBeTruthy();
  });

  it('renders dynamic tagline with course count', async () => {
    const { getByText } = await renderScreen();
    expect(getByText(/Learn .+ Courses/)).toBeTruthy();
  });

  it('renders Available Courses section', async () => {
    const { getByText } = await renderScreen();
    expect(getByText('Available Courses')).toBeTruthy();
  });

  it('renders quick action buttons', async () => {
    const { getByText } = await renderScreen();
    expect(getByText('View My Progress')).toBeTruthy();
    expect(getByText('My Profile')).toBeTruthy();
  });
});
