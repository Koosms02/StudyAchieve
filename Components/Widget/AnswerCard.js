import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'

const AnswerCard = ({Answer}) => {
  return (
    <View 
    showsVerticalScrollIndicator ={false}
    showsHorizontalScrollIndicator={false}
      style={style.view}>
      <ScrollView>
      <Text style={{paddingTop:50}}>
        {Answer}
      </Text>
      <Text style={{paddingTop:50}}>
        {Answer}
      </Text>
      <Text style={{paddingTop:50}}>
        {Answer}
      </Text>
      <Text style={{paddingTop:50}}>
        {Answer}
      </Text>
      </ScrollView>
    </View>
  )
}

const style = StyleSheet.create({
    view:{
        flex:1,
        height: 180,
        width:800,
        backgroundColor:'#00C0F0',
        borderRadius:10,
        padding:20,
    }

})
export default AnswerCard