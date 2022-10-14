import { Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { Component } from "react";

const LoginButtons = ({ title }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
    // </div>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: "70%",
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

export default LoginButtons;
