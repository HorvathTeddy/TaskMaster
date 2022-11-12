import { StyleSheet, Text, View } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
import LoginStack from "./Views/StackManager/LoginStack";
import NavBar from "./components/NavBar";
import Task from "./Views/Task/Task";
import AddTask from "./Views/Task/AddTask";
import TaskStack from "./Views/StackManager/TaskStack";
import { AuthProvider } from './context/AuthContext'

// import { store } from "./app/store";
// import { Provider } from "react-redux";
import AppNav from "./Views/AppNav";

export default function App() {
  const handlePress = () => false;
  return (
   
    <AuthProvider>
      {/* <Provider store={store}> */}
        <AppNav />
      {/* </Provider> */}
    </AuthProvider>
 
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: "center",
    justifyContent: "stretch",
  },
  scrollview: {
    width: "80%",
    height: "20%",
  },
});
