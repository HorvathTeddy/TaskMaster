import { Text, StyleSheet, View, SafeAreaView } from "react-native";
import React, { Component } from "react";
import CreateAccountButtons from "./CreateAccountButtons";
import LoginButtons from "./LoginButtons";
import { StatusBar } from "expo-status-bar";
import StdButton from "../Standards/StdButton";

export default class CreateAccoutMain extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Welcome to TaskMaster</Text>
        <StdButton title="Create Manager Account"></StdButton>
        <StdButton title="Create Employee Account"></StdButton>
        <Text style={styles.loginText}>Already have an account?</Text>
        <StdButton title="Login"></StdButton>
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  text: {
    paddingTop: "25%",
    fontSize: 24,
    fontWeight: "bold",
  },
  loginText: {
    marginTop: "40%",
    paddingBottom: "-30%",
    fontSize: 20,
  },
});
