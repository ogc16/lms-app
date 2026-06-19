import React from 'react';
import { render } from '@testing-library/react-native';
import ProgressScreen from '../screens/ProgressScreen';
import { ThemeProvider } from '../context/ThemeContext';
import { ProgressProvider } from '../context/ProgressContext';

const mockNavigate = jest.fn();

function renderScreen() {
  return render(
    <ThemeProvider>
      <ProgressProvider>
        <ProgressScreen navigation={{ navigate: mockNavigate }} />
      </ProgressProvider>
    </ThemeProvider>
  );
}

jest.setTimeout(30000);

describe('ProgressScreen', () => {
  it('renders header', async () => {
    const { getByText } = await renderScreen();
    expect(getByText(/Your Progress/)).toBeTruthy();
  });

  it('renders overall progress section', async () => {
    const { getByText } = await renderScreen();
    expect(getByText(/Overall Complete/)).toBeTruthy();
  });

  it('renders reset button', async () => {
    const { getByText } = await renderScreen();
    expect(getByText(/Reset All Progress/)).toBeTruthy();
  });
});
