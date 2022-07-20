import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React ,{useState} from 'react'
import { TextInput } from 'react-native'


const Question = () => {
  const [answerSent, setAnswerSent] = useState(true)

  function questionDisplay(){
      if(answerSent === false){
        return (
          <View>
            
          </View>)
      }
  }
  return (

       <ScrollView style ={{padding:20}}>
        <View style={{height:'100%' , width:'80%'}}>
          <Text style={{fontWeight:'bold', fontSize:20}}> Solution Panel</Text>
          <View style={{height:40 , width:'80%' , marginTop:30 , marginBottom:30, borderRadius:10 , backgroundColor:'white' , justifyContent:'center' , }}>
              <TextInput style={{marginLeft:20}}placeholder ='Find solution to your homework'/>
          </View>
          <View style={{height:350 , width:'80%', backgroundColor:'white' , borderRadius:10 , marginBottom:30}}>
              <ScrollView>
                  <View style={{padding:20,}}>
                    
                  </View>
              </ScrollView>
          </View >
          <Text style={{fontWeight:'bold' , fontSize:20}}> Post your question and get help 24/7</Text>
          <View style={{height:300 , width:'80%' , backgroundColor:'white', marginTop:30 , marginBottom:30 , borderRadius:10}}>
              <View style={{flexDirection:'row' , justifyContent:'space-between' , padding:20}}> 
                <Text> upload your question</Text>
                <TouchableOpacity> 
                  <View style={{backgroundColor:'#EF5350' , height:25 , width:70 , justifyContent:'center' , alignItems:'center', borderRadius:10}}>
                   <Text>upload</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{width:'100%' ,height:1 ,backgroundColor:'#BDBDBD' , borderStyle:'dashed' , borderColor:'#BDBDBD'}}></View>
              <View style={{paddingLeft:20}}>
                  <Text>Write your question below</Text>
                  <View style={{backgroundColor:'#F5F5F5',height:100 , width:'80%',marginTop:20 , borderRadius:10}}>
                    <TextInput style={{padding:10}} multiline={true} placeholder='write '/>
                  </View>
              </View>
          </View>
          <Text style={{fontWeight:'bold' , fontSize:20}}> Your answer will appear below</Text>

          <View style={{justifyContent:'center' ,marginBottom:20, marginTop:20, alignItems:'center',height:80, width:'80%' ,backgroundColor:'#BDBDBD' , borderStyle:'dashed' , borderColor:'#BDBDBD'}}>
                   <Text> your answer will apear here</Text>
          </View>
        </View>
        
       </ScrollView>

  )
}

export default Question