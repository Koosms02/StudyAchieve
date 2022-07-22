import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import ModuleCard from '../../Widget/ModuleCard'
import pic1 from '../../../assets/images/pic1.jpg'
import pic2 from '../../../assets/images/pic2.jpg'
import pic3 from '../../../assets/images/pic3.jpg'
import pic4 from '../../../assets/images/pic4.jpg'
import pic5 from '../../../assets/images/pic5.jpg'
import { FontAwesome ,FontAwesome5,MaterialCommunityIcons} from '@expo/vector-icons'



const Profile = () => {

  const likedModule =[
    <ModuleCard picture={pic1}/>,
    <ModuleCard picture={pic2}/>,
    <ModuleCard picture={pic3}/>,
    <ModuleCard picture={pic4}/>,
    <ModuleCard picture={pic2}/>,
    <ModuleCard picture={pic3}/>,
    <ModuleCard picture={pic4}/>
  ]
  return (
    <ScrollView>
      <View style={{alignItems:'center'}}>
        <View style={{flexDirection:'row',borderRadius:10,marginTop:20,width:'80%',height:'50%' , backgroundColor:'white'}}> 
           <View style={{width:'60%' ,height:'100%' , backgroundColor:'#90CAF9',borderTopLeftRadius:10 , borderBottomLeftRadius:10}}>
              <Text style={{ marginLeft:20,marginTop:20}}> Username</Text>
              <View style={{justifyContent:'center', borderRadius:10,height:'15%' , width:'80%' , backgroundColor:'white' ,  marginLeft:20,marginTop:20}}> 
                <Text style={{ marginLeft:20}}> Koosms</Text>
              </View>

              <Text style={{ marginLeft:20,marginTop:20}}> Email</Text>
              <View style={{borderRadius:10,justifyContent:'center',height:'15%' , width:'80%' , backgroundColor:'white' , marginLeft:20,marginTop:20}}> 
                <Text style={{ marginLeft:20}}> Koosms02@gmail.com</Text>
              </View>

              <Text style={{ marginLeft:20,marginTop:20}}> Status</Text>
              <View style={{borderRadius:10,justifyContent:'center',height:'15%' , width:'80%' , backgroundColor:'white' , marginLeft:20,marginTop:20}}> 
                <Text style={{ marginLeft:20}}>College student</Text>
              </View>
        
           </View>
           <View style={{width:'40%' ,height:'100%' , backgroundColor:'#90CAF9' ,borderTopRightRadius:10 , borderBottomRightRadius:10}}> 
                    <View style={{backgroundColor:'#F44336',flexDirection:'row',justifyContent:'center' ,alignItems:'center', borderRadius:10,height:'12%' , width:'80%',  marginLeft:20,marginTop:20}}> 
                      <FontAwesome name='group' size={'120%'} color={'#1565C0'}/>
                      <Text style={{ marginLeft:'5%'}}> invite a friend</Text>
                    </View>
                    <View style={{flexDirection:'row',borderRadius:10,alignItems:'center',justifyContent:'center',height:'12%' , width:'80%' , backgroundColor:'#1565C0' , marginLeft:20,marginTop:20}}> 
                       <FontAwesome5 name='crown' size={'120%'} color={'#F44336'}/>
                      <Text style={{ marginLeft:'5%'}}>Upgrade </Text>
                    </View>

                    <View style={{flexDirection:'row',borderRadius:10,alignItems:'center',justifyContent:'center',height:'12%' , width:'80%' , backgroundColor:'#1565C0' , marginLeft:20,marginTop:20}}> 
                      <FontAwesome name='lock' size={'120%'} color={'#F44336'}/>
                      <Text style={{ marginLeft:'5%'}}>change password </Text>
                    </View>

                    <View style={{flexDirection:'row',borderRadius:10,alignItems:'center',justifyContent:'center',height:'12%' , width:'80%' , backgroundColor:'white' , marginLeft:20,marginTop:20}}> 
                      <MaterialCommunityIcons name ='logout' size={'120%'}/>
                      <Text style={{ marginLeft:'5%'}}>Logout</Text>
                    </View>
           </View>
        </View>
        <Text style={[{marginTop:50,marginBottom:20},style.headingText ]}>Liked document</Text>
         <View style={[style.subView , {flexDirection:'row' , backgroundColor:'transparent'}]}>
          <ScrollView horizontal={true}>
            {likedModule}
          </ScrollView>
           
         </View>
       
        <Text style={[style.headingText , {paddingTop:80}]}>Uploaded documents</Text>
          <View style={[style.subView , {flexDirection:'row' , backgroundColor:'transparent'}]}>

            <ScrollView horizontal={true}>
              {likedModule}
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
    height:'25%',
    width:'80%',
    backgroundColor:'white'
  }
})

export default Profile