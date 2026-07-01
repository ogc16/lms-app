import React from 'react';
import { render } from '@testing-library/react-native';
import CertificateScreen, { generateCertificateHTML, getCertificateLayoutConfig } from '../screens/CertificateScreen';
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

  it('escapes certificate values in generated PDF HTML', () => {
    const html = generateCertificateHTML(
      { title: 'A&B <Course>', description: 'A "quote" & more' },
      'July 1, 2026',
      'Jane & John <Learner>',
      'ABC-123',
      '<svg></svg>'
    );

    expect(html).toContain('Jane &amp; John &lt;Learner&gt;');
    expect(html).toContain('A&amp;B &lt;Course&gt;');
    expect(html).toContain('A &quot;quote&quot; &amp; more');
  });

  it('uses structured layout sections in the generated PDF HTML', () => {
    const html = generateCertificateHTML(
      { title: 'Python Basics', description: 'Completed successfully' },
      'July 1, 2026',
      'Jane Learner',
      'ABC-123',
      '<svg></svg>'
    );

    expect(html).toContain('certificate-content');
    expect(html).toContain('footer-row');
    expect(html).toContain('signature-block');
  });

  it('returns a compact layout on small phone widths', () => {
    const layout = getCertificateLayoutConfig(320);

    expect(layout.isCompact).toBe(true);
    expect(layout.maxWidth).toBeLessThanOrEqual(360);
    expect(layout.logoSize).toBeLessThanOrEqual(48);
  });
});
