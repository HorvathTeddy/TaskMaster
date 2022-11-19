import { View, Text, ScrollView, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import Task from "./Task";
import { useRoute } from "@react-navigation/native";

const TaskRoot = ({route}) => {  
  //const route = useRoute()
  console.log(route.params)
  return (
    <ScrollView style={styles.scrollView}>
      <View>
        {/* <Text>
          Task Name: {route.params.taskName}
        </Text>
        <Text>
          Task Description: {route.params.taskDescription}
        </Text>
        <Text>
          Task Due Date: {route.params.taskDueDate}
        </Text> */}
      </View>
      {/* 
      <Task taskName={"Something"} />
      <Task taskName={"Something"} />
      <Task taskName={"Something"} />
      <Task taskName={"Something"} /> */}
    </ScrollView> 
    )}
 

const styles = StyleSheet.create({
  scrollView: {
    marginBottom: "10%",
  },
});

export default TaskRoot;
