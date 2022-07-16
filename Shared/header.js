import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'


const Header  = () => {
  const navigator = useNavigation()
  return (
    <View style={style.header}>
      <Text style={style.Text} >StudyAchieve</Text>
      <View style={{paddingLeft:100,flexDirection:'row', justifyContent:'space-evenly'}}>
          <TouchableOpacity 
            style={style.button}
            onPress={()=>{
              navigator.navigate('webLogin')
            }}
          >
            <Text>Log in</Text>
            
          </TouchableOpacity>
          <TouchableOpacity
            style={style.button}
            onPress={()=>{
              navigator.navigate('webSignup')
           }}
           >
            <Text >Sign up</Text>
            
          </TouchableOpacity>
        
      </View>
    </View>
  )
}

const style=StyleSheet.create({
  header:{
    width:'100%',
    length:'100%',
    flexDirection:'row',
    alignItems:'center',
    
  },
  Text:{
    color:'#00C0F0',
    fontSize:30,
    fontFamily:'Monospace',
    paddingRight:20,
    fontWeight:'bold',

  },
  button:{
    height:40,
    flex:1,
    alignItems:'center',
    alignContent:'center',
    justifyContent:'center',
    paddingLeft:10,
    paddingRight:10,
   

  }
})



export default Header