import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";

/*
This
*/

const AddTask = () => {
  return (
    <View style={styles.input}>
      <Text style={styles.tasks}>Tasks</Text>
      <TextInput style={styles.text}>AddTask</TextInput>
      <TouchableOpacity>
        <Text style={styles.addTask}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tasks: {
    fontSize: 40,
    fontWeight: "bold",
  },
  addTask: {
    fontSize: 60,
  },
  input: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20%",
    height: "15%",
    width: "80%",
    padding: 10,
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

export default AddTask;
