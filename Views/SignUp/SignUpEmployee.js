import { View, Text, StyleSheet } from "react-native";
import React from "react";
import SignUpOptions from "./SignUpOptions";
import StdButton from "../../components/Standards/StdButton";
import { ScrollView } from "react-native";

// This signs up each employee to the account in order to add people to a
// companies team.

const SignUpEmployee = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text title="Sign Up" style={styles.titleName}>
          Employee
        </Text>
        <SignUpOptions title={"Name"} style={styles.options} />
        <SignUpOptions title={"Email"} />
        <SignUpOptions title="Company Name" />
        <SignUpOptions title="Verification Code" />
        <SignUpOptions title={"Password"} />
        <SignUpOptions title={"Password Confirmation"} />
        {/* 
      This button needs to go to the task page. 
      task page may need to 
      be redone. 
      */}
        <StdButton title={"Sign Up"} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: "10%",
    justifyContent: "center",
    alignItems: "stretch",
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

export default SignUpEmployee;
