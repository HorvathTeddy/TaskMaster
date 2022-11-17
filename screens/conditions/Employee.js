import React, {useState, useEffect} from 'react'
import { Text, View, StyleSheet, FlatList } from "react-native"
import Btn from "../components/Btn"
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore"
import LoginStack from '../../StackManager/LoginStack';

const styles = StyleSheet.create({
    view: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    }
})

export default function Manager() {

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
        <NavigationContainer>
           { isLoggedIn && user?.role === "Manager" ? 
            <Tab.Navigator screenOptions={{ headerShown: false }}>
              <Tab.Screen name="Tasks" component={ManagerTaskStack} options={{
              tabBarLabel: 'Tasks',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }} />
              <Tab.Screen name="Calendar" component={TaskCalendar} options={{
              tabBarLabel: 'Calendar',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="calendar" color={color} size={size} />
              ),
              tabBarBadge: 3,
            }} />
              <Tab.Screen name="Profile" component={Profile} options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="account" color={color} size={size} />
              ),
            }} />
    
              <Tab.Screen name="Settings" component={Settings} options={{
              tabBarLabel: 'Settings',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="eye-settings" color={color} size={size} />
              ),
            }} />
            </Tab.Navigator> : <LoginStack />}
            </NavigationContainer>
    )
}

