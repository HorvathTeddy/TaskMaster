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
        alignItems: "left",
        padding: -10
    }
})

export default function Loginscreen({ navigation }) {

    const [values, setValues] = useState({
        email: "",
        pwd: ""
    })

    function handleChange(text, eventName) {
        setValues(prev => {
            return {
                ...prev,
                [eventName]: text
            }
        })
    }

    function Login() {

        const { email, pwd } = values

        firebase.auth().signInWithEmailAndPassword(email, pwd)
            .then(() => {
            })
            .catch((error) => {
                alert(error.message)
                // ..
            });
    }

    return (
    <KeyboardAvoidingView>
    <View style={styles.view}>
        <Text style={{ fontSize: 34, fontWeight: "800", marginBottom: 20, marginLeft: '45%', color: 'black', alignItems: 'center' }}>Login</Text>
        <Text style={{padding: -20}}>Email</Text>
        <TextBox placeholder="johnDoe@gmail.com" onChangeText={text => handleChange(text, "email")} />
        <Text style={{padding: -20}}>Password</Text>
        <TextBox placeholder="ex... 1@Wa " onChangeText={text => handleChange(text, "pwd")} secureTextEntry={true} />
        <View style={{ flexDirection: "colmun", justifyContent: "space-between", alignItems: "center", width: "92%",  paddingBottom:100}}>
            <Btn onClick={() => Login()} title="Login" style={{ width: "48%" }} />
        </View>
        <View style={{ position: 'absolute', bottom:0, paddingBottom: 36,flexDirection: "colum",  paddingTop: 60, alignItems: "center", width: "92%" }}>
            <Text style={{fontSize: 20, textAlign: 'center'}}> Don't have an account?</Text>
            <Btn onClick={() => navigation.navigate("Sign Up")} title="Sign Up" style={{ width: "48%", backgroundColor: "#344869" }} />
        </View>
    </View> 
    </KeyboardAvoidingView>
    )
}