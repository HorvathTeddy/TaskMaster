import { StyleSheet, Text, View } from "react-native";
import SignUp from "./Views/SignUp";
// import AddTask from "./Views/Task/AddTask";
import { NavigationContainer } from "@react-navigation/native";
import LoginStack from "./Views/StackManager/LoginStack";

export default function App() {
  const handlePress = () => false;
  return (
    <NavigationContainer style={styles.container}>
      <LoginStack></LoginStack>
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
