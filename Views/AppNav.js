import { View, ActivityIndicator } from 'react-native'
import React, {useContext} from 'react'
import LoginStack from "../Views/StackManager/LoginStack";
import TaskStack from "../Views/StackManager/TaskStack";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from '../context/AuthContext';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TaskCalendar from '../Views/TaskCalendar'
import Settings from './Settings';
import Profile from './Profile'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const AppNav = () => {
    const {isLoading, userToken} = useContext(AuthContext)

    if (isLoading) {
        <View>
            <ActivityIndicator size={'large'} />
        </View>
    }
  return (
    <NavigationContainer>
       { userToken !== null ? 
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
        </Tab.Navigator>
       :  <LoginStack />}
    {/* <TaskStack></TaskStack> */}
    </NavigationContainer>
  )
}

export default AppNav
