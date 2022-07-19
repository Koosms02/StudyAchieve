import { View, Text ,StyleSheet } from 'react-native'
import React from 'react'

const All = () => {
  return (
    <View style={style.view}>
       <Text> All</Text>
    </View>
  )
}


const style= StyleSheet.create({
  view:{
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
  }
})
export default All