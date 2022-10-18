import { View, StyleSheet } from "react-native";
import React from "react";
import Entry from "./Entry";

const AddTask = () => {
  return (
    <View style={styles.container}>
      <Entry title="Task Name"></Entry>
      <Entry title="Due Date"></Entry>
      <Entry title="Note"></Entry>
      <Entry title="ice cream"></Entry>
      {/* <DatePicker /> */}
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
