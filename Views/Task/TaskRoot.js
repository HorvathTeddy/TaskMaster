import { View, Text, ScrollView } from "react-native";
import React from "react";
import Task from "./Task";

const TaskRoot = () => {
  return (
    <ScrollView>
      <Task taskName={"Something"} />
      <Task taskName={"Something"} dueDate={"22/10/2022"} />
      <Task taskName={"Something"} />
      <Task taskName={"Something"} />
      <Task taskName={"Something"} />
      <Task taskName={"Something"} />
    </ScrollView>
  );
};

export default TaskRoot;