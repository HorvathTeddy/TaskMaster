import { Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";

// App standard button that can be used anywhere as a component

const StdButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
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
