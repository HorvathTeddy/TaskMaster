import { View, Text, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import axios from 'axios'

const Checkbox = () => {

const [completed, isComplete] = useState()
const [checked, isChecked] = useState(completed);

const handlePress = async () => {
    // console.log(!completed)
    isComplete(!completed);
    isChecked(!checked);
    axios.put("https://taskmaster-api.onrender.com/tasks", 
    {
        _id:"63794af89351280df47bca83",
        completed: completed,
       
    })
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