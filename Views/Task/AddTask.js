import { View, StyleSheet } from "react-native";
import React from "react";
import Entry from "./Entry";
import StdButton from "../Standards/StdButton";

const AddTask = () => {
  return (
    <View style={styles.container}>
      <Entry title="Task Name"></Entry>
      <Entry title="Due Date"></Entry>
      <Entry title="Note"></Entry>
      <Entry title="ice cream"></Entry>
      <View style={styles.addTask}>
        <StdButton title="Add Task" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
  },
  addTask: {
    alignItems: "center",
  },
});

export default AddTask;
