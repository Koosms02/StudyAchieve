import { View, Text ,StyleSheet ,Image} from 'react-native'
import React from 'react'

const ModuleCard = ({picture}) => {
  return (

    <View style={{paddingRight:20}}>
        <View style ={[style.view ]}>
            <View style={{width:150 , height:110 , backgroundColor:'white', justifyContent:'center' , alignItems:'center',borderRadius:5}}>
                <Image source ={picture} style={{ width: 120 , height:100 , borderRadius:2}}/>
            </View>
            <Text style={{paddingTop:10,color:'teal' , fontWeight:'bold' , fontSize:12}}> Physcsi 301</Text>
        </View>
        
    </View>
  )
}

const style = StyleSheet.create({
    view:{
        height:160,
        width:160,
        // backgroundColor:'grey',
        borderRadius:10,
        
    }

})
export default ModuleCard