import { Platform } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import LandingPage from '../Components/Web/LandingPage'
import Login from '../Components/mobile/Login'
import Header from '../Shared/header'


const stack = createNativeStackNavigator()

const StackNavigation = () => { 

  return (
    
  Platform.OS ==='web' ? 
  ( 
    <stack.Navigator>
        <stack.Screen 
          name ="LandingPage" 
          component={LandingPage} 
          options={{title :<Header/> }}/>
    </stack.Navigator>
  ):
  (
    <stack.Navigator>
        <stack.Screen name ="Login" component={Login}/>
    </stack.Navigator>
  )
)
  
   
}

export default StackNavigation