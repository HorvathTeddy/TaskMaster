import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

const StdButton = ({ title }) => {
  return (
    <NavigationContainer>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "60%",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: "10%",
    padding: "5%",
    borderRadius: 5,
    backgroundColor: "lightblue",
  },
  text: {
    justifyContent: "center",
    fontSize: 18,
  },
});

export default StdButton;
