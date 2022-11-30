import { StyleSheet, Text, View, TouchableOpacity, Button, SafeAreaView} from 'react-native'
import React, {useContext, useState, useEffect} from 'react'
import Btn from '../../components/Btn'
import firebase from 'firebase/app';
import Profile from '../Profile'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import "firebase/auth";
import "firebase/firestore"
//import { AuthContext } from '../../context/AuthContext'

const Settings = () => {
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

  //const {logout} = useContext(AuthContext)
  return (

    <View style={styles.view}>
        <Text style={styles.title}>Settings</Text>
        <Text style={{fontSize: 22, textAlign: 'center',}}>Company role: {user?.role}</Text>
        <View style={styles.logOut}>
            <Btn  title="Log Out" onClick={() => firebase.auth().signOut()} style={{backgroundColor: '#1999e1'}}/>
         </View>
    </View>

/* <View style={styles.container}>
<View style={{backgroundColor: '#1999e1', paddingTop:59, alignItems: 'center'}}>
  <Text style={{fontSize: 30, 
      fontWeight: "bold", 
      color: 'white', 
      paddingBottom: 8}}
      > Calendar</Text>

</View>
<View style={styles.center} > */

  )
}

export default Settings

const styles = StyleSheet.create({
    container:{
      //flexGrow: 1,
      //justifyContent: 'center', 
      //alignItems: 'center',
    },
    title:{
        //position: 'absolute',
        textAlign: 'center',
        fontSize: 25, 
        backgroundColor: '#1999e1',
        paddingTop: 59,
        fontSize: 30, 
        fontWeight: "bold", 
        color: 'white', 
        paddingBottom: 8

    },
    logOut:{
        //position:'absolute',
        color: '#1999e1',
        bottom:0,
        paddingBottom: 30,
        width: '50%',
        alignSelf: 'center',
    },
    view: {
        width: "100%",
        height: '100%',
        justifyContent: "space-between",
        //alignItems: "center",
        //backgroundColor: 'lightblue'
    }







})