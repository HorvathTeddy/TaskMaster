import { View, StyleSheet, TextInput, Button } from "react-native";
import React, {useState} from "react";
import Entry from "./Entry";
import StdButton from "../../components/Standards/StdButton";
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