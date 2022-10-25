import { View, Text, StyleSheet } from "react-native";
import React from "react";
import StdButton from "../../components/Standards/StdButton";

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text title="Login" style={styles.titleName}>
        Login
      </Text>
      <StdButton
        title="Business"
        onPress={() => navigation.navigate("Login Business")}
      />
      <StdButton
        title="Manager"
        onPress={() => navigation.navigate("Login Manager")}
      />
      <StdButton
        title="Employee"
        onPress={() => navigation.navigate("Login Employee")}
      />
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
