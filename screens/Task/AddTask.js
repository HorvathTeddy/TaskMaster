import { View, StyleSheet, TextInput, Button } from "react-native";
import React, {useState} from "react";
import Entry from "./Entry";
import StdButton from "../../components/Standards/StdButton";
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'
//import axios from '../../axios.js'

const AddTask = () => {
  const navigation = useNavigation()
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState();

  const handleSubmit = async () => {
    axios.post("http://10.0.2.2:8080/tasks", {
      name: name,
      description: description,
      date: date
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
    // if (name === '' || description === '') {
    //   alert('All fields are required')
    //   return
    // }
    // const resp = await axios.post("/tasks", {
    //   name,
    //   description,
    // })
    // console.log(resp.data)
    // alert("Your task has been added to the database. 😎")
  }
  
  return (
    
    <View style={styles.container}>
      <TextInput placeholder="Enter a task name" value={name} onChangeText={(text) => setName(text)}></TextInput>
      <TextInput placeholder="Enter a task description" value={description} onChangeText={(text) => setDescription(text)}></TextInput>
      <TextInput placeholder="Enter a task due date" value={date} onChangeText={(text) => setDate(text)}></TextInput>
      {/* <Entry title="Due Date"></Entry>
      <Entry title="Note"></Entry>
      <Entry title="ice cream"></Entry> */}
      <View style={styles.addTask}>
        <Button
          title="Add Task"
          mode='contained'
          onPress={handleSubmit  
            //navigation.navigate("TaskRoot", {name: name, description: description, date: date})
          }
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