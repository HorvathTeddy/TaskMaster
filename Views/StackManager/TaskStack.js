import { View, Text } from "react-native";
import React from "react";

const TaskStack = () => {
  return (
    <Stack.Navigator initialRouteName="SignUpRoot">
      <Stack.Screen name="Sign Up" component={SignUpRoot} />
    </Stack.Navigator>
  );
};

export default TaskStack;
