import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import Entry from "./Entry";

const AddTask = () => {
  return (
    <View style={styles.container}>
      <Entry title="Task Name"></Entry>
      <Entry title="Task Due Date"></Entry>
      <Entry title="potato"></Entry>
      <Entry title="ice cream"></Entry>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: "10%",
    width: "80%",
  },
});

export default AddTask;
