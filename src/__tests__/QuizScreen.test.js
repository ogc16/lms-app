import React from 'react';
import { render } from '@testing-library/react-native';
import QuizScreen from '../screens/QuizScreen';
import { ThemeProvider } from '../context/ThemeContext';
import { ProgressProvider } from '../context/ProgressContext';

const mockNavigate = jest.fn();
const mockGoBack = jest.fn();

function renderScreen(courseId = 'python', chapterId = 'py_intro') {
  return render(
    <ThemeProvider>
      <ProgressProvider>
        <QuizScreen
          navigation={{ navigate: mockNavigate, goBack: mockGoBack }}
          route={{ params: { courseId, chapterId } }}
        />
      </ProgressProvider>
    </ThemeProvider>
  );
}

jest.setTimeout(30000);

describe('QuizScreen', () => {
  it('renders no quiz message for chapter without quiz', async () => {
    const { getByText } = await renderScreen('python', 'nonexistent');
    expect(getByText('No quiz available for this chapter')).toBeTruthy();
  });

  it('renders question for valid chapter with quiz', async () => {
    const { getByText } = await renderScreen('python', 'py_intro');
    expect(getByText(/Question 1 of/)).toBeTruthy();
  });

  it('renders navigation buttons', async () => {
    const { getByText } = await renderScreen('python', 'py_intro');
    expect(getByText(/Next/)).toBeTruthy();
    expect(getByText(/Previous/)).toBeTruthy();
  });
});
