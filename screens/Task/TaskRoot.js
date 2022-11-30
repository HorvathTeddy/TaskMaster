import { View, Text, ScrollView, TouchableOpacity,  StyleSheet, SafeAreaView, RefreshControl, Dimensions} from "react-native";
import React, {useState, useEffect} from "react";
import axios from 'axios'

const { height } = Dimensions.get('window');

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}



const TaskRoot = ({navigation}) => {  
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [dueDate, setDueDate] = useState('')
  useEffect(() => {
    const displayTasks = async () => {
      setLoading(true)
      try {
        const {data: response} = await axios.get('https://taskmaster-api.onrender.com/tasks')
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
    <ScrollView >
      <View style={{ flex: 1, paddingBottom :'200%' }}>
        {loading && <Text>Loading</Text>}
        {!loading && (
          <View style={styles.tasks}>
            {data.map(item => 
              (
                <TouchableOpacity 
                  style={styles.tasksContainer} 
                  onPress={() => navigation.navigate("Task",
                    {
                      task: item.name,
                      description: item.description,
                      dueDate: item.date
                    }
                  )}
                  >

                  <Text style={styles.textCenter}>
                    <Text style={{fontWeight: 'bold'}}>Task: </Text>
                    <Text>{item.name}</Text>
                  </Text>

                  <Text style={styles.textCenter}>
                    <Text style={{fontWeight: 'bold'}}>Description: </Text>
                    <Text>{item.description}</Text>
                  </Text>

                  <Text style={styles.textCenter}>
                    <Text style={{fontWeight: 'bold'}}>Due date: {'\n'}</Text>
                    <Text>{item.date}</Text>
                  </Text>  

              </TouchableOpacity>))}
          </View>
        )}
      </View>
      </ScrollView>  
    </View>
    //</ScrollView>
    )}
 

    const styles = StyleSheet.create({
      scrollView: {
        marginBottom: "10%",
        paddingBottom : 100
      },
      tasks: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 300
      },
      tasksContainer: {
        width: '95%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        margin: 10,
        borderRadius: 20,
        backgroundColor: '#d2fffc',
        padding: 15,
    
      },
      textCenter: {
        textAlign: 'center',
        fontSize: 20
      }
    });

export default TaskRoot;
