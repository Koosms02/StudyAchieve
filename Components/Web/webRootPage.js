import { View, Text, ScrollView, FlatList, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import Header from '../Widget/Header'
import SideBarMenu from '../Widget/SideBarMenu'
import Home from './Pages/Home'
import Library from './Pages/Library'
import Notification  from './Pages/Notification'
import Search from './Pages/Search'
import Upload from './Pages/Upload'

const webRootPage = () => {

  const [home , setHome] = useState(true)
  const [library , setLibrary] = useState(false)
  const [search , setSearch] = useState(false)
  const [notification , setNotification] = useState(false)
  const [upload , setUpload] = useState(false)
 
  

  function setPage(){
    if(home === true){
      return <Home/>
    }else if(library === true){
      return <Library/>
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
     <SideBarMenu home={home}  setHome={setHome} library ={library} setLibrary={setLibrary} search={search} setSearch={setSearch} notification ={notification} setNotification={setNotification} upload={upload} setUpload={setUpload}/>
      <View style={{flex:1}}>
      <Header  home ={home} search={ search} notification ={notification} upload= {upload} library={ library } bool ={true}/>
      
       {setPage()}

      </View>
    </View>
  )
}

export default webRootPage

