import { View, Text, ScrollView , StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import {  MaterialIcons } from '@expo/vector-icons';
import InputTextField from '../Widget/InputTextField';




const WebLogin = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
    style={{
      backgroundColor:'white',
    }}>
      <View style={{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:20,
        
        }}>
        <View style={{
          flex:1,
          flexDirection:'row',
          alignItems:'center',
          }}>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('webSignup')
            }}
           >
              <Text style ={[style.text  ]}>Signup</Text>
          </TouchableOpacity>
          <TouchableOpacity
             onPress={() => {
              navigation.navigate('webLogin')
            }}
          >
              <Text style = {[style.text ,style.colors]}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={{ padding:15}}>
          <Text>Cancel</Text>
        </View>
      </View>

      {/* sign in buttons "google  and facebook "  */}
      <View
        style={
          {
            paddingLeft:20,
            paddingRight:20,
            paddingBottom:20,
            paddingTop:10,

          }
        }>

          <View style={style.padding}>
            <TouchableOpacity style={
              [style.iconButtonColor,
              style.appbutton]}>
            <View
                style={
                  {
                    flexDirection:'row',
                    alignItems:'center',
                    paddingLeft:20,
                  }
                }>
                <MaterialIcons 
                  style={{ 
                    paddingRight:40,
                  }}
                  size={30}
                  name='email'/>
                <Text style={style.appButtonText}>
                  Log in with Google
                </Text>
              </View>
            </TouchableOpacity>
            
          </View>
          <View style={style.padding}>
            <TouchableOpacity style={[
              style.appbutton,
              style.iconButtonColor]}>
              <View
                style={
                  {
                    flexDirection:'row',
                    alignItems:'center',
                    paddingLeft:20,
                  }
                }>
                <MaterialIcons 
                  style={{ 
                    paddingRight:40,
                    color:'blue'
                  }}
                  size={30}
                  name='facebook'/>
                <Text style={style.appButtonText}>
                  Log in with facebook
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <Text
              style={{
                color:'grey',
                fontWeight:'bold',
                fontSize:20,
                paddingLeft:210,
                paddingTop:50,
              }}>OR</Text>


            {/* Input form field */}
           <View 
              style={{
                paddingTop:50,
                width:500,
              }}>
              <InputTextField  title="Email" />
              <InputTextField
                  style={{
                      marginTop: 32,
                      marginBottom: 8
                  }}
                  title="Password"
                  isSecure={true}
                    />
            
           </View>

          
          <TouchableOpacity
            style={
              {
                paddingLeft:389,
              }
            }
            >
            <Text 
              style={
                {
                  color:'grey',
                  fontSize:15,
                }
              }>Forgot password?</Text>
          </TouchableOpacity>
       

          <View
          style={{
            paddingTop:50,
          }}>

          <View
            style={
              {
                paddingBottom:50,
              }
            }>
              <TouchableOpacity
                style={[

                  {paddingTop:20,},
                  style.ButtonColor,
                  style.padding,
                  style.appbutton,
                  
                ]}>
                <Text 
                style={[
                  style.appButtonText,
                  
                ]}>
                  Log in
                </Text>
              </TouchableOpacity>
          </View>
        </View>
      </View>

    </ScrollView>
  )
}


const style = StyleSheet.create({
  text:{
    
    fontWeight:'bold',
    fontSize:25,
    fontFamily:'Monospace',
    color:'grey',
    paddingRight:20,
    
  },
  colors:{
    color:'#00C0F0',
  },
  appbutton:{
    elevation: 8,
    borderRadius: 4, 
    paddingRight:20,
    paddingTop:20,
    paddingBottom:20,
    Height:20,
    width:500,
    borderStyle:'solid',
    borderColor:'black',
    shadowColor: "rgba(171, 180, 189, 0.35)",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 20,
        
  },
  appButtonText: {
    fontSize: 18,
    color: "black",
    fontWeight:'Bold',
    fontFamily:'Monospace',
    textAlign:'center'
  },
  padding:{
    paddingTop:20,
  },
  ButtonColor:{
    backgroundColor:"#33b249"
  },
  iconButtonColor:{
    backgroundColor:'white'
  }
})
export default WebLogin