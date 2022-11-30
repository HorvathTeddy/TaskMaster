import React, { useState } from 'react'
import { Text, View, StyleSheet, KeyboardAvoidingView } from "react-native"
import TextBox from "../components/TextBox"
import Btn from "../components/Btn"
import firebase from 'firebase/app';
import "firebase/auth";

const styles = StyleSheet.create({
    view: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "left"
    }
})

export default function SignUpScreen({ navigation }) {

    const auth = firebase.auth
    const firestore = firebase.firestore

    const [values, setValues] = useState({
        name: "",
        role: "",
        email: "",
        pwd: "",
        pwd2: ""
    })

    function handleChange(text, eventName) {
        setValues(prev => {
            return {
                ...prev,
                [eventName]: text
            }
        })
    }

    function SignUp() {

        const { email, pwd, pwd2, name, role} = values

        if (pwd == pwd2) {
            firebase.auth().createUserWithEmailAndPassword(email, pwd)
                .then(() => {
                    firestore().collection("users").doc(auth().currentUser.uid).set({
                        uid: auth().currentUser.uid,
                        name,
                        role,
                        email
                    })
                })
                .catch((error) => {
                    alert(error.message)
                    // ..
                });
        } else {
            alert("Passwords are different!")
        }
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <View style={styles.view}>
        <Text style={{ fontSize: 34, fontWeight: "800", marginBottom: 20 }}>Sign Up</Text>
        <Text style={{paddingTop: -20}}>Full Name</Text>
        <TextBox placeholder="Full Name:     ex. John Doe" onChangeText={text => handleChange(text, "name")} />
        <Text style={{padding: -10}}>Email</Text>
        <TextBox placeholder="Email Address:       ex. johnDoe@gmail.com" onChangeText={text => handleChange(text, "email")} />
        <Text style={{padding: -20}}>Role (Manager, Employee)</Text>
        <TextBox placeholder="Role (type admin, manager, or employee)" onChangeText={text => handleChange(text, "role")} />
        <Text style={{padding: -20}}>Password</Text>
        <TextBox placeholder="Password" secureTextEntry={true}  onChangeText={text => handleChange(text, "pwd")}/>
        <Text style={{padding: -20}}>Confirm password</Text>
        <TextBox placeholder="Confirm Password" secureTextEntry={true}  onChangeText={text => handleChange(text, "pwd2")}/>
        <View style={{ flexDirection: "colum", justifyContent: "space-between", alignItems: "center", width: "92%", paddingBottom:100 }}>
            <Btn onClick={() => SignUp()} title="Sign Up" style={{ width: "48%" }} />
        </View>
        <View style={{ position: 'absolute', bottom:0, paddingBottom: 36,flexDirection: "colum",  paddingTop: 60, alignItems: "center", width: "92%" }}>
            <Text style={{fontSize: 20, textAlign: 'center'}}> Already have an account? Click the login button below. </Text>
            <Btn onClick={() => navigation.replace("Login")} title="Login" style={{ width: "48%", backgroundColor: "#344869" }} />
        </View>
    </View>
    </KeyboardAvoidingView>
)}