import { StyleSheet, Text, View } from "react-native";
import SignUp from "./components/SignUp";
import CreateAccoutMain from "./components/CreateAccount/CreateAccoutMain";
import Task from "./components/Task";
import NavBar from "./components/NavBar";
import AddTask from "./components/Task/AddTask";

export default function App() {
  const handlePress = () => false;
  return (
    <View style={styles.container}>
      {/* <CreateAccoutMain></CreateAccoutMain> */}
      {/* <SignUp
        title="Name"
        email="Email"
        passwd="Password"
        passwdCon="Confirm password"
        conf="Confirm"
      /> */}
      <NavBar></NavBar>
      {/* <Task dueDate="hi"></Task> */}
      <AddTask></AddTask>
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
