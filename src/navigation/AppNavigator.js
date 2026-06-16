import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '../context/ThemeContext';

import HomeScreen from '../screens/HomeScreen';
import CourseDetailScreen from '../screens/CourseDetailScreen';
import LessonScreen from '../screens/LessonScreen';
import QuizScreen from '../screens/QuizScreen';
import ProgressScreen from '../screens/ProgressScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CertificateScreen from '../screens/CertificateScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabIcon({ label, focused, colors }) {
  const icons = { Home: '🏠', Progress: '📊', Profile: '👤' };
  return (
    <View style={styles.tabIconContainer}>
      <Text style={[styles.tabIcon, focused && { opacity: 1 }]}>{icons[label]}</Text>
      <Text style={[styles.tabLabel, { color: focused ? colors.primary : colors.inactive }]}>{label}</Text>
    </View>
  );
}

function HomeStack() {
  const { theme } = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: theme.headerBg, elevation: 0, boxShadow: 'none' },
        headerTintColor: theme.headerText,
        headerTitleStyle: { fontWeight: '700', fontSize: 18 },
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen name="HomeMain" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="CourseDetail"
        component={CourseDetailScreen}
        options={({ route }) => {
          const courseId = route.params?.courseId;
          const titles = { python: 'Python Course', cpp: 'C++ Course', cybersecurity: 'Cybersecurity', ethicalhacker: 'Ethical Hacker', bit_core: 'BIT Core Units', go: 'Go', swift: 'Swift', csharp: 'C#', vb: 'Visual Basic', web_dev: 'Web Development', sql: 'Database - SQL', nextjs: 'Next.js', react_native: 'React Native', financial_records: 'Financial Records', operations_management: 'Operations Management', financial_accounting: 'Financial Accounting (ACCA)' };
          const colors = { python: '#3776AB', cpp: '#00599C', cybersecurity: '#2E7D32', ethicalhacker: '#C62828', bit_core: '#6C3483', go: '#00ADD8', swift: '#F05138', csharp: '#9B4F96', vb: '#945DB7', web_dev: '#E44D26', sql: '#336791', nextjs: '#000000', react_native: '#61DAFB', financial_records: '#1B5E20', operations_management: '#E65100', financial_accounting: '#0D47A1' };
          return {
            title: titles[courseId] || 'Course',
            headerStyle: { backgroundColor: colors[courseId] || '#2C3E50', elevation: 0, boxShadow: 'none' },
          };
        }}
      />
      <Stack.Screen
        name="Lesson"
        component={LessonScreen}
        options={{ title: 'Lesson', headerStyle: { backgroundColor: theme.headerBg, elevation: 0, boxShadow: 'none' } }}
      />
      <Stack.Screen
        name="Quiz"
        component={QuizScreen}
        options={{ title: 'Chapter Quiz', headerStyle: { backgroundColor: theme.headerBg, elevation: 0, boxShadow: 'none' } }}
      />
      <Stack.Screen
        name="Certificate"
        component={CertificateScreen}
        options={{ title: 'Certificate', headerStyle: { backgroundColor: '#5e0e08', elevation: 0, boxShadow: 'none' } }}
      />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  const { theme } = useTheme();
  const colors = {
    primary: '#4A90D9',
    inactive: theme.textSecondary,
  };
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: theme.surface,
            borderTopColor: theme.border,
            height: 65,
            paddingBottom: 8,
            paddingTop: 4,
          },
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarIcon: ({ focused }) => <TabIcon label="Home" focused={focused} colors={colors} />,
          }}
        />
        <Tab.Screen
          name="Progress"
          component={ProgressScreen}
          options={{
            tabBarIcon: ({ focused }) => <TabIcon label="Progress" focused={focused} colors={colors} />,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused }) => <TabIcon label="Profile" focused={focused} colors={colors} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIcon: {
    fontSize: 22,
    opacity: 0.6,
  },
  tabLabel: {
    fontSize: 11,
    marginTop: 2,
    fontWeight: '600',
  },
});
