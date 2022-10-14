import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import React from "react";
import { AppleStyle } from "react-native-scrollable-navigation-bar";

const NavBar = () => {
  return (
    // <TouchableOpacity style={styles.button}>
    //   <Text style={styles.text}>{title}</Text>
    // </TouchableOpacity>
    <View></View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10%",
    padding: "5%",
    borderRadius: 5,
    backgroundColor: "lightblue",
  },
  text: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
  },
});

export default NavBar;
