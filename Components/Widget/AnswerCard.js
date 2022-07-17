import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const AnswerCard = ({Answer}) => {
  return (
    <View style={style.view}>
      <Text>
        {Answer}
      </Text>
    </View>
  )
}

const style = StyleSheet.create({
    view:{
        height: 180,
        width:800,
        backgroundColor:'#00C0F0',
        borderRadius:10,
        padding:20,
    }

})
export default AnswerCard