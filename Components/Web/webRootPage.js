import { View, Text, ScrollView, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import Header from '../Widget/Header'
import SideBarMenu from '../Widget/SideBarMenu'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import Notification  from './Pages/Notification'
import Search from './Pages/Search'
import Upload from './Pages/Upload'

const webRootPage = () => {

  //should update once done with working with pages
  const [home , setHome] = useState(false)
  const [profile , setProfile] = useState(false)
  const [search , setSearch] = useState(false)
  const [notification , setNotification] = useState(false)
  const [upload , setUpload] = useState(true)
 
  

  function setPage(){
    if(home === true){
      return <Home/>
    }else if(profile === true){
      return <Profile/>
    }else if(search === true){
      return <Search/>
    }else if(notification === true){
      return <Notification/>
    }else if(upload === true){
      return <Upload/>
    }
  }
  return (
    
    <View style={{flex:1 , flexDirection:'row'}}>
     <SideBarMenu home={home}  setHome={setHome} profile ={profile} setProfile={setProfile} search={search} setSearch={setSearch} notification ={notification} setNotification={setNotification} upload={upload} setUpload={setUpload}/>
      <View style={{flex:1}}>
      <Header  home ={home} search={search} notification ={notification} upload= {upload} profile={profile} bool ={true}/>
      
       {setPage()}

      </View>
    </View>
  )
}

export default webRootPage

