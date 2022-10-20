import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const StdInputs = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.taskName}>{title}</Text>
      <TextInput style={styles.taskInput}></TextInput>
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