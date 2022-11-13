import { Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TaskRoot from "../Task/TaskRoot";
import AddTask from "../Task/AddTask";

const Stack = createNativeStackNavigator();

const TaskStack = () => {
  return (
    <Stack.Navigator
      //screenOptions={{headerTitleAlign: 'center'}}
      initialRouteName="TaskRoot"
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
        name="Tasks Root"
        component={TaskRoot}
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity style={styles.addTask} onPress={() => navigation.navigate("Add Task")}>
              <Text style={styles.plus}>Add a Task</Text>
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen name="Add Task" component={AddTask} options={{
          title: "Add a Task"
        }}/>
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
