import { View, ActivityIndicator } from 'react-native'
import React, {useContext} from 'react'
import LoginStack from "../Views/StackManager/LoginStack";
import TaskStack from "../Views/StackManager/TaskStack";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from '../context/AuthContext';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const AppNav = () => {
    const {isLoading, userToken} = useContext(AuthContext)

    if (isLoading) {
        <View>
            <ActivityIndicator size={'large'} />
        </View>
    }
  return (
    <NavigationContainer>
       { userToken !== null ? 
        <Tab.Navigator>
          <Tab.Screen name="Home" component={TaskStack} />
        </Tab.Navigator>
       :  <LoginStack />}
    {/* <TaskStack></TaskStack> */}
    </NavigationContainer>
  )
}

export default AppNav
