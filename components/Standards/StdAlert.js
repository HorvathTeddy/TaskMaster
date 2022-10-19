import { React } from "react";
import { StyleSheet, Alert, View, Button } from "react-native";
import StdButton from "./StdButton";

const StdAlert = ({ mainAlert, secondAlert, title }) => {
  // const [showBox, setShowBox] = useState(true);

  const showConfirmDialog = () => {
    return Alert.alert(mainAlert, secondAlert, [
      // The "Yes" button
      {
        text: "Yes",
        onPress: () => {
          // setShowBox(false);
        },
      },
      // The "No" button
      // Does nothing but dismiss the dialog when tapped
      {
        text: "No",
      },
    ]);
  };

  return <StdButton title={title} onPress={() => showConfirmDialog()} />;
};

export default StdAlert;
