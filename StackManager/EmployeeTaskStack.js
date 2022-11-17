import { Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TaskRoot from "../screens/Task/TaskRoot";
import AddTask from "../screens/Task/AddTask";

const Stack = createNativeStackNavigator();

const TaskStack = () => {
  return (
    <Stack.Navigator
      //screenOptions={{headerTitleAlign: 'center'}}
      initialRouteName="TasksRoot"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#4169e1",
        },
        headerTitleAlign: 'center',
        headerTitleStyle: { fontSize: 30, fontWeight: "bold", color: 'white' },
      }}
    >
      <Stack.Screen
        style={styles.screen}
        name="TaskRoot"
        component={TaskRoot}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  plus: {
    // marginTop: '-15px',
    fontSize: 20,
    zIndex: -1,
    color: 'gray',
    
    
  },
  screen: {
    title: 'Centered',
    headerTitleAlign: 'center'
  },
  addTask: {
    height: 50,
    width: 120,
    borderWidth: 3,
    borderColor: '#000',
    //borderRadius: 33,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffd700',
  }
});

export default TaskStack;
