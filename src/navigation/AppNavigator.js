import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '../context/ThemeContext';

import { coursesMap } from '../data/courses';
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
        headerStyle: { backgroundColor: theme.headerBg, elevation: 0, shadowColor: 'transparent' },
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
          const course = coursesMap[courseId];
          return {
            title: course?.title || 'Course',
            headerStyle: { backgroundColor: course?.color || '#2C3E50', elevation: 0, shadowColor: 'transparent' },
          };
        }}
      />
      <Stack.Screen
        name="Lesson"
        component={LessonScreen}
        options={{ title: 'Lesson', headerStyle: { backgroundColor: theme.headerBg, elevation: 0, shadowColor: 'transparent' } }}
      />
      <Stack.Screen
        name="Quiz"
        component={QuizScreen}
        options={{ title: 'Chapter Quiz', headerStyle: { backgroundColor: theme.headerBg, elevation: 0, shadowColor: 'transparent' } }}
      />
      <Stack.Screen
        name="Certificate"
        component={CertificateScreen}
        options={{ title: 'Certificate', headerStyle: { backgroundColor: '#5e0e08', elevation: 0, shadowColor: 'transparent' } }}
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
