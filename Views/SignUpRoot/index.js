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
      <StdButton
        title="Manager"
        onPress={() => navigation.navigate("Manager")}
      />
      <StdButton
        title="Employee"
        onPress={() => navigation.navigate("Employee")}
      />
      <Text style={styles.textLogin}>Already have an account?</Text>
      <StdButton title="Login" onPress={() => navigation.navigate("Login")} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: "10%",
    justifyContent: "space-between",
    alingItems: "center",
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
  text: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  textLogin: {
    marginTop: "50%",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default SignUpRoot;
