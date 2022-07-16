import { TextInput ,View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import {MaterialIcons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import useAuth from '../../Hooks/useAuth';



const WebSignup = () => {
  
  const navigation = useNavigation()
  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")
  const [confirmPassword , setConfirmPassword] = useState("")
  const [error , setError] = useState()
  const {signUp } = useAuth()

  const handleSubmittions =async(e)=>{
    e.preventDefault
    setError("")
    try {
      await signUp(userEmail , userPassword)
    } catch (error) {
      setError(error.message)
    }
  }
  return (
    <ScrollView
    style={{
      backgroundColor:'white',
    }}>
       
      <View style={{flexDirection:'row',justifyContent:'space-between',padding:20,width:'100%',width:'80%' }}>
        <View style={{flex:1,flexDirection:'row',alignItems:'center',}}>

          <TouchableOpacity onPress={() => {navigation.navigate('webSignup')}}>
              <Text style ={[style.text ,style.colors]}>Signup</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { navigation.navigate('webLogin') }}>
              <Text style = {[style.text]}>Login</Text>
          </TouchableOpacity>

        </View>
        <View>
          <TouchableOpacity onPress={() => { navigation.navigate('LandingPage') }}>
            <Entypo name='cross' size={30}/>
          </TouchableOpacity>
        </View>

      </View>

      {/* sign in buttons "google  and facebook "  */}

      <View style={{paddingLeft:20,paddingRight:20,paddingBottom:20,paddingTop:10,}}>
          <View style={style.padding}>
            <TouchableOpacity style={[style.iconButtonColor,style.appbutton]}>
             <View style={{flexDirection:'row',alignItems:'center',paddingLeft:20,}}>
                <AntDesign style={{ paddingRight:40,color:'blue'}}  name='google' size={30}/>
                <Text style={style.appButtonText}>
                   Sign up with google
                </Text>
              </View>
            </TouchableOpacity>
            
          </View>
          <View style={style.padding}>
            <TouchableOpacity style={[style.appbutton,style.iconButtonColor]}>
              <View
                style={{  flexDirection:'row',  alignItems:'center',  paddingLeft:20,}}>
                <MaterialIcons style={{ paddingRight:40,color:'blue'}} size={30} name='facebook'/>
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
                width:'80%',
                paddingTop:50,
              }}>

                {/* email inputTExt View */}
              <View style={{ borderBottomColor: "#D8D8D8", borderBottomWidth: 1 }}>
                <Text style={style.inputTitle}> Email </Text>
                <TextInput 
                  onChangeText={(val) =>{
                    setUserEmail(val)
                  }}
                  style={[style.input]} 
                  />
              </View>

              {/* Password inputTExtView */}

              <View style={{ borderBottomColor: "#D8D8D8", borderBottomWidth: 1 }}>
                <Text style={[style.inputTitle ,{
                      marginTop: 32,
                      marginBottom: 8
                  }]}> Password </Text>

                <TextInput 
                  secureTextEntry="true"
                  onChangeText={(val) =>{
                    setUserPassword(val)
                  }}
                  style={[style.input]} 
                  />
              </View>
              

              {/* conrfirm password text */}

              <View style={{ borderBottomColor: "#D8D8D8", borderBottomWidth: 1 }}>
                <Text style={[style.inputTitle ,{
                      marginTop: 32,
                      marginBottom: 8
                  }]}> Password </Text>

                <TextInput 
                  secureTextEntry='true'
                  onChangeText={(val) =>{
                    setConfirmPassword(val)
                  }}
                  style={[style.input]} 
                  />
              </View>
            </View>

           {/*  The sign up button and everything below */}
          <View
          style={{
            paddingTop:50,
          }}>

          <TouchableOpacity
              onPress={handleSubmittions}
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
        <View style={{paddingTop:20,paddingLeft:350,paddingBottom:100,flexDirection:'row', }}>
          <View style={{  marginRight:5, } }>
            <Text>Have an account? </Text>
          </View>
          <TouchableOpacity
            onPress={()=>{navigation.navigate('webLogin') }} >
            <Text style={{   color:'#00C0F0',   fontWeight:'bold',    }}>Login</Text> 
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
    width:'80%',
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
  },

inputTitle: {
    color: "#ABB4BD",
    fontSize: 14
},
input: { 
    paddingLeft:10,
    PaddingRight:10,
    paddingVertical: 12,
    color: "black",
    fontSize: 18,
    fontFamily: "Monospace",
    
}
})
export default WebSignup