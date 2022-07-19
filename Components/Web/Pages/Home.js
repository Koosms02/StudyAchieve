import { View, Text ,StyleSheet, TouchableOpacity, ScrollView, Button, ImageBackground} from 'react-native'
import React from 'react'
import ModuleCard from '../../Widget/ModuleCard'
import pic1 from '../../../assets/images/pic1.jpg'
import pic2 from '../../../assets/images/pic2.jpg'
import pic3 from '../../../assets/images/pic3.jpg'
import pic4 from '../../../assets/images/pic4.jpg'
import pic5 from '../../../assets/images/pic5.jpg'
import AnswerCard from '../../Widget/AnswerCard'
import buyOrRent from '../../../assets/images/buyOrRent.jpg'
import find_tutor from '../../../assets/images/find_tutor.jpg'


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
        <View style={{width:'73%' ,paddingTop:40 , flex:1 ,flexDirection:'row', alignItems:'center', justifyContent:'space-between',}}>
            <Text style={{fontWeight:'bold' , fontSize:20,}}>Recent</Text>
        </View>

        <View style={[style.subView, {flexDirection:'row', backgroundColor:'transparent', paddingTop:20,}]}>
          {/* should add a scroll view */}
          <ModuleCard picture={pic1} />
          <ModuleCard picture={pic3}/>
          <ModuleCard picture={pic4}/>
          <ModuleCard picture={pic5}/>
         
          
        </View>

        <View style={{width:'73%',paddingTop:40 , flex:1 ,flexDirection:'row', alignItems:'center', justifyContent:'space-between',}}>
            <Text style={{fontWeight:'bold' , fontSize:20,}}>Recommanded study notes and documents</Text>
            <TouchableOpacity>
              <Text>view more</Text>
            </TouchableOpacity>
        </View>

        <View style={{paddingTop:20,width:'73%' , height:200 , flex:8, flexDirection:'row'}}>
            <ModuleCard picture={pic2}/>
            <ModuleCard picture={pic3}/>
            <ModuleCard picture={pic4}/>
            <ModuleCard picture={pic5}/>   
        </View>
            
            

        
        <View style={{width:800 ,paddingTop:40 , flex:1 ,flexDirection:'row', alignItems:'center', justifyContent:'space-between',}}>
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
            <Text style={{fontWeight:'bold' , fontSize:20,}}> Need help with your homeworks </Text>
        </View>
        <View style={[style.subView ,{paddingTop:40}]}>  
            <View style={{padding:30,}}>
              <Text style={{fontWeight:'regular' , fontSize:25 , }}>Subscribe and get help from expert in no time 24/7</Text>
              <Text style={{fontWeight:'bold' , fontSize:30}}>Ask a Question  </Text>
              <Text style={{fontWeight:'regular', fontSize:25,}}>get Step by step solution</Text>
            </View>
          </View>
        


        <View style={{width:'75%' ,paddingTop:40  ,paddingBottom:20, flex:1 ,flexDirection:'row', alignItems:'center', justifyContent:'space-between',}}>
            <Text style={{fontWeight:'bold' , fontSize:20,}}> Earn money by posting your study notes </Text>
        </View>

        <View style={style.subView}>  
          <View style={{padding:20,}}>
            {/* add a background images */}
            <View style={{paddingBottom: 20,flexDirection:'column' ,justifyContent:'flex-start' , alignItems:'flex-start'}}>
                <Text style={{fontSize:20, paddingRight:10,}}>Get paid or get premium services of</Text>
                <Text style={{fontWeight:'bold', fontSize:30 ,color:'#00C0F0' ,}}>StudyArchieve</Text>
                <Text style={{fontSize:20,}}>When you post study notes</Text>
            </View>

            {/* should change these button */}
            <Button  height={20} width={60} title='post'/>

          </View>
        </View>

        <View style={{width:'75%' ,paddingTop:40  ,paddingBottom:20, flex:1 ,flexDirection:'row', alignItems:'center', justifyContent:'space-between',}}>
            <Text style={{fontWeight:'bold' , fontSize:20,}}> Additional services offered by StudyArchieve </Text>
        </View>

        < View style={{paddingTop:30,flexDirection:'row' ,justifyContent:'space-evenly', height:450 , width:800}}>
            <View style={{justifyContent:'center' ,alignItems:'center' ,height:380 , width:300 , backgroundColor:'white'}}> 
              <Text style={{fontSize:18,color:"#00C0F0"}}> Solving textbook dilema</Text>
              <Text style={{color:'#EF5350' ,fontSize:30,fontWeight:'bold' , paddingTop:60,textAlign:'center'}}> Buy or Rent a TextBook</Text>
              <View style={{ justifyContent:'center' ,alignItems:'center' ,paddingTop:50, width:'76%' , height:'20%'}}>
                <TouchableOpacity style={[style.appbutton,{paddingTop:25 , backgroundColor:'#EF5350'}]}> 
                  <Text style={style.appButtonText}> buy or rent </Text>
                </TouchableOpacity>
              </View>

              
          </View>
          <View style={{justifyContent:'center' ,alignItems:'center' ,height:380 , width:300 , backgroundColor:'white'}}> 
              <Text style={{fontSize:18,color:"#00C0F0"}}> Don't understand the content</Text>
              <Text style={{color:'#EF5350' ,fontSize:30,fontWeight:'bold' , paddingTop:60,textAlign:'center'}}> Get  tutor</Text>
              <View style={{ justifyContent:'center' ,alignItems:'center' ,paddingTop:50, width:'76%' , height:'20%'}}>
                <TouchableOpacity style={[style.appbutton,{paddingTop:25 , backgroundColor:'#EF5350'}]}> 
                  <Text style={style.appButtonText}> Get a tutor </Text>
                </TouchableOpacity>
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
    height: '10%',
    width:'73%',
    backgroundColor:'white',
    borderRadius:20,
    borderStyle:'solid'
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