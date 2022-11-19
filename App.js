import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import LoginStack from './StackManager/LoginStack'
import TaskStack from './StackManager/TaskStack'
import firebase from 'firebase/app';
import TaskCalendar from './screens/TaskCalendar'
import Profile from './screens/Profile'
import Settings from './screens/Settings'
import "firebase/auth";
import "firebase/firestore"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { firebaseConfig } from './firebase';

const Tab = createBottomTabNavigator();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  //Checking if firebase has been initialized
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }

  firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false);
    }
  });


  return (
    <NavigationContainer>
       { isLoggedIn ? 
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Tasks" component={TaskStack} options={{
          tabBarLabel: 'Tasks',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }} />
          <Tab.Screen name="Calendar" component={TaskCalendar} options={{
          tabBarLabel: 'Calendar',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calendar" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }} />
          <Tab.Screen name="Profile" component={Profile} options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }} />

          <Tab.Screen name="Settings" component={Settings} options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="eye-settings" color={color} size={size} />
          ),
        }} />
        </Tab.Navigator> : <LoginStack />}
    </NavigationContainer> 
  );
}

export default App;
