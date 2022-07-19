import { View, Text, StyleSheet } from 'react-native'
import React,{useState} from 'react'
import Qna from './searchSubViews/Qna'
import All from './searchSubViews/All'
import Notes from './searchSubViews/Notes'
import PreviousPaper from './searchSubViews/PreviousPaper'
import { ScrollView, TouchableOpacity } from 'react-native'
const Search = () => {

  const [all , setAll] =useState(true)
  const [notes , setNotes] = useState(false)
  const [previousPaper , setPreviousPapers] =useState(false)
  const [QnA , setQnA] = useState(false)
  

  function subView(){
    if(all === true){
      return <All/>
    }else if(notes === true){
      return <Notes/>
    }else if(previousPaper === true){
      return <PreviousPaper/>
    }else if(QnA === true){
      return <Qna/>
    }
  }
  return (
    <View>
      {/* header */}
      <View>
        <View style={style.header}> 
          <View style={{flexDirection:'row' ,justifyContent:'space-between', height:20 , width:'40%'}}>
            <TouchableOpacity 
                onPress={()=>{
                  setAll(true),
                  setNotes(false),
                  setPreviousPapers(false),
                  setQnA(false)
                }}>
              <View style={all === true ?(style.selectedView):(style.unSelectedView)}>
              <Text style={style.textStyle}> All </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={()=>{
                setAll(false),
                setNotes(true),
                setPreviousPapers(false),
                setQnA(false)
              }}
            >
              <View style={notes === true ?(style.selectedView):(style.unSelectedView)}>
              <Text style={style.textStyle}> Notes</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={()=>{
                setAll(false),
                setNotes(false),
                setPreviousPapers(true),
                setQnA(false)
              }}
            >
              <View style={previousPaper === true ?(style.selectedView):(style.unSelectedView)}>
              <Text style={style.textStyle}> Previous Paper </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={()=>{
                setAll(false),
                setNotes(false),
                setPreviousPapers(false),
                setQnA(true)
              }}
            >
              <View style={QnA === true ?(style.selectedView):(style.unSelectedView)}>
              <Text style={style.textStyle}> QnA </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
     </View>
     <View>
      
        <View style={{padding:20}}>
               <View style={[style.subView , {justifyContent:'center'} ]}>
                   {subView()}  
               </View>
        </View>
     </View>
      


    </View>
  )
}

const style =StyleSheet.create({
  header:{
    backgroundColor:'#B9F6CA',
    flexDirection:'row',
    width:'100%',
    height:40,
    alignContent:'flex-end',
    alignItems:'flex-end',
    // paddingBottom:5,
    justifyContent:'center'
  },
  textStyle:{
    fontWeight:'bold',
    fontSize:15,
    color:'#00C0F0'
    
  },
  subView:{
    
    height:400,
    width:'70%',
    backgroundColor:'white',
  },
  selectedView:{
    height:'110%',
    width:'100%',
    backgroundColor:'#EF5350',
    borderRadius:5
  },
  unSelectedView:{
    height:'110%',
    width:'100%',
    backgroundColor:'transparent',
    borderRadius:5
  }
})
export default Search