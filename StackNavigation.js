
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import wLogin from './Components/Web/wLogin'

const stack = createNativeStackNavigator()

const StackNavigation = () => {
  return (
    <stack.Navigator>
        <stack.Screen  name='webLogin' component={wLogin}/>
    </stack.Navigator>
  )
}

export default StackNavigation