import { View, Text, ScrollView, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import Header from '../Widget/Header'
import SideBarMenu from '../Widget/SideBarMenu'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import Search from './Pages/Search'
import Upload from './Pages/Upload'
import Question from './Pages/Question'

const webRootPage = () => {

  //should update once done with working with pages
  const [home , setHome] = useState(false)
  const [profile , setProfile] = useState(false)
  const [search , setSearch] = useState(true)
  const [question , setQuestion] = useState(false)
  const [upload , setUpload] = useState(false)
 
  

  function setPage(){
    if(home === true){
      return <Home/>
    }else if(profile === true){
      return <Profile/>
    }else if(search === true){
      return <Search/>
    }else if(question === true){
      return <Question/>
    }else if(upload === true){
      return <Upload/>
    }
  }
  return (
    
    <View style={{flex:1 , flexDirection:'row'}}>
     <SideBarMenu home={home}  setHome={setHome} profile ={profile} setProfile={setProfile} search={search} setSearch={setSearch} question ={question} setQuestion={setQuestion} upload={upload} setUpload={setUpload}/>
      <View style={{flex:1}}>
      <Header  home ={home} search={search} question ={question} upload= {upload} profile={profile} bool ={true}/>
      
       {setPage()}

      </View>
    </View>
  )
}

export default webRootPage

