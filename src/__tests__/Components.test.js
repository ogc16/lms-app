import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from '../context/ThemeContext';
import ProgressBar from '../components/ProgressBar';
import StatCard from '../components/StatCard';
import CourseCard from '../components/CourseCard';
import LessonListItem from '../components/LessonListItem';

jest.setTimeout(30000);

jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(() => Promise.resolve(null)),
  setItem: jest.fn(() => Promise.resolve()),
  removeItem: jest.fn(() => Promise.resolve()),
}));

const mockCourse = {
  id: 'test',
  title: 'Test Course',
  subtitle: 'Test Subtitle',
  icon: '📘',
  color: '#3498db',
  bgColor: '#ebf5fb',
  description: 'A test course',
};

describe('ProgressBar', () => {
  it('renders with correct progress', async () => {
    const { getByText } = await render(<ThemeProvider><ProgressBar progress={75} showLabel /></ThemeProvider>);
    expect(getByText('75% complete')).toBeTruthy();
  });

  it('renders without label by default', async () => {
    const { queryByText } = await render(<ThemeProvider><ProgressBar progress={50} /></ThemeProvider>);
    expect(queryByText('50% complete')).toBeNull();
  });
});

describe('StatCard', () => {
  it('renders number and label', async () => {
    const { getByText } = await render(<ThemeProvider><StatCard number={42} label="Test Label" /></ThemeProvider>);
    expect(getByText('42')).toBeTruthy();
    expect(getByText('Test Label')).toBeTruthy();
  });
});

describe('CourseCard', () => {
  it('renders full variant', async () => {
    const { getByText } = await render(
      <ThemeProvider><CourseCard course={mockCourse} progress={60} onPress={() => {}} variant="full" /></ThemeProvider>
    );
    expect(getByText('Test Course')).toBeTruthy();
    expect(getByText('Test Subtitle')).toBeTruthy();
  });

  it('renders compact variant', async () => {
    const { getByText } = await render(
      <ThemeProvider><CourseCard course={mockCourse} progress={30} onPress={() => {}} variant="compact" /></ThemeProvider>
    );
    expect(getByText('Test Course')).toBeTruthy();
  });
});

describe('LessonListItem', () => {
  it('renders lesson title', async () => {
    const lesson = { id: 'l1', title: 'My Lesson' };
    const { getByText } = await render(
      <ThemeProvider><LessonListItem lesson={lesson} completed={false} onPress={() => {}} /></ThemeProvider>
    );
    expect(getByText('My Lesson')).toBeTruthy();
  });

  it('renders completed status', async () => {
    const lesson = { id: 'l1', title: 'Done Lesson' };
    const { getByText } = await render(
      <ThemeProvider><LessonListItem lesson={lesson} completed={true} onPress={() => {}} /></ThemeProvider>
    );
    expect(getByText('Done Lesson')).toBeTruthy();
  });
});
