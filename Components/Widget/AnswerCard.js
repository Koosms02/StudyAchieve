import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'

const AnswerCard = ({AnswerList}) => {
  return (
    <View 
    showsVerticalScrollIndicator ={false}
    showsHorizontalScrollIndicator={false}
      style={style.view}>
      <ScrollView>
      <Text style={{paddingTop:50}}>
        {AnswerList[0]}
      </Text>
      <Text style={{paddingTop:50}}>
        {AnswerList[1]}
      </Text>
      <Text style={{paddingTop:50}}>
        {AnswerList[2]}
      </Text>
      <Text style={{paddingTop:50}}>
        {AnswerList[3]}
      </Text>
      </ScrollView>
    </View>
  )
}

const style = StyleSheet.create({
    view:{
        flex:1,
        height: '10%',
        width:"65%",
        backgroundColor:'#FFA726',
        borderRadius:10,
        padding:20,
    }

})
export default AnswerCard