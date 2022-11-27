import { View, Text, ScrollView, StyleSheet, SafeAreaView, RefreshControl } from "react-native";
import React, {useState, useEffect} from "react";
import Task from "./Task";
import { useRoute } from "@react-navigation/native";
import axios from 'axios'

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const TaskRoot = () => {  
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])
  useEffect(() => {
    const displayTasks = async () => {
      setLoading(true)
      try {
        const {data: response} = await axios.get('http://localhost:8080/tasks')
        setData(response)
      } catch (error) {
        console.error(error.message)
      }
      setLoading(false)
    }
    displayTasks()
  }, [])

  return (
    <View>
    <ScrollView>
      <View style={{ flexGrow: 1 }}>
        {loading && <Text>Loading</Text>}
        {!loading && (
          <View style={styles.tasks}>
            <Text>Tasks List</Text>
            {data.map(item => (<View style={styles.tasksContainer}>
                                <Text>
                                  Task name: {item.name}
                                </Text>
                                <Text>
                                  Task description: {item.description}
                                </Text>
                                <Text>
                                  Task due date: {item.date}
                                </Text>
                              </View>))}
          </View>
        )}
      </View>
    </ScrollView> 
    </View>
    )}
 

const styles = StyleSheet.create({
  scrollView: {
    marginBottom: "10%",
  },
  tasks: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 300
  },
  tasksContainer: {
    width: '90%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    margin: 10
  }
});

export default TaskRoot;
