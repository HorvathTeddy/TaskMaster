import { View, Text, StyleSheet } from "react-native";
import React from "react";
import SignUpOptions from "../SignUp/SignUpOptions";
import StdButton from "../../components/Standards/StdButton";

const Login = () => {
  return (
    <View style={styles.container}>
      <Text title="Login" style={styles.titleName}>
        Login
      </Text>
      <StdButton title={"Business"} />
      <StdButton title={"Manager"} />
      <StdButton title={"employee"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: "10%",

    justifyContent: "space-between",
    alignItems: "stretch",
  },
  titleName: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Login;
