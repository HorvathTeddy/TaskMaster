import { View, StyleSheet, TextInput, Button } from "react-native";
import React, {useState} from "react";
import axios from 'axios';
import Btn from '../../components/Standards/StdButton'
import StdButton from "../../components/Standards/StdButton";
//import axios from '../../axios.js'

const AddTask = ({navigation: {goBack}}) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  //const [completed, setCompleted] = useState(false)

  const handleSubmit = async () => {
    if (name === '' || description === '') {
        alert('All fields are required')
        return
      }
    axios.post("https://taskmaster-api.onrender.com/tasks", {
      id: taskId,
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
  }
  
  return (
    
    <View style={styles.container}>
      <TextInput style={styles.taskName} placeholder="Enter a task name" value={name} onChangeText={(text) => setName(text)}></TextInput>
      <TextInput 
        multiline={true}
        numberOfLines={10}
        style={styles.description}  
        placeholder="Enter a description" 
        value={description} 
        onChangeText={(text) => setDescription(text)}>
      </TextInput>
      <TextInput style={styles.taskName} placeholder="Enter a due date ex. 2023-03-01" value={date} onChangeText={(text) => setDate(text)}></TextInput>

      <View style={styles.addTaskBUT}>
        <StdButton
          style={{width: '80%',}}
          title="Add Task"
          mode='contained'
          onPress={handleSubmit}       
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    alignItems: "center",
    width: "95%",
    borderWidth: 1,
    borderRadius: 10, 
    borderColor: '#555555', 
    backgroundColor: '#ffffff', 
    justifyContent: 'center',
    marginTop: 50,
    paddingTop:10,
  },
  addTaskBUT: {
    padding: 20,

  },

  taskName: {
    width: '90%',
    fontSize: 20,
    margin: 20,
    padding: 20,
    borderWidth: 1,
    borderRadius: 10, 
  },
  description: {
    width: '90%',
    fontSize: 20,
    margin: 20,
    padding: 20,
    borderWidth: 1,
    borderRadius: 10, 
    height:200,
    textAlignVertical: 'top',
  }, 
  dueDate:{
    flex: 1
  }




});

export default AddTask;