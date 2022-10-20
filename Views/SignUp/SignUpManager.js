import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import SignUpOptions from "./SignUpOptions";
import StdButton from "../../components/Standards/StdButton";

const SignUpBusiness = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text title="Sign Up" style={styles.titleName}>
          Sign Up
        </Text>
        <SignUpOptions title={"Name"} style={styles.options} />
        <SignUpOptions title={"Email"} />
        <SignUpOptions title="Company Name" />
        <SignUpOptions title="Verification Code" />
        <SignUpOptions title={"Password"} />
        <SignUpOptions title={"Password Confirmation"} />
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

export default SignUpBusiness;
