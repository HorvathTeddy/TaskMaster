import { View, StyleSheet } from "react-native";
import React from "react";
import Entry from "./Entry";
import StdButton from "../../components/Standards/StdButton";
import { useNavigation } from "@react-navigation/native";
import StdInputs from "../../components/Standards/StdInputs";

const AddTask = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StdInputs title="Task Name"></StdInputs>
      <StdInputs title="Due Date"></StdInputs>
      <StdInputs title="Note" multiline={true} numberOfLines={4}></StdInputs>
      <StdInputs title="ice cream"></StdInputs>
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
