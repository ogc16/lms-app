import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator, Platform, useWindowDimensions } from 'react-native';
import PropTypes from 'prop-types';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';
import { useProgress } from '../context/ProgressContext';
import { useTheme } from '../context/ThemeContext';
import { coursesMap } from '../data/courses';
import logo1Base64 from '../assets/logo1Base64';
import { create } from 'qrcode/lib/core/qrcode';

const CERT_PARCHMENT = '#D4B896';
const CERT_INK = 'rgb(94, 14, 8)';

function generateQrSvg(text) {
  const qr = create(text, { errorCorrectionLevel: 'M' });
  const size = qr.modules.size;
  const cell = 6;
  const pad = 6;
  const total = size * cell + pad * 2;
  let svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${total} ${total}" shape-rendering="crispEdges">`;
  svg += `<rect width="${total}" height="${total}" fill="${CERT_PARCHMENT}"/>`;
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      if (qr.modules.get(row, col)) {
        svg += `<rect x="${pad + col * cell}" y="${pad + row * cell}" width="${cell}" height="${cell}" fill="#5E0E08"/>`;
      }
    }
  }
  svg += '</svg>';
  return svg;
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function generateCertificateHTML(course, date, recipientName, serial, qrSvg) {
  const safeCourse = course || {};
  const safeTitle = escapeHtml(safeCourse.title || 'Course Completion');
  const safeDescription = escapeHtml(safeCourse.description || 'This certificate recognizes successful completion of the course.');
  const safeRecipient = escapeHtml(recipientName || 'Learner');
  const safeDate = escapeHtml(date || '');
  const safeSerial = escapeHtml(serial || '');

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    @page { margin: 0; size: A4 portrait; }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body {
      width: 210mm; height: 297mm; overflow: hidden;
      background: ${CERT_PARCHMENT};
      font-family: 'Georgia', 'Times New Roman', serif;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    .certificate-outer {
      width: 188mm; height: 275mm;
      margin: 11mm auto;
      border: 4px solid ${CERT_INK};
      background: ${CERT_PARCHMENT};
      display: flex; align-items: center; justify-content: center;
      position: relative;
    }
    .watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%) rotate(-30deg);
      font-size: 80pt;
      color: ${CERT_INK};
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
      border: 2px solid ${CERT_INK};
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 8mm 10mm 10mm;
      position: relative;
      z-index: 1;
      text-align: center;
    }
    .certificate-header {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 6mm;
    }
    .certificate-content {
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2mm;
      padding: 0 4mm;
    }
    .footer-row {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-top: 6mm;
      width: 100%;
      gap: 4mm;
    }
    .signature-block {
      display: flex;
      flex-direction: column;
      align-items: center;
      min-width: 50mm;
      flex: 1;
    }
    .logo {
      width: 200px; height: auto; margin-bottom: 10px;
    }
    .ribbon {
      font-size: 12pt; letter-spacing: 3px; text-transform: uppercase;
      color: ${CERT_INK}; border: 2px solid ${CERT_INK};
      padding: 4px 16px; margin-bottom: 10px;
    }
    h1 { font-size: 14pt; color: ${CERT_INK}; font-weight: 400; margin-bottom: 4px; letter-spacing: 1px; }
    .recipient { font-size: 32pt; font-weight: 700; color: ${CERT_INK}; margin-bottom: 4px; text-align: center; word-break: break-word; max-width: 100%; }
    .course-name { font-size: 20pt; font-weight: 700; color: ${CERT_INK}; margin-bottom: 10px; text-align: center; word-break: break-word; max-width: 100%; }
    p { font-size: 12pt; color: ${CERT_INK}; line-height: 1.3; text-align: center; max-width: 140mm; margin-bottom: 10px; word-break: break-word; }
    .seal { font-size: 40pt; margin-bottom: 8px; color: ${CERT_INK}; }
    .date { font-size: 12pt; color: ${CERT_INK}; opacity: 0.8; margin-bottom: 4px; }
    .serial { font-size: 9pt; color: ${CERT_INK}; opacity: 0.6; margin-bottom: 8px; font-family: 'Courier New', monospace; letter-spacing: 1px; }
    .signature-line {
      border-top: 2px solid ${CERT_INK};
      width: 50mm; text-align: center; padding-top: 4px;
      font-size: 12pt; color: ${CERT_INK};
    }
    .qr-container {
      width: 36mm;
      height: 36mm;
      background: ${CERT_PARCHMENT};
      padding: 2mm;
      border-radius: 2mm;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    .qr-container svg {
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
      <div class="certificate-header">
        <img class="logo" src="data:image/png;base64,${logo1Base64}" alt="Logo" />
        <div class="ribbon">Certificate of Completion</div>
      </div>
      <div class="certificate-content">
        <h1>This certifies that</h1>
        <div class="recipient">${safeRecipient}</div>
        <h1>has successfully completed the course</h1>
        <div class="course-name">${safeTitle}</div>
        <p>${safeDescription}</p>
        <div class="seal">&#10003;</div>
        <div class="date">Completed on ${safeDate}</div>
        ${safeSerial ? `<div class="serial">Serial: ${safeSerial}</div>` : ''}
      </div>
      <div class="footer-row">
        <div class="signature-block">
          <div class="signature-line">MyLec</div>
        </div>
        <div class="qr-container">
          ${qrSvg}
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;
}

export function getCertificateLayoutConfig(screenWidth) {
  const isCompact = screenWidth < 380;
  const scale = Math.min(Math.max(screenWidth / 375, 0.8), 1.2);
  const maxWidth = Math.min(screenWidth * (isCompact ? 0.96 : 0.9), isCompact ? 360 : 520);

  return {
    isCompact,
    scale,
    maxWidth,
    outerPadding: isCompact ? 8 : 10,
    innerPadding: isCompact ? 10 : 16,
    logoSize: isCompact ? 48 : 60,
    ribbonPaddingHorizontal: isCompact ? 12 : 16,
    ribbonPaddingVertical: isCompact ? 3 : 4,
    signatureWidth: isCompact ? 140 : 180,
    borderWidth: isCompact ? 3 : 5,
    innerBorderWidth: 2,
  };
}

export default function CertificateScreen({ route, navigation }) {
  const { courseId } = route.params;
  const { isCourseComplete, setCourseCompletionDate, getCourseCompletionDate, getCertificateSerial, userName } = useProgress();
  const { theme, isDark } = useTheme();
  const [saving, setSaving] = useState(false);
  const { width: screenWidth } = useWindowDimensions();
  const layout = getCertificateLayoutConfig(screenWidth);
  const scale = layout.scale;
  const s = (size) => Math.round(size * scale);

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
        <Text style={[styles.centerText, { color: theme.text, fontSize: s(20) }]}>Course not found</Text>
      </View>
    );
  }

  if (!completed) {
    return (
      <View style={[styles.centerContainer, { backgroundColor: theme.background }]}>
        <Text style={[styles.lockIcon, { fontSize: s(48) }]}>🔒</Text>
        <Text style={[styles.centerText, { color: theme.text, fontSize: s(20) }]}>Course not yet completed</Text>
        <Text style={[styles.centerSubtext, { color: theme.textSecondary, fontSize: s(14), lineHeight: s(20) }]}>
          Complete all lessons and quizzes to unlock your certificate
        </Text>
        <TouchableOpacity
          style={[styles.backButton, { paddingVertical: s(14), paddingHorizontal: s(32), borderRadius: s(12) }]}
          onPress={() => navigation.goBack()}
          accessibilityLabel="Back to course"
          accessibilityRole="button"
        >
          <Text style={[styles.backButtonText, { fontSize: s(16) }]}>Back to Course</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const handleSavePDF = async () => {
    setSaving(true);
    try {
      const qrText = `Course: ${course.title}|Recipient: ${userName}|Date: ${dateStr}`;
      const qrSvg = generateQrSvg(qrText);
      const html = generateCertificateHTML(course, dateStr, userName, certificateSerial, qrSvg);
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

  const parchment = '#D4B896';
  const ink = 'rgb(94, 14, 8)';

  return (
    <ScrollView style={[styles.screen, { backgroundColor: parchment }]} contentContainerStyle={[styles.screenContent, { paddingHorizontal: s(12) }]}> 
      <View style={[styles.certificateContainer, { width: '100%', maxWidth: layout.maxWidth }]}> 
        <View style={[styles.borderDouble, { borderColor: ink, borderWidth: s(layout.borderWidth), borderRadius: s(14), padding: s(layout.outerPadding) }]}> 
          <View style={[styles.inner, { borderColor: ink, borderWidth: s(layout.innerBorderWidth), borderRadius: s(8), padding: s(layout.innerPadding) }]}> 
            <Image source={require('../../assets/logo1.png')} style={[styles.logo, { width: s(layout.logoSize), height: s(layout.logoSize) }]} resizeMode="contain" />
            <Text style={[styles.ribbon, { color: ink, borderColor: ink, fontSize: s(12), paddingHorizontal: s(layout.ribbonPaddingHorizontal), paddingVertical: s(layout.ribbonPaddingVertical) }]}>Certificate of Completion</Text>
            <Text style={[styles.certifies, { color: ink, fontSize: s(14) }]}>This certifies that</Text>
            <Text style={[styles.recipient, { color: ink, fontSize: s(28) }]} numberOfLines={2} adjustsFontSizeToFit>{userName || 'Learner'}</Text>
            <Text style={[styles.certifies, { color: ink, fontSize: s(14) }]}>has successfully completed the course</Text>
            <Text style={[styles.courseName, { color: ink, fontSize: s(20) }]} numberOfLines={3} adjustsFontSizeToFit>{course.title || 'Course Completion'}</Text>
            <Text style={[styles.description, { color: ink, fontSize: s(12), lineHeight: s(18) }]} numberOfLines={4}>{course.description || 'This certificate recognizes successful completion of the course.'}</Text>
            <Text style={[styles.seal, { color: ink, fontSize: s(38) }]}>✓</Text>
            <Text style={[styles.date, { color: ink, fontSize: s(12) }]}>Completed on {dateStr}</Text>
            {certificateSerial && <Text style={[styles.serialText, { color: ink, fontSize: s(10) }]}>Serial: {certificateSerial}</Text>}
            <View style={[styles.signatureLine, { borderColor: ink, width: s(layout.signatureWidth), paddingTop: s(6) }]}> 
            </View>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={[styles.downloadButton, saving && styles.downloadButtonDisabled, { backgroundColor: ink, paddingVertical: s(14), paddingHorizontal: s(32), borderRadius: s(12) }]}
        onPress={handleSavePDF}
        disabled={saving}
        accessibilityLabel="Save certificate as PDF"
        accessibilityRole="button"
      >
        {saving ? (
          <ActivityIndicator color={parchment} size={screenWidth < 375 ? 'small' : 'large'} />
        ) : (
          <Text style={[styles.downloadText, { color: parchment, fontSize: s(16) }]}>Save as PDF</Text>
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
   logo: {
     width: 60,
     height: 60,
     marginBottom: 8,
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
     textAlign: 'center',
     maxWidth: '100%',
   },
   courseName: {
     fontSize: 20,
     fontWeight: '700',
     marginBottom: 10,
     textAlign: 'center',
     maxWidth: '100%',
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
