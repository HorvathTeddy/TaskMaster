import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import React from "react";
import Checkbox from "../../components/Checkbox/Checkbox";

/*
This program sets up the task app that Task so the tasks are shown all
in one page for future use all task are drawn from a database dynamiclly to 
show every task that is available at any given time
*/

const Task = ({route}) => {
  const {task, description, dueDate} = route.params
  return (
    <View style={styles.taskContainer}>
      
        <Text style={styles.taskText}>{task}</Text>
        <Text style={styles.taskText}>Description: {description}</Text>
        <Text style={styles.taskText}>Due Date: {dueDate}</Text>
        <View style={styles.taskStatus}>
          <Text style={styles.complete}> Complete?</Text><Checkbox> </Checkbox>
    </View>
    </View>
      
    

  );
};

const styles = StyleSheet.create({
  taskContainer: {
    alignSelf: "center",
    alignItems: "center",
    width: "95%",
    borderWidth: 2,
    borderRadius: 10, 
    borderColor: '#555555', 
    backgroundColor: '#ffffff', 
    justifyContent: 'center',
    marginTop: 50,

    backgroundColor: '#f1fcfd',
    
    
  },

  taskText: {
    width: '90%',
    textAlign: 'center',
    fontSize: 20,
    margin: 20,
    padding: 20,
    borderWidth: 1,
    borderRadius: 10, 
  },
  taskStatus: {
    flexDirection: "row",
    paddingBottom: 20
    // justifyContent: "left",
  },
  complete:{
    fontSize: 18,
    paddingTop: 5,
    paddingRight: 5
  },
//new stuff
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

});

export default Task;
