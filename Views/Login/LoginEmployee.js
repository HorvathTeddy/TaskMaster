import { View, StyleSheet } from "react-native";
import React from "react";
import StdButton from "../../components/Standards/StdButton";
import StdInputs from "../../components/Standards/StdInputs";

const LoginEmployee = () => {
  return (
    <View style={styles.loginContainer}>
      <StdInputs title={"Email"} />
      <StdInputs title={"Password"} />
      <StdButton title={"Login"} />
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    margin: "10%",
    justifyContent: "space-between",
    alingItems: "center",
  },
});

export default LoginEmployee;
