import { View, Text, ScrollView, FlatList} from 'react-native'
import React from 'react'
import Header from '../Widget/Header'
import SideBarMenu from '../Widget/SideBarMenu'

const webRootPage = () => {
  return (
    
    <View style={{flex:1 , flexDirection:'row'}}>
      <SideBarMenu/>
      <View style={{flex:1}}>
      <Header name='studyArchieve'/>
        <ScrollView>
            <Text style={{paddingTop:1000, color:'black'}}>Hello word</Text>
            <Text style={{paddingTop:1000 , color:'black'}}>Hello word</Text>
            <Text style={{paddingTop:1000}}>Hello word</Text>
        </ScrollView>

      </View>
    </View>
  )
}

export default webRootPage

