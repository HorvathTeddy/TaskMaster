import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpRoot from "../SignUpRoot";
import SignUpBusiness from "../SignUp/SignUpBusiness";
import SignUpManager from "../SignUp/SignUpManager";
import SignUpEmployee from "../SignUp/SignUpEmployee";
import Login from "../Login/Login";
import LoginBusiness from "../Login/LoginBusiness";
import LoginManager from "../Login/LoginManager";

const Stack = createNativeStackNavigator();

// This View contains the Stack.Navigator for the sign up portion of the app
// each Stack.Screen is implimented seperatly and is linked to the navigation
// that is passed to the SignUpRoot

const LoginStack = (props) => {
  return (
    <Stack.Navigator initialRouteName="SignUpRoot">
      <Stack.Screen name="Sign Up" component={SignUpRoot} />
      <Stack.Screen name="Business" component={SignUpBusiness} />
      <Stack.Screen name="Manager" component={SignUpManager} />
      <Stack.Screen name="Employee" component={SignUpEmployee} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Login Business" component={LoginBusiness} />
      <Stack.Screen name="Login Manager" component={LoginManager} />
    </Stack.Navigator>
  );
};

export default LoginStack;
