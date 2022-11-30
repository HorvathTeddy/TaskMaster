import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const Checkbox = ({completed, isCompleted}) => {

const [checked, isChecked] = React.useState(completed);

const handlePress = () => {
    console.log(completed)
    isCompleted(!completed);
    isChecked(!checked);
}


  return (
    <TouchableWithoutFeedback style={styles.container} onPress={handlePress}>
        {(checked === true) && <Text style={styles.text}>&#9932;</Text>}
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    container: {
        width: 32,
        height: 32,
        backgroundColor: 'white',
        borderWidth: 2,
        //paddingBottom: 20
    },
    text: {
        fontSize: 20,
        textAlign: 'center'
    }
})

export default Checkbox