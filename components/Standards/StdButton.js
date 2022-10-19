import { Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

const StdButton = ({ title, onPress }) => {
  return (
    // <NavigationContainer>
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
    // </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "80%",
    alignItems: "center",
    marginTop: "10%",
    padding: "5%",
    borderRadius: 5,
    backgroundColor: "lightblue",
  },
  text: {
    fontSize: 18,
  },
});

export default StdButton;
