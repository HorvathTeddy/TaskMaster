import { StyleSheet, Text, View } from "react-native";
import SignUp from "./Views/SignUp";
import CreateAccount from "./Views/CreateAccount/CreateAccount";
import Task from "./Views/Task";
import NavBar from "./components/NavBar";
// import AddTask from "./Views/Task/AddTask";
import { ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const handlePress = () => false;
  return (
    <NavigationContainer style={styles.container}>
      <CreateAccount></CreateAccount>
      {/* <SignUp
        name="Name"
        email="Email"
        passwd="Password"
        passwdCon="Confirm password"
        conf="Confirm"
      /> */}
      {/* <NavBar></NavBar> */}
      {/* <View style={styles.scrollview}>
        <ScrollView>
          <Task dueDate="hi"></Task>
        </ScrollView>
      </View> */}
      {/* <AddTask></AddTask> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "stretch",
  },
  scrollview: {
    width: "80%",
    height: "20%",
  },
});
