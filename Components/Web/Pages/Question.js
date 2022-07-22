import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React ,{useState} from 'react'
import { TextInput } from 'react-native'
import {AntDesign ,Entypo} from '@expo/vector-icons'
const Question = () => {
  const [answerSent, setAnswerSent] = useState(true)
  
  return (

       <ScrollView style ={{padding:20}}>
        <View style={{height:'100%' , width:'80%'}}>
          <Text style={{fontWeight:'bold', fontSize:20}}> Solution Panel</Text>
          <View style={{flexDirection:'row' ,height:'5%' , width:'80%' , marginTop:30 , marginBottom:30, borderRadius:10 , backgroundColor:'white' , alignItems:'center' , }}>
              <AntDesign style={{marginLeft:10,marginRight:5}} name='search1' size={18}/>
              <TextInput style={{outline:'none' ,marginLeft:10 ,width:'100%', height:'100%' ,placeholderTextColor:'#E0E0E0'}} placeholder ='Find solution to your homework'/>
          </View>
          <View style={{padding:30,height:'40%' , width:'80%', backgroundColor:'white', borderRadius:10 , marginBottom:30}}>
              <ScrollView>
                  <Text>
                      These is the mostly searched
                  </Text>
                
                 
              </ScrollView>
          </View >
          <Text style={{fontWeight:'bold' , fontSize:20}}> Post your question and get help 24/7</Text>
          <View style={{height:'50%' , width:'80%' , backgroundColor:'white', marginTop:30 , marginBottom:30 , borderRadius:10}}>
              <View style={{flexDirection:'row' , justifyContent:'space-between'  ,alignItems:'center', padding:20}}> 
                <Text style={{fontSize:20 , color:'#00C0F0'}}> upload your question</Text>
                <TouchableOpacity style={{height:'100%',width:'10%'}}> 
                  <View style={{backgroundColor:'#EF5350' , height:'100%' , width:'100%' , justifyContent:'center' , alignItems:'center', borderRadius:10}}>
                   <Text>upload</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{width:'100%' ,height:1 ,backgroundColor:'#BDBDBD' , borderStyle:'solid' , borderColor:'#BDBDBD'}}></View>
              <View style={{padding:20 , height:'40%' ,width:'80%'}}>
                  <Text style={{fontSize:20, color:'#00C0F0' ,fontWeight:'bold'}}>Write your question below</Text>
                  <View style={{backgroundColor:'#F5F5F5',height:'150%' , width:'100%',marginTop:20 , borderRadius:10}}>
                    <TextInput style={{height:'100%' , width:'100%' ,padding:20 , outline:'none' , placeholderTextColor:'#E0E0E0'}} multiline={true} placeholder='write '/>
                  </View>

                  <TouchableOpacity style={{ marginTop:20,height:'30%' , width:'20%' ,borderRadius:10}}>
                    <View style={{height:'100%' ,width:'100%' , backgroundColor:'#EF5350', borderRadius:10 , alignItems:'center', justifyContent:'center'}}>
                      <Text> Submit</Text>                    
                    </View>

                  </TouchableOpacity>
              </View>
          </View>
          <Text style={{fontWeight:'bold' , fontSize:20}}> Your answer will appear below</Text>

          <View style={{borderRadius:10,justifyContent:'center' ,marginBottom:20, marginTop:20, alignItems:'center',height:'20%', width:'80%' ,backgroundColor:'white' , borderColor:'#BDBDBD'}}>
                   <Entypo name="emoji-happy" size={'200%'}/>
          </View>
          <View style={{paddingTop:40 , height:50}}></View>
        </View>
        
       </ScrollView>

  )
}

export default Question