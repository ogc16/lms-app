import { pythonCourse } from './pythonCourse';
import { cppCourse } from './cppCourse';
import { cybersecurityCourse } from './cybersecurityCourse';
import { ethicalhackerCourse } from './ethicalhackerCourse';
import { bitCoreCourse } from './bitCoreCourse';
import { goCourse } from './goCourse';
import { swiftCourse } from './swiftCourse';
import { csharpCourse } from './csharpCourse';
import { vbCourse } from './vbCourse';
import { webDevCourse } from './webDevCourse';
import { sqlCourse } from './sqlCourse';
import { nextjsCourse } from './nextjsCourse';
import { reactNativeCourse } from './reactNativeCourse';
import { financialRecordsCourse } from './financialRecordsCourse';
import { operationsManagementCourse } from './operationsManagementCourse';
import { financialAccountingCourse } from './financialAccountingCourse';
import { databaseCourse } from './databaseCourse';
import { gisCourse } from './gisCourse';
import { mobileComputingCourse } from './mobileComputingCourse';
import { ooadCourse } from './ooadCourse';
import { webAppDevCourse } from './webAppDevCourse';
import { calculusCourse } from './calculusCourse';
import { softwareEngineeringCourse } from './softwareEngineeringCourse';
import { oopCourse } from './oopCourse';
import { rustCourse } from './rustCourse';
import { coursesMeta } from './coursesMeta';

function mergeMeta(course) {
  const meta = coursesMeta[course.id];
  if (meta) {
    return { ...course, ...meta };
  }
  return course;
}

const rawCourses = {
  python: pythonCourse,
  cpp: cppCourse,
  cybersecurity: cybersecurityCourse,
  ethicalhacker: ethicalhackerCourse,
  bit_core: bitCoreCourse,
  go: goCourse,
  swift: swiftCourse,
  csharp: csharpCourse,
  vb: vbCourse,
  web_dev: webDevCourse,
  sql: sqlCourse,
  nextjs: nextjsCourse,
  react_native: reactNativeCourse,
  financial_records: financialRecordsCourse,
  operations_management: operationsManagementCourse,
  financial_accounting: financialAccountingCourse,
  database: databaseCourse,
  gis: gisCourse,
  mobile_computing: mobileComputingCourse,
  ooad: ooadCourse,
  web_app_dev: webAppDevCourse,
  calculus: calculusCourse,
  software_engineering: softwareEngineeringCourse,
  oop: oopCourse,
  rust: rustCourse,
};

export const coursesMap = {};
Object.keys(rawCourses).forEach(key => {
  coursesMap[key] = mergeMeta(rawCourses[key]);
});

export const coursesArray = Object.keys(rawCourses).map(key => mergeMeta(rawCourses[key]));
