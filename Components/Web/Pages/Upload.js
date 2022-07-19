import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'

const Upload = () => {
  return (
    <View style={{paddingLeft:50, paddingRight:50 , paddingTop:20 ,paddingBottom:20 ,flex:1,}}>
      <ScrollView>
        <Text style={{fontWeight:'bold' , fontSize:20 , color:'#EF5350' , paddingBottom:50}}>Donate you study notes and help a fellow student</Text>
          <View style={{height:'150%' , width:'60%' , backgroundColor:'#B9F6CA' ,alignItems:'center' , justifyContent:'center',borderRadius:10 , borderStyle:'dashed' ,borderColor:'#EF5350', borderWidth:1}}> 
                <Text style={{fontWeight:'bold' , color:'black' , fontSize:25, paddingBottom:80,paddingTop:20}}>Upload</Text>
                <Text style={{fontWeight:'bold' , color:'black' , fontSize:20}}> Drag and drop HERE !!!</Text>
                <Text style={{paddingBottom:20,}}> OR</Text>
                <TouchableOpacity style={{height:'10%' , width:'10%' ,paddingRight:20,}}>
                  <View style={{height:'180%' , width:'150%' , backgroundColor:'#EF5350' , justifyContent:'center', borderRadius:10, alignItems:'center'}}>
                    <Text style={{textAlign:'center'}}> Browser </Text>
                  </View>
                </TouchableOpacity>
          </View>
      </ScrollView>
    </View>

  )
}

export default Upload