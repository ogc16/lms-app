import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator, Platform } from 'react-native';
import PropTypes from 'prop-types';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';
import { useProgress } from '../context/ProgressContext';
import { useTheme } from '../context/ThemeContext';
import { coursesMap } from '../data/courses';

function generateCertificateHTML(course, date, recipientName, isDark) {
  const parchment = isDark ? '#2C2416' : '#f0ebc2';
  const ink = isDark ? '#D4B896' : '#5e0e08';
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    @page { margin: 0; size: A4 portrait; }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body {
      width: 210mm; height: 297mm;
      background: ${parchment};
      font-family: 'Georgia', 'Times New Roman', serif;
    }
    .certificate-outer {
      width: 188mm; height: 275mm;
      margin: 11mm auto;
      border: 4px solid ${ink};
      display: flex; align-items: center; justify-content: center;
    }
    .certificate-inner {
      width: 174mm; height: 261mm;
      border: 2px solid ${ink};
      display: flex; flex-direction: column; align-items: center;
      justify-content: center;
      padding: 12mm 10mm;
    }
    .ribbon {
      font-size: 13pt; letter-spacing: 4px; text-transform: uppercase;
      color: ${ink}; border: 2px solid ${ink};
      padding: 5px 20px; margin-bottom: 12px;
    }
    h1 { font-size: 16pt; color: ${ink}; font-weight: 400; margin-bottom: 6px; letter-spacing: 1px; }
    .recipient { font-size: 40pt; font-weight: 700; color: ${ink}; margin-bottom: 6px; text-align: center; word-break: break-word; }
    .course-name { font-size: 24pt; font-weight: 700; color: ${ink}; margin-bottom: 12px; text-align: center; word-break: break-word; }
    p { font-size: 13pt; color: ${ink}; line-height: 1.4; text-align: center; max-width: 140mm; margin-bottom: 12px; word-break: break-word; }
    .seal { font-size: 50pt; margin-bottom: 10px; color: ${ink}; }
    .date { font-size: 13pt; color: ${ink}; opacity: 0.8; margin-bottom: 10px; }
    .signature-line {
      border-top: 2px solid ${ink};
      width: 50mm; text-align: center; padding-top: 6px;
      font-size: 13pt; color: ${ink};
    }
  </style>
</head>
<body>
  <div class="certificate-outer">
    <div class="certificate-inner">
      <div class="ribbon">Certificate of Completion</div>
      <h1>This certifies that</h1>
      <div class="recipient">${recipientName}</div>
      <h1>has successfully completed the course</h1>
      <div class="course-name">${course.title}</div>
      <p>${course.description}</p>
      <div class="seal">&#10003;</div>
      <div class="date">Completed on ${date}</div>
      <div class="signature-line">MyLec</div>
    </div>
  </div>
</body>
</html>`;
}

export default function CertificateScreen({ route, navigation }) {
  const { courseId } = route.params;
  const { isCourseComplete, setCourseCompletionDate, getCourseCompletionDate, userName } = useProgress();
  const { theme, isDark } = useTheme();
  const [saving, setSaving] = useState(false);

  const course = coursesMap[courseId];
  const completed = course ? isCourseComplete(course.id, course.chapters) : false;

  const completionDate = course ? getCourseCompletionDate(course.id) : null;
  const dateStr = completionDate
    ? completionDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    : '';

  if (!course) {
    return (
      <View style={[styles.centerContainer, { backgroundColor: theme.background }]}>
        <Text style={[styles.centerText, { color: theme.text }]}>Course not found</Text>
      </View>
    );
  }

  if (!completed) {
    return (
      <View style={[styles.centerContainer, { backgroundColor: theme.background }]}>
        <Text style={styles.lockIcon}>🔒</Text>
        <Text style={[styles.centerText, { color: theme.text }]}>Course not yet completed</Text>
        <Text style={[styles.centerSubtext, { color: theme.textSecondary }]}>
          Complete all lessons and quizzes to unlock your certificate
        </Text>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>Back to Course</Text>
        </TouchableOpacity>
      </View>
    );
  }

  useEffect(() => {
    if (completed && !completionDate) {
      setCourseCompletionDate(course.id);
    }
  }, [completed, completionDate, course, setCourseCompletionDate]);

  const handleSavePDF = async () => {
    setSaving(true);
    try {
      const html = generateCertificateHTML(course, dateStr, userName, isDark);
      if (Platform.OS === 'web') {
        const iframe = document.createElement('iframe');
        iframe.style.position = 'fixed';
        iframe.style.right = '-9999px';
        iframe.style.top = '-9999px';
        document.body.appendChild(iframe);
        const doc = iframe.contentWindow.document;
        doc.open();
        doc.write(html);
        doc.close();
        iframe.contentWindow.focus();
        iframe.contentWindow.print();
      } else {
        const { uri } = await Print.printToFileAsync({ html });
        if (await Sharing.isAvailableAsync()) {
          await Sharing.shareAsync(uri, { mimeType: 'application/pdf' });
        }
      }
    } catch (e) {
      console.warn('PDF export failed', e);
    } finally {
      setSaving(false);
    }
  };

  const parchment = isDark ? '#2C2416' : '#f0ebc2';
  const ink = isDark ? '#D4B896' : '#5e0e08';

  return (
    <ScrollView style={[styles.screen, { backgroundColor: parchment }]} contentContainerStyle={styles.screenContent}>
      <View style={styles.certificateContainer}>
        <View style={[styles.borderDouble, { borderColor: ink }]}>
          <View style={[styles.inner, { borderColor: ink }]}>
            <Text style={[styles.ribbon, { color: ink, borderColor: ink }]}>Certificate of Completion</Text>
            <Text style={[styles.certifies, { color: ink }]}>This certifies that</Text>
            <Text style={[styles.recipient, { color: ink }]}>{userName}</Text>
            <Text style={[styles.certifies, { color: ink }]}>has successfully completed the course</Text>
            <Text style={[styles.courseName, { color: ink }]}>{course.title}</Text>
            <Text style={[styles.description, { color: ink }]}>{course.description}</Text>
            <Text style={[styles.seal, { color: ink }]}>✓</Text>
            <Text style={[styles.date, { color: ink }]}>Completed on {dateStr}</Text>
            <View style={[styles.signatureLine, { borderColor: ink }]}>
              <Text style={[styles.signatureText, { color: ink }]}>MyLec</Text>
            </View>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={[styles.downloadButton, saving && styles.downloadButtonDisabled, { backgroundColor: ink }]}
        onPress={handleSavePDF}
        disabled={saving}
      >
        {saving ? (
          <ActivityIndicator color={parchment} size="small" />
        ) : (
          <Text style={[styles.downloadText, { color: parchment }]}>Save as PDF</Text>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  screenContent: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  certificateContainer: {
    width: '92%',
    maxWidth: 500,
    aspectRatio: 0.707,
    marginVertical: 16,
  },
  borderDouble: {
    flex: 1,
    borderWidth: 6,
    borderRadius: 16,
    padding: 12,
  },
  inner: {
    flex: 1,
    borderWidth: 2,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  ribbon: {
    fontSize: 13,
    letterSpacing: 4,
    textTransform: 'uppercase',
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 4,
    marginBottom: 16,
    fontWeight: '600',
  },
  certifies: {
    fontSize: 16,
    marginBottom: 6,
    textAlign: 'center',
  },
  recipient: {
    fontSize: 36,
    fontWeight: '800',
    marginBottom: 6,
  },
  courseName: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 14,
    textAlign: 'center',
  },
  description: {
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 18,
    paddingHorizontal: 10,
    opacity: 0.85,
  },
  seal: {
    fontSize: 50,
    marginBottom: 10,
    fontWeight: '700',
  },
  date: {
    fontSize: 13,
    opacity: 0.8,
    marginBottom: 14,
  },
  signatureLine: {
    borderTopWidth: 2,
    width: 200,
    alignItems: 'center',
    paddingTop: 8,
  },
  signatureText: {
    fontSize: 13,
    letterSpacing: 1,
  },
  downloadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 12,
    marginBottom: 32,
    minWidth: 180,
    elevation: 4,
    boxShadow: '0px 4px 12px rgba(94, 14, 8, 0.3)',
  },
  downloadButtonDisabled: {
    opacity: 0.7,
  },
  downloadText: {
    fontSize: 16,
    fontWeight: '700',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  centerText: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
  },
  centerSubtext: {
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 24,
  },
  lockIcon: {
    fontSize: 48,
    marginBottom: 16,
  },
  backButton: {
    backgroundColor: '#4A90D9',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 32,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});
