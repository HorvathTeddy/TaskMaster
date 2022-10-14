import { StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import React from "react";

const CreateAccountButtons = ({ title }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
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

export default CreateAccountButtons;
