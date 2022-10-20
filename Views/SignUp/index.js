import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import StdButton from "../../components/Standards/StdButton";
import SignUpOptions from "./SignUpOptions";

// no longer needed not deleting just yet as a template

const SignUp = (props) => {
  return (
    <View style={styles.container}>
      <Text title="Sign Up" style={styles.titleName}>
        Sign Up
      </Text>
      <SignUpOptions title={"name"} style={styles.options} />
      <SignUpOptions title={"email"} />
      <SignUpOptions title="Company Name" />
      <SignUpOptions title={"passwd"} />
      <SignUpOptions title={"passwdCon"} />
      <StdButton title={"conf"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: "20%",
    width: "80%",
    // alignItems: "center",
    // justifyContent: "center",
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
});

export default SignUp;
