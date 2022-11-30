import { StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {Calendar} from 'react-native-calendars'
import { SafeAreaView } from 'react-native-safe-area-context'


const TaskCalendar = (props) => {
  return (
    <>
     {/* <Stack.Navigator
        initialRouteName="Calender"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#1999e1",
          },
          headerTitleAlign: 'center',
          headerTitleStyle: { 
            fontSize: 30, 
            fontWeight: "bold", 
            color: 'white' 
          },
        }}>
          <Stack.Screen name="Calendar"  component={Calendar} />

      </Stack.Navigator> */}
    <View style={styles.container}>
      <View style={{backgroundColor: '#1999e1', paddingTop:59, alignItems: 'center'}}>
        <Text style={{fontSize: 30, 
            fontWeight: "bold", 
            color: 'white', 
            paddingBottom: 8}}
            > Calendar</Text>

      </View>
    <View style={styles.center} >

    <Calendar
      onDayPress={day => {
        console.log('selected day', day);
      }}
      hideExtraDays={true}
      style={styles.cal}
      //markingType={'period'}
      markedDates={{
        '2022-12-03': {selected: true, marked: true, color: '#50cebb'},
      }}
    /> 
    </View>
    </View>
</>
  )
}


export default TaskCalendar

const styles = StyleSheet.create({
  container:{
    height: '100%',
    //width: '95%',
    justifyContent: 'space-between'
  },
  cal:{
    //borderWidth: 2,
    borderRadius: 10,
    width: '95%',
    marginBottom: 300,
    alignSelf: 'center',
  },
  center:{
    
  }
  
})