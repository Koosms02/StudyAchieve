import { View, Text ,StyleSheet, TouchableOpacity, ScrollView, Button} from 'react-native'
import React from 'react'
import ModuleCard from '../../Widget/ModuleCard'
import pic1 from '../../../assets/images/pic1.jpg'
import pic2 from '../../../assets/images/pic2.jpg'
import pic3 from '../../../assets/images/pic3.jpg'
import pic4 from '../../../assets/images/pic4.jpg'
import pic5 from '../../../assets/images/pic5.jpg'
import AnswerCard from '../../Widget/AnswerCard'


const Home = () => {

  const Answer = 'Solved 1: What is the difference between the react native and react'
  return (
    <ScrollView>

      <View style={[style.mainView,{flex:1} ]}>
        <View style={style.subView}>  
          <View style={{padding:30,}}>
            <Text style={style.greetingText}>Welcome to StudyArchieve</Text>
          </View>
        </View>
        <View style={{width:'80%' ,paddingTop:40 , flex:1 ,flexDirection:'row', alignItems:'center', justifyContent:'space-between',}}>
            <Text style={{fontWeight:'bold' , fontSize:20,}}>Recent</Text>
        </View>

        <View style={[style.subView, {flexDirection:'row', backgroundColor:'transparent', paddingTop:20,}]}>
          {/* should add a scroll view */}
          <ModuleCard picture={pic1} />
          <ModuleCard picture={pic1}/>
          <ModuleCard picture={pic1}/>
          <ModuleCard picture={pic1}/>
          <ModuleCard picture={pic1}/>
          <ModuleCard picture={pic1}/>
          

        </View>

        <View style={{width:'75%' ,paddingTop:40 , flex:1 ,flexDirection:'row', alignItems:'center', justifyContent:'space-between',}}>
            <Text style={{fontWeight:'bold' , fontSize:20,}}>Recommanded study notes and documents</Text>
            <TouchableOpacity>
              <Text>view more</Text>
            </TouchableOpacity>
        </View>

        <View style={[style.subView, {flexDirection:'row', backgroundColor:'transparent', paddingTop:20,}]}>
          {/* should add a scroll view */}
          <ModuleCard picture={pic1} />
          <ModuleCard picture={pic2}/>
          <ModuleCard picture={pic3}/>
          <ModuleCard picture={pic4}/>
          <ModuleCard picture={pic5}/>

        </View>
        <View style={{width:'75%' ,paddingTop:40 , flex:1 ,flexDirection:'row', alignItems:'center', justifyContent:'space-between',}}>
            <Text style={{fontWeight:'bold' , fontSize:20,}}>Solutions to posted questions</Text>
            <TouchableOpacity>
              <Text>view more</Text>
            </TouchableOpacity>
        </View>
        <View style={[style.subView, { backgroundColor:'transparent', paddingTop:20,paddingBottom:20}]}>
          {/* should add a scroll view */}
          <AnswerCard Answer={Answer}/>
        </View>

        <View style={{width:'75%' ,paddingTop:40  ,paddingBottom:20, flex:1 ,flexDirection:'row', alignItems:'center', justifyContent:'space-between',}}>
            <Text style={{fontWeight:'bold' , fontSize:20,}}> Get a tutor</Text>
            
        </View>
        
        <View style={[style.subView ,{backgroundColor:'#ff8c00'}]}>  
          <View style={{padding:30,}}>
            <Text style={{
              color:'blue',
              fontSize:18,
            }}>Are you struggling with understanding the content or are you preparing for exams ?</Text>
            <View style={{paddingTop:20, flexDirection:'row' , justifyContent:'space-between'}}>

            <Text style={{
               fontWeight:'bold',
               fontSize:40,
               color:'white'
            }}>Get help fast!!</Text>
              <Button title='find Tutor'/>
            </View>

          </View>
        </View>

        

        

        



      </View>
      
    </ScrollView>

  )
}

const style = StyleSheet.create({
  mainView:{
    padding:20,
    paddingBottom:20,
  },
  subView:{
    height: 180,
    width:800,
    backgroundColor:'white',
    borderRadius:20,
    borderStyle:'solid'
  },
  greetingText:{
    fontSize:20,
    fontWeight:'bold',
    fontFamily:'monospace',

  }
})

export default Home