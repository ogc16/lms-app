# 📚 MyLec

A mobile learning app built with [Expo React Native](https://expo.dev) that teaches programming, computer science, and business through interactive lessons, code examples, and quizzes.

## Features

- **24 Courses**: Programming (Python, C++, C#, Go, Swift, VB, OOP), Web (Web Dev, Web App Dev, Next.js, React Native), Data (SQL, Database, GIS), Security (Cybersecurity, Ethical Hacker), Business (Financial Records, Financial Accounting, Operations Management), Math (Calculus), Engineering (Software Engineering, OOAD, Mobile Computing), and IT Core
- **Interactive Lessons**: Step-by-step lessons with code examples and toggleable code blocks
- **Chapter Quizzes**: Multiple-choice quizzes with instant feedback and review
- **Progress Tracking**: Auto-saves completed lessons and quiz scores locally via AsyncStorage
- **Progress Dashboard**: Visual progress bars and per-course completion indicators
- **Profile Screen**: Stats, course breakdown, dark mode toggle, detailed progress report
- **Theme Toggle**: Light/dark mode across all screens
- **Certificates**: View and download PDF certificates on course completion
- **Reusable Components**: ProgressBar, CourseCard, StatCard, LessonListItem
- **Accessibility**: `accessibilityLabel` and `accessibilityRole` on all interactive elements

## Tech Stack

- **Framework**: [Expo](https://expo.dev) (SDK 54) + React Native
- **Navigation**: React Navigation (Stack + Bottom Tabs)
- **Storage**: AsyncStorage (local progress persistence)
- **Build**: EAS Build
- **PDF Generation**: expo-print
- **Testing**: Jest + jest-expo + @testing-library/react-native

## Getting Started

### Prerequisites

- Node.js 18+
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- Android device/emulator (for APK) or Expo Go app

### Development

```bash
# Clone the repo
git clone https://github.com/ogc16/lms-app.git
cd lms-app

# Install dependencies
npm install

# Start dev server
npx expo start
```

### Running Tests

```bash
# Run all tests
npm test

# Run with cache disabled
npx jest --no-cache

# Run a specific test file
npx jest HomeScreen
```

### Build APK

```bash
# Install EAS CLI
npm install -g eas-cli

# Build APK (cloud build via EAS)
npx eas build --platform android --profile preview
```

## Courses

| Course | Icon | Chapters |
|--------|------|----------|
| Python | 🐍 | 7 |
| C++ | ⚡ | 7 |
| Introduction to Cybersecurity | 🔒 | 5 |
| Ethical Hacker | 🛡️ | 5 |
| BIT Core Units | 🎓 | 8 |
| Go | 💙 | 3 |
| Swift | 🕊️ | 3 |
| C# | 🔷 | 3 |
| Visual Basic | 💠 | 3 |
| Web Development | 🌐 | 4 |
| Web Application Development | 🌍 | 4 |
| Database - SQL | 🗄️ | 3 |
| Database Systems | 🗃️ | 4 |
| GIS | 🗺️ | 4 |
| Next.js | ▲ | 4 |
| React Native | 📱 | 4 |
| Calculus | ∫ | 5 |
| Object-Oriented Programming | 🔵 | 4 |
| Object-Oriented Analysis & Design | 📐 | 4 |
| Software Engineering | 🧩 | 4 |
| Mobile Computing | 📲 | 4 |
| Financial Records | 💰 | 4 |
| Financial Accounting | 📊 | 4 |
| Operations Management | ⚙️ | 4 |

## Project Structure

```
src/
├── __tests__/            # Jest smoke tests (27 tests across 8 suites)
│   ├── HomeScreen.test.js
│   ├── CourseDetailScreen.test.js
│   ├── LessonScreen.test.js
│   ├── QuizScreen.test.js
│   ├── ProgressScreen.test.js
│   ├── ProfileScreen.test.js
│   ├── CertificateScreen.test.js
│   └── Components.test.js
├── components/           # Reusable UI components
│   ├── CourseCard.js
│   ├── LessonListItem.js
│   ├── ProgressBar.js
│   └── StatCard.js
├── context/              # React context providers
│   ├── ThemeContext.js
│   └── ProgressContext.js
├── data/                 # Course content (24 courses)
├── screens/              # App screens (7)
│   ├── HomeScreen.js
│   ├── CourseDetailScreen.js
│   ├── LessonScreen.js
│   ├── QuizScreen.js
│   ├── ProgressScreen.js
│   ├── ProfileScreen.js
│   └── CertificateScreen.js
└── navigation/           # Navigation configuration
```

## License

MIT
