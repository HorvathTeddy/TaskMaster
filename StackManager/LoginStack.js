import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from '../screens/SignUp'
import Login from '../screens/Login'
import HomeScreen from "../screens/HomeScreen/HomeScreen";

const Stack = createNativeStackNavigator();

// This View contains the Stack.Navigator for the sign up portion of the app
// each Stack.Screen is implimented seperatly and is linked to the navigation
// that is passed to the SignUpRoot

const LoginStack = (props) => {
  return (
  
    <Stack.Navigator initialRouteName="SignUp">
      <Stack.Screen options={{headerShown:false}} name="HomeScreen"  component={HomeScreen} />
      <Stack.Screen  name="Sign Up" component={SignUp} />
      <Stack.Screen  name="Login" component={Login} />
    </Stack.Navigator> 
    
  );
};

export default LoginStack;
