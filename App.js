import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StandardButton from "./components/CreateAccount/CreateAccountButtons";
import LoginButtons from "./components/CreateAccount/LoginButtons";

export default function App() {
  const handlePress = () => false;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to TaskMaster</Text>
      <StandardButton title="Create Manager Account"></StandardButton>
      <StandardButton title="Create Employee Account"></StandardButton>
      <Text style={styles.loginText}>Already have an account?</Text>
      <LoginButtons title="Login"></LoginButtons>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text: {
    paddingTop: "25%",
    paddingBottom: "25%",
    fontSize: 24,
    fontWeight: "bold",
  },
  loginText: {
    paddingTop: "50%",
    paddingBottom: "-30%",
    fontSize: 20,
  },
});
