import { View, StyleSheet } from "react-native";
import React from "react";
import Entry from "./Entry";
import StdButton from "../../components/Standards/StdButton";

const AddTask = (navigation) => {
  return (
    <View style={styles.container}>
      <Entry title="Task Name"></Entry>
      <Entry title="Due Date"></Entry>
      <Entry title="Note"></Entry>
      <Entry title="ice cream"></Entry>
      <View style={styles.addTask}>
        <StdButton
          title="Add Task"
          onPress={() => navigation.navigate("TaskRoot")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    width: "80%",
  },
  addTask: {
    // alignItems: "center",
  },
});

export default AddTask;