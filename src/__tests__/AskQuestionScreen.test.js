import React from 'react';
import { render } from '@testing-library/react-native';
import AskQuestionScreen from '../screens/AskQuestionScreen';
import { ThemeProvider } from '../context/ThemeContext';
import { ProgressProvider } from '../context/ProgressContext';
import { CommunityProvider } from '../context/CommunityContext';

const mockNavigate = jest.fn();

function renderScreen() {
  return render(
    <ThemeProvider>
      <ProgressProvider>
        <CommunityProvider>
          <AskQuestionScreen navigation={{ navigate: mockNavigate }} />
        </CommunityProvider>
      </ProgressProvider>
    </ThemeProvider>
  );
}

jest.setTimeout(30000);

describe('AskQuestionScreen', () => {
  it('renders header', async () => {
    const { getByText } = await renderScreen();
    expect(getByText(/Community Q&A/)).toBeTruthy();
  });

  it('renders ask title', async () => {
    const { getByText } = await renderScreen();
    expect(getByText('Ask a Question')).toBeTruthy();
  });

  it('renders submit button', async () => {
    const { getByText } = await renderScreen();
    expect(getByText('Post Question')).toBeTruthy();
  });

  it('renders recent questions section', async () => {
    const { getByText } = await renderScreen();
    expect(getByText(/Recent Questions/)).toBeTruthy();
  });
});
