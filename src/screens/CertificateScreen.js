import React, { useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform } from 'react-native';
import PropTypes from 'prop-types';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';
import { pythonCourse } from '../data/pythonCourse';
import { cppCourse } from '../data/cppCourse';
import { cybersecurityCourse } from '../data/cybersecurityCourse';
import { ethicalhackerCourse } from '../data/ethicalhackerCourse';
import { bitCoreCourse } from '../data/bitCoreCourse';
import { goCourse } from '../data/goCourse';
import { swiftCourse } from '../data/swiftCourse';
import { csharpCourse } from '../data/csharpCourse';
import { vbCourse } from '../data/vbCourse';
import { webDevCourse } from '../data/webDevCourse';
import { sqlCourse } from '../data/sqlCourse';
import { nextjsCourse } from '../data/nextjsCourse';
import { reactNativeCourse } from '../data/reactNativeCourse';
import { financialRecordsCourse } from '../data/financialRecordsCourse';
import { operationsManagementCourse } from '../data/operationsManagementCourse';
import { financialAccountingCourse } from '../data/financialAccountingCourse';

const courses = { python: pythonCourse, cpp: cppCourse, cybersecurity: cybersecurityCourse, ethicalhacker: ethicalhackerCourse, bit_core: bitCoreCourse, go: goCourse, swift: swiftCourse, csharp: csharpCourse, vb: vbCourse, web_dev: webDevCourse, sql: sqlCourse, nextjs: nextjsCourse, react_native: reactNativeCourse, financial_records: financialRecordsCourse, operations_management: operationsManagementCourse, financial_accounting: financialAccountingCourse };

function generateCertificateHTML(course, date) {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    @page { margin: 0; size: A4 portrait; }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body {
      width: 210mm; height: 297mm;
      background: #f0ebc2;
      font-family: 'Georgia', 'Times New Roman', serif;
      display: flex; align-items: center; justify-content: center;
    }
    .certificate {
      width: 180mm; height: 255mm;
      border: 8px double #5e0e08;
      border-radius: 16px;
      display: flex; flex-direction: column; align-items: center;
      justify-content: center;
      padding: 20mm 15mm;
    }
    .ribbon {
      font-size: 14pt; letter-spacing: 4px; text-transform: uppercase;
      color: #5e0e08; border: 2px solid #5e0e08;
      padding: 6px 24px; border-radius: 4px; margin-bottom: 20px;
      font-family: 'Arial', sans-serif;
    }
    h1 { font-size: 18pt; color: #5e0e08; font-weight: 400; margin-bottom: 10px; letter-spacing: 1px; }
    .recipient { font-size: 48pt; font-weight: 700; color: #5e0e08; margin-bottom: 10px; }
    .course-name { font-size: 28pt; font-weight: 700; color: #5e0e08; margin-bottom: 20px; text-align: center; }
    p { font-size: 14pt; color: #5e0e08; line-height: 1.5; text-align: center; max-width: 150mm; margin-bottom: 20px; }
    .seal { font-size: 60pt; margin-bottom: 16px; color: #5e0e08; }
    .date { font-size: 14pt; color: #5e0e08; opacity: 0.8; margin-bottom: 16px; }
    .signature-line {
      border-top: 2px solid #5e0e08;
      width: 50mm; text-align: center; padding-top: 8px;
      font-size: 14pt; color: #5e0e08;
    }
  </style>
</head>
<body>
  <div class="certificate">
    <div class="ribbon">Certificate of Completion</div>
    <h1>This certifies that</h1>
    <div class="recipient">Learner</div>
    <h1>has successfully completed the course</h1>
    <div class="course-name">${course.title}</div>
    <p>${course.description}</p>
    <div class="seal">&#10003;</div>
    <div class="date">Completed on ${date}</div>
    <div class="signature-line">MyLec</div>
  </div>
</body>
</html>`;
}

export default function CertificateScreen({ route, navigation }) {
  const { courseId } = route.params;
  const course = courses[courseId];
  const certificateRef = useRef(null);

  const today = new Date();
  const dateStr = today.toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  });

  if (!course) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Course not found</Text>
      </View>
    );
  }

  const handleSavePDF = async () => {
    try {
      const html = generateCertificateHTML(course, dateStr);
      if (Platform.OS === 'web') {
        await Print.printAsync({ html });
      } else {
        const { uri } = await Print.printToFileAsync({ html });
        if (await Sharing.isAvailableAsync()) {
          await Sharing.shareAsync(uri, { mimeType: 'application/pdf' });
        }
      }
    } catch (e) {
      console.warn('PDF export failed', e);
    }
  };

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.screenContent}>
      <View style={styles.certificateContainer} ref={certificateRef}>
        <View style={styles.borderDouble}>
          <View style={styles.inner}>
            <Text style={styles.ribbon}>Certificate of Completion</Text>
            <Text style={styles.certifies}>This certifies that</Text>
            <Text style={styles.recipient}>Learner</Text>
            <Text style={styles.certifies}>has successfully completed the course</Text>
            <Text style={styles.courseName}>{course.title}</Text>
            <Text style={styles.description}>{course.description}</Text>
            <Text style={styles.seal}>✓</Text>
            <Text style={styles.date}>Completed on {dateStr}</Text>
            <View style={styles.signatureLine}>
              <Text style={styles.signatureText}>MyLec</Text>
            </View>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.downloadButton} onPress={handleSavePDF}>
        <Text style={styles.downloadText}>Save as PDF</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f0ebc2',
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
    borderColor: '#5e0e08',
    borderRadius: 16,
    padding: 12,
  },
  inner: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#5e0e08',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  ribbon: {
    fontSize: 13,
    letterSpacing: 4,
    textTransform: 'uppercase',
    color: '#5e0e08',
    borderWidth: 1,
    borderColor: '#5e0e08',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 4,
    marginBottom: 16,
    fontWeight: '600',
  },
  certifies: {
    fontSize: 16,
    color: '#5e0e08',
    marginBottom: 6,
    textAlign: 'center',
  },
  recipient: {
    fontSize: 36,
    fontWeight: '800',
    color: '#5e0e08',
    marginBottom: 6,
  },
  courseName: {
    fontSize: 26,
    fontWeight: '700',
    color: '#5e0e08',
    marginBottom: 14,
    textAlign: 'center',
  },
  description: {
    fontSize: 13,
    color: '#5e0e08',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 18,
    paddingHorizontal: 10,
    opacity: 0.85,
  },
  seal: {
    fontSize: 50,
    color: '#5e0e08',
    marginBottom: 10,
    fontWeight: '700',
  },
  date: {
    fontSize: 13,
    color: '#5e0e08',
    opacity: 0.8,
    marginBottom: 14,
  },
  signatureLine: {
    borderTopWidth: 2,
    borderColor: '#5e0e08',
    width: 200,
    alignItems: 'center',
    paddingTop: 8,
  },
  signatureText: {
    fontSize: 13,
    color: '#5e0e08',
    letterSpacing: 1,
  },
  downloadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#5e0e08',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 12,
    marginBottom: 32,
    elevation: 4,
    boxShadow: '0px 4px 12px rgba(94, 14, 8, 0.3)',
  },
  downloadText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#f0ebc2',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0ebc2',
  },
  errorText: {
    color: '#5e0e08',
    fontSize: 18,
  },
});

CertificateScreen.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      courseId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
