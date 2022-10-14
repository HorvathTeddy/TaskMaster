import { StyleSheet, Text, View } from "react-native";
import CreateAccoutMain from "./components/CreateAccount/CreateAccoutMain";

export default function App() {
  const handlePress = () => false;
  return (
    <View style={styles.container}>
      <CreateAccoutMain></CreateAccoutMain>
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
