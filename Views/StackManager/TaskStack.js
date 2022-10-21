import { Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Task from "../Task/Task";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StdButton from "../../components/Standards/StdButton";

const Stack = createNativeStackNavigator();

const TaskStack = (props) => {
  return (
    <Stack.Navigator
      initialRouteName="Task"
      screenOptions={{
        headerTitleStyle: { fontSize: 30, fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="Tasks"
        component={Task}
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => alert("This is a button!")}>
              <Text style={styles.plus}>+</Text>
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  plus: {
    // fontWeight: "bold",
    marginTop: -15,
    fontSize: 40,
  },
});

export default TaskStack;
