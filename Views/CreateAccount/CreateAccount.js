import { SafeAreaView, Text, StyleSheet } from "react-native";
import React from "react";
import StdButton from "../../components/Standards/StdButton";
import StdAlert from "../../components/Standards/StdAlert";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "../SignUp";
import { NavigationContainer } from "@react-navigation/native";
import SignUpRoot from "../SignUpRoot";

const Stack = createNativeStackNavigator();

const CreateAccountMain = (props) => {
  return (
    // <NavigationContainer>
    <Stack.Navigator initialRouteName="SignUpRoot">
      <Stack.Screen name="Business" component={SignUp} />

      <Stack.Screen
        name="Manager"
        children={() => <Task dueDate="hi"></Task>}
      />
      <Stack.Screen name="SignUpRoot" component={SignUpRoot} />
    </Stack.Navigator>
    // </NavigationContainer>
    // <SafeAreaView style={styles.container}>
    //   <Text style={styles.text}>Welcome to Tasks-R-Us</Text>
    //   <StdButton title="Business" />
    //   <StdButton title="Manager" />
    //   <StdButton title="Employee" />
    //   <Text style={styles.loginText}>Already have an account?</Text>
    //   <StdAlert
    //     mainAlert="Are your sure?"
    //     secondAlert="Are you sure you want to remove this beautiful box?"
    //     title="Login"
    //   />
    //   {/* <StdButton title="Login"></StdButton> */}
    // </SafeAreaView>
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
