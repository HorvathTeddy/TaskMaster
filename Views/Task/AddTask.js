import { View, StyleSheet, TextInput } from "react-native";
import React, {useState} from "react";
import Entry from "./Entry";
import StdButton from "../../components/Standards/StdButton";

const AddTask = (props) => {
  const [task, setTask] = useState()
  const [dueDate, setDueDate] = useState()
  const [note, setNote] = useState()
  const [taskItems, setTaskItems] = useState([])

  const handleAddTask = () => {
    setTaskItems([...taskItems, task, dueDate, note])
    setTask(null)
  }

  return (
    <View style={styles.container}>
      <Entry title="Task Name" value={task} onChangeText={text => setTask(text)} />
      <Entry title="Due Date" value={dueDate} onChangeText={text => setDueDate(text)} />
      <Entry title="Note" value={note} onChangeText={text => setNote(text)}/>
      <TextInput {...props} />
      <View style={styles.addTask}>
        <StdButton
          onPress={() => handleAddTask()}
          title="Add Task"
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
