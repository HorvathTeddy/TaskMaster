import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import LoginOptions from "./LoginOptions";

const Login = ({ title, passwd, passwdCon, conf }) => {
  return (
    <View style={styles.container}>
      <LoginOptions title={title} />
      <LoginOptions title={passwd} />
      <LoginOptions title={passwdCon} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>{conf}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: "50%",
  },
  button: {
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: "10%",
    padding: "5%",
    borderRadius: 5,
    backgroundColor: "lightblue",
  },
});

export default Login;
