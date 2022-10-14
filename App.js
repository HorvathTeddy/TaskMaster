import { StyleSheet, Text, View } from "react-native";
import Login from "./components/Login/Login";

export default function App() {
  const handlePress = () => false;
  return (
    <View style={styles.container}>
      {/* <CreateAccoutMain></CreateAccoutMain> */}
      <Login
        title="Name"
        passwd="Password"
        passwdCon="Confirm password"
      ></Login>
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
});
