# 📚 CodeLMS - Learn Python & C++

A mobile learning app built with [Expo React Native](https://expo.dev) that teaches Python and C++ programming through interactive lessons, code examples, and quizzes — similar to SoloLearn.

## Features

- **Two Courses**: Python and C++ with structured chapters
- **Interactive Lessons**: Step-by-step lessons with code examples
- **Dark-mode Code Blocks**: Syntax-highlighted code examples
- **Chapter Quizzes**: Multiple-choice quizzes with instant feedback and review
- **Progress Tracking**: Auto-saves completed lessons and quiz scores locally
- **Progress Dashboard**: Visual progress bars and chapter completion indicators

## Screenshots

| Home | Course Detail | Lesson | Quiz |
|------|--------------|--------|------|
| Course selection & progress | Chapter & lesson list | Content + code examples | Interactive quiz |

## Tech Stack

- **Framework**: [Expo](https://expo.dev) (SDK 54) + React Native
- **Navigation**: React Navigation (Stack)
- **Storage**: AsyncStorage (local progress persistence)
- **Build**: EAS Build (Android APK)

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

## Download APK

Download the latest APK from the [Releases](https://github.com/ogc16/lms-app/releases) page.

## Course Structure

### Python
1. Introduction to Python
2. Variables & Data Types
3. Control Flow
4. Functions
5. Lists & Dictionaries
6. Object-Oriented Programming
7. Advanced Topics

### C++
1. Introduction to C++
2. Variables & Data Types
3. Control Flow
4. Functions
5. Arrays & Strings
6. Object-Oriented Programming
7. Pointers & Memory

## License

MIT
