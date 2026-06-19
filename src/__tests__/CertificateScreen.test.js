import React from 'react';
import { render } from '@testing-library/react-native';
import CertificateScreen from '../screens/CertificateScreen';
import { ThemeProvider } from '../context/ThemeContext';
import { ProgressProvider } from '../context/ProgressContext';

const mockNavigate = jest.fn();
const mockGoBack = jest.fn();

function renderScreen(courseId = 'python') {
  return render(
    <ThemeProvider>
      <ProgressProvider>
        <CertificateScreen
          navigation={{ navigate: mockNavigate, goBack: mockGoBack }}
          route={{ params: { courseId } }}
        />
      </ProgressProvider>
    </ThemeProvider>
  );
}

jest.setTimeout(30000);

describe('CertificateScreen', () => {
  it('renders locked state when course not completed', async () => {
    const { getByText } = await renderScreen('python');
    expect(getByText('Course not yet completed')).toBeTruthy();
  });

  it('renders back button', async () => {
    const { getByText } = await renderScreen('python');
    expect(getByText('Back to Course')).toBeTruthy();
  });
});
