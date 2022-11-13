import { StyleSheet, Text, View } from "react-native";
import { AuthProvider } from './context/AuthContext'

import AppNav from "./Views/AppNav";

export default function App() {
  const handlePress = () => false;
  return (
   
    <AuthProvider>
        <AppNav />
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
