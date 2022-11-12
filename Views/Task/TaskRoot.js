import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import Task from "./Task";

const TaskRoot = () => {
  return (
    <>
    <ScrollView style={styles.scrollView}>
      <Task taskName={"Something"} />
      <Task taskName={"Something"} dueDate={"22/10/2022"} />
      <Task taskName={"Something"} />
      <Task taskName={"Something"} />
      <Task taskName={"Something"} />
      <Task taskName={"Something"} />
      <Task taskName={"Something"} />
      <Task taskName={"Something"} />
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginBottom: "10%",
  },
});

export default TaskRoot;
