import React from 'react';
import { Image, ImageBackground , StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
 
const SignUpButton = ({ title, onPress }) => {
   return (
     <TouchableOpacity style={styles.SUbutton} onPress={onPress}>
       <Text style={styles.text}>{title}</Text>
     </TouchableOpacity>
   );
 };
 const LoginButton = ({ title, onPress }) => {
   return (
     <TouchableOpacity style={styles.Lbutton} onPress={onPress}>
       <Text style={styles.text}>{title}</Text>
     </TouchableOpacity>
   );
 };
 
 
const HomeScreen = ({ navigation }) => {
   return    (  
       <ImageBackground
       style={styles.background}
       source={require('../../assets/checklist.png')}>
 
           <View style={styles.logoContainer}>
               <Text style={styles.textLogo}>Tasks-R-Us</Text>
           </View>
 
           <View style={styles.signUpView}>
               <SignUpButton
                   title='Sign-Up'
                   onPress={() => navigation.navigate("Sign Up")}/>
           </View>
           <View style={styles.loginView}>
               <LoginButton
                   title='Login'
                   onPress={() => navigation.navigate("Login")}/>
           </View>
       </ImageBackground>
   );
};
 
 
const styles = StyleSheet.create({
   background: {
       flex: 1,
       width: '100%',
       justifyContent: "flex-end",
       alignItems: "center",
   },
   logoContainer: {
       position: 'absolute',
       top: 70,
       alignItems: "center",
   },
   signUpView: {
       width: "100%",
       height: 70,
       backgroundColor: "#fd9ca2",
       justifyContent: 'center'
   },
   loginView: {
       width: "100%",
       height: 70,
       backgroundColor: "#afe9e4",
       justifyContent: 'center'
   },
   textLogo:{
       fontSize: 55,
       top: 25,
       fontWeight: "bold"
   },
   SUbutton: {
       width: "100%",
       height: 70,
       alignItems: "center",
       padding:'3.5%',
       backgroundColor: "#fc5c65",
       justifyContent: 'center',
   },
   Lbutton: {
       width: "100%",
       height: 70,
       alignItems: "center",
       padding:'3.5%',
       backgroundColor: "#4ecdc4",
       justifyContent: 'center'
   },
   text: {
       fontSize: 35,
   },
});
 
 
export default HomeScreen;

