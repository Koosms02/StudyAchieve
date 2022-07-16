import { Platform } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import LandingPage from '../Components/Web/LandingPage'
import Login from '../Components/mobile/Login'
import WebLogin from '../Components/Web/WebLogin'
import WebSignup from '../Components/Web/WebSignup'
import useAuth from '../Hooks/useAuth'
import webRootPage from '../Components/Web/webRootPage'
import rootApp from '../Components/mobile/rootApp'
import { ActivityIndicator } from 'react-native-web'


const stack = createNativeStackNavigator()



const StackNavigation = () => { 
  const {user} = useAuth()
  return (

    user? (
      Platform.OS === 'web' ? (
        <stack.Navigator>
        <stack.Screen name="rootPage" component={webRootPage} options={{headerShown:false}}/>
        </stack.Navigator>
      ):
      ( 
        <stack.Navigator>
        <stack.Screen name ="Login" component={Login}/>
    </stack.Navigator>
      )
    ):
     (
      Platform.OS === 'web' ? (
          <stack.Navigator>
            <stack.Screen name ="LandingPage" component={LandingPage} options={{headerShown :false }}/>
            <stack.Screen name="webLogin" component={WebLogin} options={{headerShown:false}}/>
            <stack.Screen name="webSignup" component={WebSignup} options={{headerShown:false}}/>
          </stack.Navigator>
        ):
        (
          <stack.Navigator>
            <stack.Screen name ='rootApp' component ={rootApp} />
          </stack.Navigator>
        )
     )

  )

}

export default StackNavigation