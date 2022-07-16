import { View, Text, ScrollView, StyleSheet, TouchableOpacity  } from 'react-native'
import React from 'react'
import {MaterialIcons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import InputTextField from '../Widget/InputTextField';





const WebSignup = () => {
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
              <Text style ={[style.text ,style.colors]}>Signup</Text>
          </TouchableOpacity>
          <TouchableOpacity
             onPress={() => {
              navigation.navigate('webSignup')
            }}
          >
              <Text style = {[style.text]}>Login</Text>
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
                   Sign up with google
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
                  Sign up with facebook
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

           <View 
              style={{
                width:500,
                paddingTop:50,
              }}>
              <InputTextField  title="Email" />
              <InputTextField
                  style={{
                      marginTop: 32,
                      marginBottom: 8
                  }}
                  title="Enter password"
                  isSecure={true}
                    />
              <InputTextField
                    style={{
                        marginTop: 32,
                        marginBottom: 8
                    }}
                    title="Confirm password"
                    isSecure={true}
                      />
            </View>

           {/*  The sign up button and everything below */}
          <View
          style={{
            paddingTop:50,
          }}>

          <TouchableOpacity
             style={[
              {paddingTop:20},
              style.ButtonColor,
              style.padding,
              style.appbutton,
              
             ]}>
            <Text 
             style={[
               style.appButtonText,
             ]}>
              Signup
            </Text>
          </TouchableOpacity>
        </View>
        <View style={
          {
            paddingTop:20,
            paddingLeft:350,
            paddingBottom:100,
            flexDirection:'row',
            
          }
        }>
          <Text
            style={
              { 
                marginRight:5,
              }
            }
            >

            Have an account?
          </Text>
          <TouchableOpacity
            onPress={
              ()=>{
                navigation.navigate('webLogin')
              }
            } 
          >
              <Text
                style={{
                  color:'#00C0F0',
                  fontWeight:'bold',
                  
                }}>Login</Text>

          </TouchableOpacity>
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
export default WebSignup