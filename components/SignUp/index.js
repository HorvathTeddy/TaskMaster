import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import SignUpOptions from "./SignUpOptions";

const SignUp = ({ title, email, passwd, passwdCon, conf }) => {
  return (
    <View style={styles.container}>
      <SignUpOptions title={title} style={styles.options} />
      <SignUpOptions title={email} />
      <SignUpOptions title={passwd} />
      <SignUpOptions title={passwdCon} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>{conf}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: "20%",
    width: "80%",
  },
  button: {
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: "10%",
    padding: "5%",
    borderRadius: 5,
    backgroundColor: "lightblue",
  },
  options: {
    width: "80%",
  },
});

export default SignUp;
