import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import LoginStack from "./Views/StackManager/LoginStack";
import NavBar from "./components/NavBar";
import Task from "./Views/Task/Task";
import AddTask from "./Views/Task/AddTask";
import TaskStack from "./Views/StackManager/TaskStack";

export default function App() {
  const handlePress = () => false;
  return (
    <NavigationContainer style={styles.container}>
      {/* <LoginStack></LoginStack> */}
      {/* <NavBar></NavBar> */}
      {/* <View> */}
      {/* <ScrollView style={styles.scrollview}> */}
      {/* <Task dueDate="hi"></Task> */}
      <TaskStack></TaskStack>
      {/* </ScrollView> */}
      {/* </View> */}
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
