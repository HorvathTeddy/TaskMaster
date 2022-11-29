import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import React from "react";

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

          <View style={styles.circleShape} />
          <View style={styles.circleShape} />
          <View style={styles.circleShape} />
          <View style={styles.circleShape} />
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
    // justifyContent: "left",
  },
  circleShape: {
    margin: 5,
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    backgroundColor: "green",
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
