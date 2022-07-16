import { 
  View,
  Text,
  SafeAreaView, 
  Image, 
  ScrollView,
  Button, 
  TouchableOpacity,
  StyleSheet} from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native'
import Book from '../../assets/images/Book.png'
import stackOfBook from '../../assets/images/stackOfBook.png'



const LandingPage = () => {
  return (
      <ScrollView 
        
        style={{ 
          showsVerticalScrollIndicator:'false',
          flex:1, 
          backgroundColor:"#00C0F0" ,  // white is also nice
          paddingRight:30,
          paddingLeft:30,
          paddingTop:30,
        }}>
       <ImageBackground 
       
          resizeMode='cover'
          source={stackOfBook} 
            style={{ 
                height:500,
                width:500,
                paddingBottom:30,
              }}
            imageStyle={{
                borderRadius:30,
               }}>
              <View style={{
                flex:1,
                justifyContent:'flex-end',
                paddingLeft:20,
                paddingRight:20,
                
              }}>
                <View style={{textAlign:'start', paddingBottom:25,}}>
                  <Text style={{
                      fontWeight:'bold',
                      color:'white' , 
                      fontSize:30,
                     }}>Make Learning Fun with StudyAchieve</Text>  
                  <Text 
                    style={{
                      
                      color:'white' , 
                      fontSize:20,
                    }}>Get access to millions plus study material</Text>
                  <Text
                   style={{
                      
                    color:'white' , 
                    fontSize:20,
                  }}
                  >,previous paper and make flashcards</Text>
                </View>
                
                <TouchableOpacity style={style.Appbutton}>
                  <Text style={style.appButtonText}>Start Studying</Text>
                </TouchableOpacity>
              </View>
        </ImageBackground>
        <Text 
        style={
              style.mainText
          }
          >Have easy access to study material and never stuggle in the exam ,obtain your best results</Text>
          <Text 
            style={style.subtext}>
              Accessing million+ study material to help you prepare and ace your exams.
          </Text>
        <View 
          style={{
            paddingTop:80 ,
            }}>
          <Image source={Book} style={{borderRadius: 20 ,height:300, width:500}}/>
        </View >

       <Text style={style.mainText}> Organize your in your achieve </Text>
       <Text style={style.subtext}> Save your notes , study material in an achieve and have access to them whenever you want.</Text>

       <Text style={style.mainText}> Ready to  get started?</Text>
       
       <View style={{
          paddingTop:40,
          paddingHorizontal:160   // responsive ui
          }}>
          <TouchableOpacity style={style.Appbutton}>
              <Text style={{color:'blue' , textAlign:'center' , fontWeight:'bold'}}>
                  Get started
              </Text>
          </TouchableOpacity>
       </View>
        <View style={{paddingTop:70}}>
          <Text>about the services that we provide</Text>
          <Text>Testimonies</Text>
          <Text>ABout Tutors</Text>
          <Text>Playstore</Text>
          <Text>Others</Text>

        </View>
      
    </ScrollView>
    
  )
}

const style = StyleSheet.create({
  Appbutton:{
    elevation: 8,
    backgroundColor: "#94D6EB",
    borderRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 12,
    width:170,
    
    
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    alignSelf: "center",
   fontWeight:'Bold',
    fontFamily:'Monospace'
  },
  mainText: {
    
    color:'black',
    textAlign:'center',
    paddingTop:30,
    fontWeight:'bold',
    fontSize:20,
  },
  subtext:{
    paddingTop:30,
    textAlign:'center'
  }
})

export default LandingPage