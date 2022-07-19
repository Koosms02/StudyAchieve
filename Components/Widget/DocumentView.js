import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'

const DocumentView = ({moduleCards}) => {
  return (
    <View style={{flex:1, flexDirection:'row' , height:180 , width:800}}>
      <ScrollView horizontal={false}>
        {moduleCards}
      </ScrollView>
    </View>
  )
}

export default DocumentView