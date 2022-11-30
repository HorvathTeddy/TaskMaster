import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Settings from "../screens/Settings";

const Stack = createNativeStackNavigator();

// This View contains the Stack.Navigator for the sign up portion of the app
// each Stack.Screen is implimented seperatly and is linked to the navigation
// that is passed to the SignUpRoot

const SettingsStack = (props) => {
  return (
  
    <Stack.Navigator initialRouteName="Settings">
      <Stack.Screen options={{headerShown:false}} name="Settings"  component={Settings} />
      {/* <Stack.Screen  name="Sign Up" component={SignUp} />
      <Stack.Screen  name="Login" component={Login} /> */}
    </Stack.Navigator> 
    
  );
};

export default SettingsStack;
