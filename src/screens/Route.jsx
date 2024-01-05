import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './Home'
import Players from './Players'
import Category from './Category'
import TruthOrDare from './TruthOrDare'
import ShowTruthOrDare from './ShowTruthOrDare'

const Stack = createNativeStackNavigator()

const Route = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Players' component={Players}/>
            <Stack.Screen name='Category' component={Category}/>
            <Stack.Screen name='TruthOrDare' component={TruthOrDare}/>
            <Stack.Screen name='ShowTruthOrDare' component={ShowTruthOrDare}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Route

