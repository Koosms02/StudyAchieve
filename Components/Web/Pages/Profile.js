import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import ModuleCard from '../../Widget/ModuleCard'
import pic1 from '../../../assets/images/pic1.jpg'
import pic2 from '../../../assets/images/pic2.jpg'
import pic3 from '../../../assets/images/pic3.jpg'
import pic4 from '../../../assets/images/pic4.jpg'
import pic5 from '../../../assets/images/pic5.jpg'


const Profile = () => {
  return (
    <ScrollView>
      <View style={{padding:20}}>
        <Text style={style.headingText}>Liked document</Text>
         <View style={[style.subView , {flexDirection:'row' , backgroundColor:'transparent'}]}>
          <ScrollView horizontal={true}>
           <ModuleCard picture={pic1}/>
           <ModuleCard picture={pic2}/>
           <ModuleCard picture={pic3}/>
           <ModuleCard picture={pic4}/>
           <ModuleCard picture={pic2}/>
           <ModuleCard picture={pic3}/>
           <ModuleCard picture={pic4}/>
          </ScrollView>
           
         </View>
       
        <Text style={[style.headingText , {paddingTop:80}]}>Uploaded documents</Text>
          <View style={[style.subView , {flexDirection:'row' , backgroundColor:'transparent'}]}>

            <ScrollView horizontal={true}>
              <ModuleCard picture={pic1}/>
              <ModuleCard picture={pic2}/>
              <ModuleCard picture={pic3}/>
              <ModuleCard picture={pic4}/>
              <ModuleCard picture={pic2}/>
              <ModuleCard picture={pic3}/>
            <ModuleCard picture={pic4}/>
            </ScrollView>
          </View>
      </View>
    </ScrollView>
  )
}

const style = StyleSheet.create({

  headingText:{
    fontWeight:'bold',
    fontSize:20,
    paddingBottom:15,
    paddingTop:20,
  },
  subView:{
    height:'40%',
    width:'80%',
    backgroundColor:'white'
  }
})

export default Profile