import { Text, StyleSheet, TouchableOpacity } from "react-native";
import React, {useState, useEffect} from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TaskRoot from "../screens/Task/TaskRoot";
import AddTask from "../screens/Task/AddTask";
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore"
import axios from "axios";

const Stack = createNativeStackNavigator();

const TaskStack = () => {
  const firestore = firebase.firestore
  const auth = firebase.auth

  const [user,setUser] = useState(null)
  const [users,setUsers] = useState([])
  
  useEffect(() => {
    firestore().collection("users").doc(auth().currentUser.uid).get()
        .then(user => {
            setUser(user.data())
        })
}, [])

useEffect(() => {
    if (user)
        firestore().collection("users").where("role", "==", (user?.role === "Employee" ? "Manager" : "Employee"))
            .onSnapshot(users => {
                if (!users.empty) {
                    const USERS = []

                    users.forEach(user => {
                        USERS.push(user.data())
                    })
                    setUsers(USERS)
                }
            })
}, [user])

  return (
    <>
    {user?.role === "Manager" ? 
      <Stack.Navigator
        //screenOptions={{headerTitleAlign: 'center'}}
        initialRouteName="TaskRoot"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#4169e1",
          },
          headerTitleAlign: 'center',
          headerTitleStyle: { fontSize: 30, fontWeight: "bold", color: 'white' },
      }}
    >
      <Stack.Screen
        style={styles.screen}
        name="TaskRoot"
        component={TaskRoot}
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity style={styles.addTask} onPress={() => navigation.navigate('AddTask')}>
              <Text style={styles.plus}>+</Text>
            </TouchableOpacity>
          ),
          title: "Tasks List"
        })}
      />
      <Stack.Screen name="AddTask" component={AddTask} options={{
          title: "Add a Task"
        }}/>
    </Stack.Navigator> : <Stack.Navigator
      //screenOptions={{headerTitleAlign: 'center'}}
      initialRouteName="TaskRoot"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#4169e1",
        },
        headerTitleAlign: 'center',
        headerTitleStyle: { fontSize: 30, fontWeight: "bold", color: 'white' },
        title: "Tasks List"
      }}
    >
      <Stack.Screen
        style={styles.screen}
        name="TaskRoot"
        component={TaskRoot}
        />
    </Stack.Navigator>}
    </>
  );
};

const styles = StyleSheet.create({
  plus: {
    // marginTop: '-15px',
    fontSize: 40,
    zIndex: -1,
    color: 'white',
    opacity: 0.75
    
    
  },
  screen: {
    title: 'Centered',
    headerTitleAlign: 'center'
  },
  addTask: {
    height: 50,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default TaskStack;
