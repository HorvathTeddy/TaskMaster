import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

/*
This program sets up the task app that Task so the tasks are shown all
in one page for future use all task are drawn from a database dynamiclly to 
show every task that is available at any given time
*/

const Task = ({ dueDate }) => {
  return (
    <View style={styles.input}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.taskText}>Task Name</Text>
        <Text style={styles.taskText}>Due Date: {dueDate}</Text>
        <View style={styles.taskStatus}>
          <View style={styles.CircleShape} />
          <View style={styles.CircleShape} />
          <View style={styles.CircleShape} />
          <View style={styles.CircleShape} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  taskText: {
    fontSize: 24,
  },
  taskStatus: {
    flexDirection: "row",
    justifyContent: "left",
  },
  CircleShape: {
    margin: 5,
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    backgroundColor: "green",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 100,
    paddingRight: 100,
    paddingTop: 20,
    paddingBottom: 20,
    borderWidth: 2,
    borderRadius: 10,
  },
  tasks: {
    fontSize: 40,
    fontWeight: "bold",
  },
  addTask: {
    fontSize: 60,
  },
  input: {
    justifyContent: "center",
    height: "15%",
    width: "80%",
  },
  text: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: "5%",
    width: "80%",
    borderWidth: 1,
    padding: 10,
  },
});

export default Task;
