import React, {useState, useEffect} from 'react'
import { Text, View, StyleSheet, FlatList } from "react-native"
import Btn from "../components/Btn"
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore"

const styles = StyleSheet.create({
    view: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    }
})

export default function Loginscreen({navigation}) {

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

    return <View style={styles.view}>
        <Text style={{fontSize: 34, fontWeight: "800", marginBottom: 200}}>Welcome {user?.name}</Text>
        <View>
            <Btn title="Log Out" onClick={() => firebase.auth().signOut()} />
            <Text>Here is the list of {user?.role === "Employee" ? "Managers" : "Employees" }</Text>
        </View>
        <View>
            <FlatList
                data={users}
                renderItem={({ item }) => <View style={{ borderBottomWidth: 1}}><Text>{item.name}</Text></View>}
                keyExtractor={(item,index) => index.toString()}
            >

            </FlatList>
        </View>
    </View>
}