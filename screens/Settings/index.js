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

    <SafeAreaView style={styles.view}>
        <Text style={styles.title}>Settings</Text>
        <Text style={{fontSize: 22}}>Company role: {user?.role}</Text>
        <View style={styles.logOut}>
            <Btn  title="Log Out" onClick={() => firebase.auth().signOut()} />
         </View>
    </SafeAreaView>

    // <View style={styles.view}>
    //     <Text style={{ fontSize: 34, fontWeight: "800", marginBottom: 20 }}>Login</Text>
    //     <TextBox placeholder="Email Address" onChangeText={text => handleChange(text, "email")} />
    //     <TextBox placeholder="Password" onChangeText={text => handleChange(text, "pwd")} secureTextEntry={true} />
    //     <View style={{ flexDirection: "colmun", justifyContent: "space-between", alignItems: "center", width: "92%",  paddingBottom:100}}>
    //         <Btn onClick={() => Login()} title="Login" style={{ width: "48%" }} />
    //     </View>
    //     <View style={{ position: 'absolute', bottom:0, paddingBottom: 36,flexDirection: "colum",  paddingTop: 60, alignItems: "center", width: "92%" }}>
    //         <Text style={{fontSize: 20, textAlign: 'center'}}> Don't have an account?</Text>
    //         <Btn onClick={() => navigation.navigate("Sign Up")} title="Sign Up" style={{ width: "48%", backgroundColor: "#344869" }} />
    //     </View>
    // </View>

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
        position: 'absolute',
        top: 75,
        fontSize: 25

    },
    logOut:{
        position:'absolute',
        bottom:0,
        paddingBottom: 50,
        width: '50%'
    },
    view: {
        width: "100%",
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
        //backgroundColor: 'lightblue'
    }







})