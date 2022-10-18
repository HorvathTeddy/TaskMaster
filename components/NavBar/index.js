import { StyleSheet, TouchableOpacity, Text, SafeAreaView } from "react-native";
import React from "react";
import { AppleStyle } from "react-native-scrollable-navigation-bar";

const NavBar = ({ title }) => {
  return (
    <SafeAreaView style={styles.navigator}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
      <Text style={styles.textTitle}>Tasks</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  navigator: {
    flexDirection: "row",
    backgroundColor: "grey",
    width: "100%",
    height: "12%",
    marginBottom: "5%",
  },
  button: {
    marginLeft: "5%",
  },
  text: {
    fontSize: 50,
  },
  textTitle: {
    marginLeft: "24%",
    fontSize: 45,
    fontWeight: "bold",
  },
});

export default NavBar;
