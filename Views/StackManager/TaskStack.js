import { Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Task from "../Task/Task";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TaskRoot from "../Task/TaskRoot";
import AddTask from "../Task/AddTask";

const Stack = createNativeStackNavigator();

const TaskStack = (props) => {
  return (
    <Stack.Navigator
      initialRouteName="TaskRoot"
      screenOptions={{
        headerStyle: {
          // backgroundColor: "gray",
        },
        headerTitleStyle: { fontSize: 30, fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="Tasks"
        component={TaskRoot}
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Add Task")}>
              <Text style={styles.plus}>+</Text>
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen name="Add Task" component={AddTask} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  plus: {
    marginTop: -15,
    fontSize: 40,
  },
});

export default TaskStack;
