import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import StdButton from "../../components/Standards/StdButton";

/*
    This View is a root for the sign up pages
    taking navigation as an argument and passing it to the rest of the code
    to set up the different views withing the Stack.Navigator
*/

const SignUpRoot = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Welcome to Tasks-R-Us</Text>
      <Text style={styles.createAccount}>Create Account</Text>
      <StdButton
        title="Business"
        // navigation.navigate is how the navigator jumps from each screen
        // to the next
        onPress={() => navigation.navigate("Business")}
      />
      <StdButton
        title="Manager"
        // navigation.navigate is how the navigator jumps from each screen
        // to the next
        onPress={() => navigation.navigate("Manager")}
      />
      <StdButton
        title="Employee"
        // navigation.navigate is how the navigator jumps from each screen
        // to the next
        onPress={() => navigation.navigate("Employee")}
      />
      <Text style={styles.textLogin}>Already have an account?</Text>
      {/* navigation.navigate is how the navigator jumps from each screen // to
      the next */}
      <StdButton title="Login" onPress={() => navigation.navigate("Login")} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: "10%",
    justifyContent: "space-between",
    alingItems: "center",
  },
  titleName: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    alignItems: "center",
    marginTop: "10%",
    padding: "5%",
    borderRadius: 5,
    backgroundColor: "lightblue",
  },
  options: {
    width: "80%",
  },
  text: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  createAccount: {
    marginTop: "10%",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  textLogin: {
    marginTop: "50%",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default SignUpRoot;
