import React from 'react';
import { render } from '@testing-library/react-native';
import CourseDetailScreen from '../screens/CourseDetailScreen';
import { ThemeProvider } from '../context/ThemeContext';
import { ProgressProvider } from '../context/ProgressContext';

const mockNavigate = jest.fn();

function renderScreen(courseId = 'python') {
  return render(
    <ThemeProvider>
      <ProgressProvider>
        <CourseDetailScreen
          navigation={{ navigate: mockNavigate }}
          route={{ params: { courseId } }}
        />
      </ProgressProvider>
    </ThemeProvider>
  );
}

jest.setTimeout(30000);

describe('CourseDetailScreen', () => {
  it('renders course not found for invalid id', async () => {
    const { getByText } = await renderScreen('nonexistent');
    expect(getByText('Course not found')).toBeTruthy();
  });

  it('renders course header for valid course', async () => {
    const { getAllByText } = await renderScreen('python');
    expect(getAllByText(/Python/).length).toBeGreaterThan(0);
  });
});
