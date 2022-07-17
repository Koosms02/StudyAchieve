import { View, Text ,StyleSheet ,Image} from 'react-native'
import React from 'react'

const ModuleCard = ({picture}) => {
  return (

    <View style={{paddingRight:20}}>
        <View style ={[style.view ]}>
            <View style={{alignItems:'center'}}>
                <Image source ={picture} style={{width: 120 , height:100 , borderRadius:10}}/>
            </View>
            <Text> documentName</Text>
        </View>
        
    </View>
  )
}

const style = StyleSheet.create({
    view:{
        height:160,
        width:120,
        backgroundColor:'#00C0F0',
        borderRadius:10,
        
    }

})
export default ModuleCard