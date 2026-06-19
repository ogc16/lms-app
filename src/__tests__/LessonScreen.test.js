import React from 'react';
import { render } from '@testing-library/react-native';
import LessonScreen from '../screens/LessonScreen';
import { ThemeProvider } from '../context/ThemeContext';
import { ProgressProvider } from '../context/ProgressContext';

const mockNavigate = jest.fn();
const mockReplace = jest.fn();
const mockGoBack = jest.fn();

function renderScreen(courseId = 'python', chapterId = 'py_intro', lessonId = 'py_what_is') {
  return render(
    <ThemeProvider>
      <ProgressProvider>
        <LessonScreen
          navigation={{ navigate: mockNavigate, replace: mockReplace, goBack: mockGoBack }}
          route={{ params: { courseId, chapterId, lessonId } }}
        />
      </ProgressProvider>
    </ThemeProvider>
  );
}

jest.setTimeout(30000);

describe('LessonScreen', () => {
  it('renders course not found for invalid course', async () => {
    const { getByText } = await renderScreen('nonexistent', 'ch1', 'l1');
    expect(getByText('Course not found')).toBeTruthy();
  });

  it('renders lesson content for valid params', async () => {
    const { getAllByText } = await renderScreen('python', 'py_intro', 'py_what_is');
    expect(getAllByText(/What is Python/).length).toBeGreaterThan(0);
  });

  it('renders complete button', async () => {
    const { getByText } = await renderScreen('python', 'py_intro', 'py_what_is');
    expect(getByText(/Mark as Complete/)).toBeTruthy();
  });
});
