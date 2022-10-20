import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import StdButton from "../../components/Standards/StdButton";
import StdAlert from "../../components/Standards/StdAlert";

const SignUpRoot = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Welcome to Tasks-R-Us</Text>
      <StdButton
        title="Business"
        onPress={() => navigation.navigate("Business")}
      />
      <StdButton title="Manager" />
      <StdButton title="Employee" />
      <Text /*style={styles.loginText}*/>Already have an account?</Text>
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
    marginTop: "20%",
    width: "80%",
  },
  titleName: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    alignItems: "center",
    marginTop: "10%",
    padding: "5%",
    borderRadius: 5,
    backgroundColor: "lightblue",
  },
  options: {
    width: "80%",
  },
});

export default SignUpRoot;
