import { View, Text, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import axios from 'axios';

const Checkbox = () => {

const [completed, isCompleted] = useState(false)
const [checked, isChecked] = React.useState(completed);

const handlePress = () => {
    console.log(!completed)
    isCompleted(!completed);
    isChecked(!checked);

    axios.put("http://localhost:8080/tasks", {
        completed: true})
    }


  return (
    <TouchableWithoutFeedback style={styles.checkbox} onPress={handlePress}>
        {(checked === true) && <Text style={styles.text}>&#9932;</Text>}
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    checkbox: {
        width: 32,
        height: 32,
        backgroundColor: 'white',
        borderWidth: 2,
    },
    text: {
        fontSize: 33,
        textAlign: 'center', 
        //paddingTop: 1
    }
})

export default Checkbox