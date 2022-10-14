import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

const Login = ({ title, passwd, passwdCon }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{title}</Text>
      <TextInput style={styles.input} />
      <Text style={styles.label}>{passwd}</Text>
      <TextInput style={styles.input} />
      <Text style={styles.label}>{passwdCon}</Text>
      <TextInput style={styles.input} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: "40%",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginBottom: "25%",
  },
  label: {
    justifyContent: "center",
    fontSize: 18,
  },
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

export default Login;
