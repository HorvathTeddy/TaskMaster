import { Text, View, StyleSheet, TextInput } from "react-native";

const SignUpOptions = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{title}</Text>
      <TextInput style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: "10%",
  },
  input: {
    height: 40,
    width: "150%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  label: {
    justifyContent: "center",
    fontSize: 18,
  },
});

export default SignUpOptions;
