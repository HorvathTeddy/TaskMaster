import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

// App standard Input that can be used anywhere as a component
// Takes a title for the standard title of the input

const StdInputs = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.taskName}>{props.title}</Text>
      <TextInput
        multiline
        numberOfLines={props.numberOfLines}
        style={styles.taskInput}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: "10%",
  },
  taskName: {
    fontSize: 24,
  },
  taskInput: {
    marginTop: "2%",
    fontSize: 24,
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
  },
});

export default StdInputs;
