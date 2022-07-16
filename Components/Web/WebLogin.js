import { View, Text, ScrollView , StyleSheet, TouchableOpacity ,TextInput} from 'react-native'
import React,{useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import {  MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import useAuth from '../../Hooks/useAuth';



const WebLogin = () => {
  const navigation = useNavigation();
  const [Email , setEmail] = useState()
  const [password ,setPassword] = useState()
  const {login} = useAuth()

  const onSubmittion=async(e)=>{
    e.preventDefault();
    try{
      await login(Email,password)
    }catch(error){
      console.log('email doest exists on database')
      console.log(error.message)
    }
  }
  return (
    <ScrollView
        style={{backgroundColor:'white',}}>
      <View style={{flexDirection:'row',justifyContent:'space-between',padding:20, width:'80%' }}>
        <View style={{flex:1,flexDirection:'row',alignItems:'center',}}>
          <TouchableOpacity onPress={() => {navigation.navigate('webSignup')}}>
              <Text style ={[style.text  ]}>Signup</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {navigation.navigate('webLogin')}}>
              <Text style = {[style.text ,style.colors]}>Login</Text>
          </TouchableOpacity>
       </View>
       <TouchableOpacity onPress={() => { navigation.navigate('LandingPage') }}>
        <View >
          <Entypo size={30} color='black' name='cross'/>
        </View>
       </TouchableOpacity>
      </View>

      {/* sign in buttons "google  and facebook "  */}

      <View style={{ paddingLeft:20, paddingRight:20,paddingBottom:20,paddingTop:10,}}>

        <View style={style.padding}>
           <TouchableOpacity style={[style.iconButtonColor,style.appbutton]}>
            <View
                style={
                  {
                    flexDirection:'row',
                    alignItems:'center',
                    paddingLeft:20,
                  }
                }>
               <AntDesign colos='blue' name='google' style={{ paddingRight:40}} size={30} />
                <Text style={style.appButtonText}>
                  Log in with Google
                </Text>
              </View>
            </TouchableOpacity>
            
          </View>
          <View style={style.padding}>
            <TouchableOpacity style={[style.appbutton,style.iconButtonColor]}>
              <View style={{flexDirection:'row', alignItems:'center',paddingLeft:20,}}>
                <MaterialIcons style={{ paddingRight:40,color:'blue'}} size={30} name='facebook'/>
                <Text style={style.appButtonText}>
                  Log in with facebook
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <Text style={{color:'grey',fontWeight:'bold',fontSize:20,paddingLeft:210,paddingTop:50,}}>
              OR</Text>

            {/* Input form field */}
           <View style={{paddingTop:50,width:"80%",}}>
              {/* email input */}
              <View style={{ borderBottomColor: "#D8D8D8", borderBottomWidth: 1 }}>
                <Text style={style.inputTitle}> Email </Text>
                <TextInput 
                  onChangeText={(val) =>{
                    setEmail(val)
                  }}
                  style={[style.input]} 
                  />
              </View>
              {/* password input field */}
              <View style={{ borderBottomColor: "#D8D8D8", borderBottomWidth: 1 }}>
                <Text style={[style.inputTitle ,{
                      marginTop: 32,
                      marginBottom: 8
                  }]}> Password </Text>

                <TextInput 
                  secureTextEntry="true"
                  onChangeText={(val) =>{
                    setPassword(val)
                  }}
                  style={[style.input]} 
                  />
              </View>
           </View>
          <TouchableOpacity style={ {  paddingLeft:389, }}>
            <Text style={{color:'grey',fontSize:15,}}>Forgot password?</Text>
          </TouchableOpacity>

          <View style={{ paddingTop:50,}}>
           <View style={{ paddingBottom:50,}}>
              <TouchableOpacity onPress={onSubmittion} style={[{paddingTop:20,},style.ButtonColor,style.padding,style.appbutton,]}>
                <Text style={[ style.appButtonText, ]}>
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
  input: { 
    paddingLeft:10,
    PaddingRight:10,
    paddingVertical: 12,
    color: "black",
    fontSize: 18,
    fontFamily: "Monospace",
    
 },
 inputTitle: {
  color: "#ABB4BD",
  fontSize: 14
 },

})
export default WebLogin