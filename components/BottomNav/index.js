import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TaskRoot from '../../Views/Task/TaskRoot';

const Tab = createBottomTabNavigator();

const BottomNav = ({ component }) => {
  return (
    <Tab.Navigator>
        <Tab.Screen name='TaskRoot' component={component} />
    </Tab.Navigator>
  );
}

export default BottomNav

const styles = StyleSheet.create({})