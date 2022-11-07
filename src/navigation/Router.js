import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Global } from '../core';
import { Feeds } from '../screens';

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: Global.navigationBarColor } }}>
        <Stack.Screen name="Feeds" component={Feeds} options={{title: "Individual View"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}