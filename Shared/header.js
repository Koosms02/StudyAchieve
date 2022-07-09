import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const Header  = () => {
  return (
    <View style={style.header}>
      <Text>StudyAchieve</Text>
      <View style={{ flex:1,paddingLeft:80 , flexDirection:'row' , position:'absolute', left:0}}>
        <TouchableOpacity style={style.button}>
          <Text>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button}>
          <Text>Sign up</Text>
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
    justifyContent:'space-between'
  },
  button:{
    paddingLeft:20,
    paddingRight:10,

  }
})

export default Header