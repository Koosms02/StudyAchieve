import { View, Text ,StyleSheet, TouchableOpacity, ScrollView, Button, ImageBackground} from 'react-native'
import React from 'react'
import ModuleCard from '../../Widget/ModuleCard'
import pic1 from '../../../assets/images/pic1.jpg'
import pic2 from '../../../assets/images/pic2.jpg'
import pic3 from '../../../assets/images/pic3.jpg'
import pic4 from '../../../assets/images/pic4.jpg'
import pic5 from '../../../assets/images/pic5.jpg'
import AnswerCard from '../../Widget/AnswerCard'



const Home = () => {

  const AnswerList = [
    'solution 1: What is react native',
    'solution 2: What is react',
    'solution 3: What is your name',
    'solution 4: What is DFT',
  ]
  const moduleList =[<ModuleCard picture={pic1} /> , 
                     <ModuleCard picture={pic2} /> ,
                     <ModuleCard picture={pic3} /> ,
                     <ModuleCard picture={pic4} />  ]
  return (
    <ScrollView>
      <View style={[style.mainView ]}>
        <View style={{padding:20 , height:'15%' , width:'65%' , backgroundColor:'white' , borderRadius:10}}>  
            <Text style={{marginTop:20,fontSize:'110%' , fontWeight:'bold' , color:'#F44336'}}>Welcome to StudyArchieve</Text>
        </View>
        <View style={{width:'65%' ,paddingTop:40,flexDirection:'row', alignItems:'center',}}>
            <Text style={{fontWeight:'bold' , fontSize:20,}}>Recently Viewed</Text>
        </View>

        <View style={{width:'65%' ,height:'15%',flexDirection:'row', backgroundColor:'tranparent', marginTop:20,}}>
          <ScrollView horizontal={true}>
            {moduleList}
          </ScrollView>
        </View>

        <View style={{width:'65%',marginTop:40, marginBottom:40 , flex:1 ,flexDirection:'row', alignItems:'center', justifyContent:'space-between',}}>
            <Text style={{fontWeight:'bold' , fontSize:'110%',}}>Recommanded study notes and documents</Text>
            <TouchableOpacity>
              <Text>view more</Text>
            </TouchableOpacity>
        </View>

        <View style={{marginTop:20, width:'65%' ,height:'15%', flexDirection:'row'}}>
          <ScrollView horizontal={true}>
            {moduleList}
          </ScrollView>

        </View>

        <View style={{width:'65%' ,marginTop:40,marginBottom:40 , flex:1 ,flexDirection:'row', alignItems:'center', justifyContent:'space-between',}}>
            <Text style={{fontWeight:'bold' , fontSize:'110%',}}>Solutions to posted questions</Text>
            <TouchableOpacity>
              <Text>view more</Text>
            </TouchableOpacity>
        </View>
        <View style={{ backgroundColor:'transparent', paddingTop:20,paddingBottom:20 ,width:'100%',height:'20%'}}>
         
          <AnswerCard AnswerList={AnswerList}/>
        </View>

        <View style={{width:'65%' , height:'9%' ,paddingTop:40  ,paddingBottom:20 ,flexDirection:'row', alignItems:'center', justifyContent:'space-between',}}>
            <Text style={{fontWeight:'bold' , fontSize:'110%',}}> Donate your study material and help a fellow student </Text>
        </View>

        <View style={{width:'65%' , height:'16%' , backgroundColor:'#00838F' , borderRadius:10}}>  
          <View style={{padding:20,}}>
            <View style={{paddingBottom: 20,flexDirection:'column' ,justifyContent:'flex-start' , alignItems:'flex-start'}}>
                <Text style={{fontSize:20, paddingRight:10,}}>Get premium services of</Text>
                <Text style={{fontWeight:'bold', fontSize:30 ,color:'#00C0F0' ,}}>StudyArchieve</Text>
                <Text style={{fontSize:20,}}>for a week when you post study notes</Text>
            </View>
            <TouchableOpacity style={{height:'30%' , width:'40%'}}>
              <View style={{ alignItems:'center' , justifyContent:'center' ,height:'100%' , width:'40%' , backgroundColor:'#F44336' , borderRadius:10}}>
                <Text>upload</Text>
              </View>
            </TouchableOpacity>


          </View>
        </View>

        <View style={{width:'65%' ,paddingTop:40  ,paddingBottom:20,flexDirection:'row', alignItems:'center', justifyContent:'space-between',}}>
            <Text style={{fontWeight:'bold' , fontSize:'110%',}}> Additional services offered by StudyArchieve </Text>
        </View>

        < View style={{justifyContent:'space-between' ,backgroundColor:'transparent' ,padding:30 ,marginBottom:40,flexDirection:'row' , height:'15%' , width:'65%'}}>
           <View style={{width:'40%' ,backgroundColor:'grey' , justifyContent:'center' , alignItems:'center', borderRadius:10}}>
              <Text>Solving the college dilema</Text>
              <Text  style={{marginTop:5 , fontWeight:'bold' ,fontSize:'160%',color:'#2196F3'}}>Buy Sell Rent </Text>
              <Text>Textbook</Text> 
              <TouchableOpacity style={{marginTop:15,width:'50%' , height:'20%' , }}>
                <View style={{justifyContent:'center' ,alignItems:'center' ,width:'100%' , height:'100%' ,borderRadius:10,backgroundColor:'red'}} >
                  <Text>buy sell or Rent</Text>
                </View>
              </TouchableOpacity>
           </View>
           <View style={{width:'40%' ,backgroundColor:'grey' , justifyContent:'center' , alignItems:'center' , borderRadius:10}}>
              <Text>Don't understand the content </Text>
              <Text  style={{marginTop:5 , fontWeight:'bold' ,fontSize:'140%',color:'#2196F3'}}>We got you covered </Text>
              <Text style={{textAlign:'center'}}>get assign to talented tutor in your field</Text> 
              <TouchableOpacity style={{marginTop:15,width:'50%' , height:'20%' , }}>
                <View style={{justifyContent:'center' ,alignItems:'center' ,width:'100%' , height:'100%' ,borderRadius:10,backgroundColor:'red'}} >
                  <Text>get a tutor</Text>
                </View>
              </TouchableOpacity>
           </View>

        </View>
        <View style={{marginTop:50}}></View>
      </View>

    </ScrollView>

  )
}

const style = StyleSheet.create({
  mainView:{
    padding:20,
    paddingBottom:20,
  },
  
  greetingText:{
    fontSize:20,
    fontWeight:'bold',
    fontFamily:'monospace',

  },
  appbutton:{
    elevation: 8,
    borderRadius: 4, 
    paddingRight:20,
    paddingBottom:20,
    Height:15,
    width:'80%',
    borderStyle:'solid',
    borderColor:'black',
    shadowColor: "rgba(171, 180, 189, 0.35)",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 20,
    alignContent:'center',
    alignItems:'center',
    justifyContent:'center'
        
  },
  appButtonText: {
    fontSize: 18,
    color: "black",
    fontWeight:'Bold',
    fontFamily:'Monospace',
    textAlign:'center'
  },
})

export default Home