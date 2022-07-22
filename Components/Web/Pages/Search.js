import { View, Text, StyleSheet } from 'react-native'
import React,{useState} from 'react'
import All from './searchSubViews/All'
import Notes from './searchSubViews/Notes'
import PreviousPaper from './searchSubViews/PreviousPaper'
import { ScrollView, TouchableOpacity } from 'react-native'
const Search = () => {

  const [all , setAll] =useState(true)
  const [notes , setNotes] = useState(false)
  const [previousPaper , setPreviousPapers] =useState(false)
  
  

  function subView(){
    if(all === true){
      return <All/>
    }else if(notes === true){
      return <Notes/>
    }else if(previousPaper === true){
      return <PreviousPaper/>
    }
  }
  return (
    
    <View>
      {/* header */}
      <View style={{height:'10%' , width:'100%'}}>
        <View style={style.header}> 
          <View style={{flexDirection:'row' ,justifyContent:'space-between', height:20 , width:'40%'}}>
            <TouchableOpacity 
                onPress={()=>{
                  setAll(true),
                  setNotes(false),
                  setPreviousPapers(false)

                }}>
                <View>
                  <Text style={all === true ?({fontSize:18 , color:'#455A64',fontWeight:'bold'}):({fontSize:18,color:'#00C0F0',fontWeight:'bold'})}> All </Text>
                  <View style={all === true ?({width:'100%' ,height:'16%', backgroundColor:'#455A64' ,borderTopLeftRadius:10 ,borderTopRightRadius:10}):({ })}>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={()=>{
                setAll(false),
                setNotes(true),
                setPreviousPapers(false)
  
              }}
            >
              <View>
                <Text style={notes === true ?({fontSize:18 , color:'#455A64',fontWeight:'bold'}):({fontSize:18,color:'#00C0F0',fontWeight:'bold'})}> Notes </Text>
                  <View style={notes === true ?({width:'100%' ,height:'16%', backgroundColor:'#455A64' , borderTopLeftRadius:10 ,borderTopRightRadius:10}):({})}>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={()=>{
                setAll(false),
                setNotes(false),
                setPreviousPapers(true)
                
              }}
            >
              <View>
                <Text style={previousPaper === true ?({fontSize:18,fontWeight:'bold', color:'#455A64'}):({fontSize:18,fontWeight:'bold',color:'#00C0F0'})}> Previous Paper </Text>
                <View style={previousPaper === true ?({width:'100%' ,height:'16%', backgroundColor:'#455A64' ,borderTopLeftRadius:10 ,borderTopRightRadius:10}):({})}>
              </View>

              </View>
            </TouchableOpacity>
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
    alignItems:'flex-end',
    paddingBottom:8,
    justifyContent:'center'
  },
  textStyle:{
    fontWeight:'bold',
    fontSize:15,
    color:'#00C0F0',

    
  },
  selectedView:{

    height:'10%',
    width:'100%',
    backgroundColor:'#EF5350',
    borderRadius:5
  },
  unSelectedView:{
    height:'10%',
    width:'100%',
    backgroundColor:'transparent',
    borderRadius:5
  }
})
export default Search