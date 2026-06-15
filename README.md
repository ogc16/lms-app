# 📚 MyLec

A mobile learning app built with [Expo React Native](https://expo.dev) that teaches programming and computer science through interactive lessons, code examples, and quizzes.

## Features

- **13 Courses**: Python, C++, Cybersecurity, Ethical Hacker, BIT Core Units, Go, Swift, C#, Visual Basic, Web Development, SQL, Next.js, and React Native
- **Interactive Lessons**: Step-by-step lessons with code examples
- **Chapter Quizzes**: Multiple-choice quizzes with instant feedback and review
- **Progress Tracking**: Auto-saves completed lessons and quiz scores locally
- **Progress Dashboard**: Visual progress bars and chapter completion indicators
- **Profile Screen**: Stats, course breakdown, dark mode toggle
- **Theme Toggle**: Light/dark mode across all screens
- **Certificates**: View and download PDF certificates on course completion

## Tech Stack

- **Framework**: [Expo](https://expo.dev) (SDK 54) + React Native
- **Navigation**: React Navigation (Stack + Bottom Tabs)
- **Storage**: AsyncStorage (local progress persistence)
- **Build**: EAS Build
- **PDF Generation**: expo-print

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
| Database - SQL | 🗄️ | 3 |
| Next.js | ▲ | 4 |
| React Native | 📱 | 4 |

## License

MIT
