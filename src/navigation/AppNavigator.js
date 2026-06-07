import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import CourseDetailScreen from '../screens/CourseDetailScreen';
import LessonScreen from '../screens/LessonScreen';
import QuizScreen from '../screens/QuizScreen';
import ProgressScreen from '../screens/ProgressScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2C3E50',
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '700',
            fontSize: 18,
          },
          headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CourseDetail"
          component={CourseDetailScreen}
          options={({ route }) => ({
            title: route.params?.courseId === 'python' ? 'Python Course' : 'C++ Course',
            headerStyle: {
              backgroundColor: route.params?.courseId === 'python' ? '#3776AB' : '#00599C',
              elevation: 0,
              shadowOpacity: 0,
            },
          })}
        />
        <Stack.Screen
          name="Lesson"
          component={LessonScreen}
          options={({ route }) => ({
            title: 'Lesson',
            headerStyle: {
              backgroundColor: '#2C3E50',
              elevation: 0,
              shadowOpacity: 0,
            },
          })}
        />
        <Stack.Screen
          name="Quiz"
          component={QuizScreen}
          options={{
            title: 'Chapter Quiz',
            headerStyle: {
              backgroundColor: '#2C3E50',
              elevation: 0,
              shadowOpacity: 0,
            },
          }}
        />
        <Stack.Screen
          name="Progress"
          component={ProgressScreen}
          options={{
            title: 'My Progress',
            headerStyle: {
              backgroundColor: '#4A90D9',
              elevation: 0,
              shadowOpacity: 0,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
