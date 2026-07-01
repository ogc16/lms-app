import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator, Platform } from 'react-native';
import PropTypes from 'prop-types';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';
import { useProgress } from '../context/ProgressContext';
import { useTheme } from '../context/ThemeContext';
import { coursesMap } from '../data/courses';

function generateCertificateHTML(course, date, recipientName, isDark, serial) {
  const parchment = isDark ? '#2C2416' : '#f0ebc2';
  const ink = isDark ? '#D4B896' : '#5e0e08';
  const qrData = encodeURIComponent(`Course: ${course.title} | Recipient: ${recipientName} | Date: ${date}`);
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    @page { margin: 0; size: A4 portrait; }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body {
      width: 210mm; height: 297mm; overflow: hidden;
      background: ${parchment};
      font-family: 'Georgia', 'Times New Roman', serif;
    }
    .certificate-outer {
      width: 188mm; height: 275mm;
      margin: 11mm auto;
      border: 4px solid ${ink};
      display: flex; align-items: center; justify-content: center;
      position: relative;
    }
    .watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%) rotate(-30deg);
      font-size: 80pt;
      color: ${ink};
      opacity: 0.04;
      font-family: 'Georgia', serif;
      font-weight: bold;
      pointer-events: none;
      white-space: nowrap;
      letter-spacing: 8px;
      z-index: 0;
    }
    .certificate-inner {
      width: 174mm; height: 261mm;
      border: 2px solid ${ink};
      display: flex; flex-direction: column; align-items: center;
      justify-content: center;
      padding: 8mm 10mm;
      position: relative;
      z-index: 1;
    }
    .ribbon {
      font-size: 12pt; letter-spacing: 3px; text-transform: uppercase;
      color: ${ink}; border: 2px solid ${ink};
      padding: 4px 16px; margin-bottom: 10px;
    }
    h1 { font-size: 14pt; color: ${ink}; font-weight: 400; margin-bottom: 4px; letter-spacing: 1px; }
    .recipient { font-size: 32pt; font-weight: 700; color: ${ink}; margin-bottom: 4px; text-align: center; word-break: break-word; }
    .course-name { font-size: 20pt; font-weight: 700; color: ${ink}; margin-bottom: 10px; text-align: center; word-break: break-word; }
    p { font-size: 12pt; color: ${ink}; line-height: 1.3; text-align: center; max-width: 140mm; margin-bottom: 10px; word-break: break-word; }
    .seal { font-size: 40pt; margin-bottom: 8px; color: ${ink}; }
    .date { font-size: 12pt; color: ${ink}; opacity: 0.8; margin-bottom: 4px; }
    .serial { font-size: 9pt; color: ${ink}; opacity: 0.6; margin-bottom: 8px; font-family: 'Courier New', monospace; letter-spacing: 1px; }
    .signature-line {
      border-top: 2px solid ${ink};
      width: 50mm; text-align: center; padding-top: 4px;
      font-size: 12pt; color: ${ink};
    }
    .qr-container {
      position: absolute;
      bottom: 8mm;
      right: 8mm;
      width: 36mm;
      height: 36mm;
      background: white;
      padding: 2mm;
      border-radius: 2mm;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .qr-container img {
      width: 100%;
      height: 100%;
      display: block;
    }
  </style>
</head>
<body>
  <div class="certificate-outer">
    <div class="watermark">MyLec</div>
    <div class="certificate-inner">
      <div class="ribbon">Certificate of Completion</div>
      <h1>This certifies that</h1>
      <div class="recipient">${recipientName}</div>
      <h1>has successfully completed the course</h1>
      <div class="course-name">${course.title}</div>
      <p>${course.description}</p>
      <div class="seal">&#10003;</div>
      <div class="date">Completed on ${date}</div>
      ${serial ? `<div class="serial">Serial: ${serial}</div>` : ''}
      <div class="signature-line">MyLec</div>
      <div class="qr-container">
        <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrData}" alt="QR Code" />
      </div>
    </div>
  </div>
</body>
</html>`;
}

export default function CertificateScreen({ route, navigation }) {
  const { courseId } = route.params;
  const { isCourseComplete, setCourseCompletionDate, getCourseCompletionDate, getCertificateSerial, userName } = useProgress();
  const { theme, isDark } = useTheme();
  const [saving, setSaving] = useState(false);

  const course = coursesMap[courseId];
  const completed = course ? isCourseComplete(course.id, course.chapters) : false;

  const completionDate = course ? getCourseCompletionDate(course.id) : null;
  const dateStr = completionDate
    ? completionDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    : '';
  const certificateSerial = course && completed ? getCertificateSerial(course.id) : null;

  useEffect(() => {
    if (completed && !completionDate && course) {
      setCourseCompletionDate(course.id);
    }
  }, [completed, completionDate, course, setCourseCompletionDate]);

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
          accessibilityLabel="Back to course"
          accessibilityRole="button"
        >
          <Text style={styles.backButtonText}>Back to Course</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const handleSavePDF = async () => {
    setSaving(true);
    try {
      const html = generateCertificateHTML(course, dateStr, userName, isDark, certificateSerial);
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
          await Sharing.shareAsync(uri, { mimeType: 'application/pdf', dialogTitle: 'Download Certificate' });
        } else {
          alert('Sharing is not available on this device.');
        }
      }
    } catch (e) {
      console.warn('PDF export failed', e);
      alert('Failed to export certificate. Please try again.');
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
            {certificateSerial && <Text style={[styles.serialText, { color: ink }]}>Serial: {certificateSerial}</Text>}
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
        accessibilityLabel="Save certificate as PDF"
        accessibilityRole="button"
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
     width: '90%',
     maxWidth: 380,
     aspectRatio: 0.707,
     marginVertical: 12,
   },
   borderDouble: {
     flex: 1,
     borderWidth: 5,
     borderRadius: 14,
     padding: 10,
   },
   inner: {
     flex: 1,
     borderWidth: 2,
     borderRadius: 8,
     alignItems: 'center',
     justifyContent: 'center',
     padding: 16,
   },
   ribbon: {
     fontSize: 12,
     letterSpacing: 3,
     textTransform: 'uppercase',
     borderWidth: 1,
     paddingHorizontal: 16,
     paddingVertical: 4,
     borderRadius: 4,
     marginBottom: 12,
     fontWeight: '600',
   },
   certifies: {
     fontSize: 14,
     marginBottom: 4,
     textAlign: 'center',
   },
   recipient: {
     fontSize: 28,
     fontWeight: '800',
     marginBottom: 4,
   },
   courseName: {
     fontSize: 20,
     fontWeight: '700',
     marginBottom: 10,
     textAlign: 'center',
   },
   description: {
     fontSize: 12,
     textAlign: 'center',
     lineHeight: 18,
     marginBottom: 14,
     paddingHorizontal: 8,
     opacity: 0.85,
   },
   seal: {
     fontSize: 38,
     marginBottom: 8,
     fontWeight: '700',
   },
   date: {
     fontSize: 12,
     opacity: 0.8,
     marginBottom: 10,
   },
   signatureLine: {
     borderTopWidth: 2,
     width: 180,
     alignItems: 'center',
     paddingTop: 6,
   },
  signatureText: {
    fontSize: 12,
    letterSpacing: 1,
  },
  serialText: {
    fontSize: 10,
    opacity: 0.6,
    marginBottom: 8,
    fontFamily: 'monospace',
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
    shadowColor: '#5e0e08',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
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
