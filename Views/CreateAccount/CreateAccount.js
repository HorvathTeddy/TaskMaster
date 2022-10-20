import { StyleSheet } from "react-native";
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignUpRoot from "../SignUpRoot";
import SignUpBusiness from "../SignUp/SignUpBusiness";
import SignUpManager from "../SignUp/SignUpManager";
import Login from "../Login/Login";

const Stack = createNativeStackNavigator();

const CreateAccountMain = (props) => {
  return (
    <Stack.Navigator initialRouteName="SignUpRoot">
      <Stack.Screen name="Sign Up" component={SignUpRoot} />
      <Stack.Screen name="Business" component={SignUpBusiness} />
      <Stack.Screen name="Manager" component={SignUpManager} />
      <Stack.Screen name="Employee" component={SignUpManager} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
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
