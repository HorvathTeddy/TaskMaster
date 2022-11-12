import { View, StyleSheet } from "react-native";
import React, { useContext } from "react";
import StdButton from "../../components/Standards/StdButton";
import StdInputs from "../../components/Standards/StdInputs";
import { AuthContext } from '../../context/AuthContext'

const LoginBusiness = () => {
  const {login} = useContext(AuthContext)
  return (
    <View style={styles.loginContainer}>
      <StdInputs title={"Email"} />
      <StdInputs title={"Password"} />
      <StdButton title={"Login"} onPress={() => {login()}} />
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

export default LoginBusiness;
