import { View, StyleSheet, TextInput, Button } from "react-native";
import React, {useState} from "react";
import Entry from "./Entry";
import StdButton from "../../components/Standards/StdButton";
<<<<<<< HEAD:Views/Task/AddTask.js
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
=======
import { useNavigation } from '@react-navigation/native';

const AddTask = (navigation) => {
  const [message, setMessage] = useState('');

  const goToMessageScreen = () => {
    navigation.navigate('TaskRoot', {
      message
    });
  };
  return (
    <View style={styles.container}>
      <TextInput title="Task Name" value={message} onChangeText={(text) => setMessage(text)}></TextInput>
      <Entry title="Due Date"></Entry>
      <Entry title="Note"></Entry>
      <Entry title="ice cream"></Entry>
>>>>>>> 315c8f13bf76db0cb266c46b81b33f79f7e3e4be:screens/Task/AddTask.js
      <View style={styles.addTask}>
        <Button
          title="Add Task"
          onPress={goToMessageScreen}
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