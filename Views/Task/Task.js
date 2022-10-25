import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

/*
This program sets up the task app that Task so the tasks are shown all
in one page for future use all task are drawn from a database dynamiclly to 
show every task that is available at any given time
*/

const Task = ({ dueDate, taskName }) => {
  return (
    <View style={styles.taskContainer}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.taskText}>Task Name: {taskName}</Text>
        <Text style={styles.taskText}>Due Date: {dueDate}</Text>
        <View style={styles.taskStatus}>
          <View style={styles.circleShape} />
          <View style={styles.circleShape} />
          <View style={styles.circleShape} />
          <View style={styles.circleShape} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    paddingTop: "5%",
    paddingLeft: "7.5%",
    paddingRight: "7.5%",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
    borderWidth: 2,
    borderRadius: 10,
  },
  taskText: {
    fontSize: 18,
  },
  taskStatus: {
    flexDirection: "row",
    justifyContent: "left",
  },
  circleShape: {
    margin: 5,
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    backgroundColor: "green",
  },
  tasks: {
    fontSize: 40,
    fontWeight: "bold",
  },
  addTask: {
    fontSize: 60,
  },
  text: {
    // justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: "5%",
    width: "80%",
    borderWidth: 1,
    padding: 10,
  },
});

export default Task;
