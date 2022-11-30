import { StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {Calendar} from 'react-native-calendars'
import { SafeAreaView } from 'react-native-safe-area-context'

const TaskCalendar = () => {
  return (
    <>
    <SafeAreaView style={styles.container}>
      <View style={{backgroundColor: 'lightblue ', }}>
      <Text style={{fontSize: 30, justifyContent: 'center', alignSelf: 'center',
                    }}>Calender</Text>
      </View>
    <Calendar
      style={styles.cal}
      // markingType={'period'}
      // markedDates={{
      //   '2012-05-15': {marked: true, dotColor: '#50cebb'},
      //   '2012-05-16': {marked: true, dotColor: '#50cebb'},
      //   '2012-05-21': {startingDay: true, color: '#50cebb', textColor: 'white'},
      //   '2012-05-22': {color: '#70d7c7', textColor: 'white'},
      //   '2012-05-23': {color: '#70d7c7', textColor: 'white', marked: true, dotColor: 'white'},
      //   '2012-05-24': {color: '#70d7c7', textColor: 'white'},
      //   '2012-05-25': {endingDay: true, color: '#50cebb', textColor: 'white'}
      // }}
    /> 
    </SafeAreaView>
</>
  )
}


export default TaskCalendar

const styles = StyleSheet.create({
  container:{
    flexGrow:1,
    justifyContent: 'center',
    alignContent: 'center',
    paddingBottom: 40,
    height: '100%'
  },
  cal:{
    borderWidth: 2,
    borderRadius: 10,
    width: '95%',
    //height: '95%',
    justifyContent: 'center',
    padding:20,
    alignSelf: 'center'

  }
  
})