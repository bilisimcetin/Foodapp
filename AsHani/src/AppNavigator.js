import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'


const Stack=createNativeStackNavigator()


export default function AppNavigator() {
  return (
    <NavigationContainer>
       
      <Stack.Navigator>

        <Stack.Screen component={Splash} 
        name='Splash' 
        options={{headerShown:false}} />

        <Stack.Screen component={Login} 
        name='Login' 
        options={{headerShown:false}} />
      </Stack.Navigator>
        
   </NavigationContainer>

  )
}

const styles = StyleSheet.create({})