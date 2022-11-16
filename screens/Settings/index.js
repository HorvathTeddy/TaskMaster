import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'
import React, {useContext, useState, useEffect} from 'react'
import Btn from '../../components/Btn'
import firebase from 'firebase/app';
import Profile from '../Profile'

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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings Screen</Text>
      <View>
            <Btn title="Log Out" onClick={() => firebase.auth().signOut()} />
            <Text>Company role: {user?.role}</Text>
        </View>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({})