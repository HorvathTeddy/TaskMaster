import { SafeAreaView, Text, StyleSheet } from "react-native";
import React from "react";
import StdButton from "../Standards/StdButton";
import StdAlert from "../Standards/StdAlert";

const CreateAccountMain = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Welcome to TaskRUs</Text>
      <StdButton title="Business" />
      <StdButton title="Manager" />
      <StdButton title="Employee" />
      <Text style={styles.loginText}>Already have an account?</Text>
      <StdAlert
        mainAlert="Are your sure?"
        secondAlert="Are you sure you want to remove this beautiful box?"
        title="Login"
      />
      {/* <StdButton title="Login"></StdButton> */}
    </SafeAreaView>
  );
};

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

export default CreateAccountMain;
