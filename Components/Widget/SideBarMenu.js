
import { View, Text , StyleSheet, TouchableOpacity} from 'react-native'
import React,{useState} from 'react'

// import for icons used

import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const SideBarMenu = ({home ,setHome ,library ,setLibrary ,search ,setSearch,notification , setNotification,upload ,setUpload}) => {

  const onSelectColor ='white'


  return (
      <View style={[style.View]}>
        <Text style={[{paddingTop:15, color:'white' , fontSize:30, fontWeight:'bold' , fontFamily:'monospace'}]}>SA</Text>
        {/* Icons */}
        
        <View style={[style.iconView]}>
            <TouchableOpacity
              onPress={() => {
                setHome(true),
                setLibrary(false),
                setNotification(false),
                setUpload(false),
                setSearch(false) 
              }}
              >
                <View style={[home === true ?(style.SelectedView):(style.UnSelected)]}>
                    <AntDesign name = 'home' size={30} color={home === true ?(onSelectColor):('black')}/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                 onPress={() => {
                    setHome(false),
                    setLibrary(true),
                    setNotification(false),
                    setUpload(false),
                    setSearch(false) 
                  }}
            >
             <View style={[library === true ?(style.SelectedView):(style.UnSelected)]}>
                <Feather name = 'book-open' size={30}  color={library === true ?(onSelectColor):('black')}/>
             </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    setHome(false),
                    setLibrary(false),
                    setNotification(false),
                    setUpload(false),
                    setSearch(true) 
                  }}>
                <View style={[search === true ?(style.SelectedView):(style.UnSelected)]}>
                    <Feather name = 'search' size={30}  color={search === true ?(onSelectColor):('black')}/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={() => {
                    setHome(false),
                    setLibrary(false),
                    setNotification(true),
                    setUpload(false),
                    setSearch(false) 
                }}>

                <View style={[notification === true ?(style.SelectedView):(style.UnSelected)]}>
                    <Ionicons name = 'notifications-outline' size={30} color={notification === true ?(onSelectColor):('black')}/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    setHome(false),
                    setLibrary(false),
                    setNotification(false),
                    setUpload(true),
                    setSearch(false) 
                  }}>
                    <View style={[upload === true ?(style.SelectedView):(style.UnSelected)]}>
                         <AntDesign name = 'addfile' size={30} color={upload === true ?(onSelectColor):('black')}/>
                    </View>
                
            </TouchableOpacity>
        </View>
        
      </View>
   
  )
}

const style = StyleSheet.create({
    View:{

        alignContent:'center',
        textAlign:'center',
        width:'8%',
        height:'100%',
        flexDirection:'column',
        backgroundColor:'#00C0F0',
    },
    
    iconView:{
        paddingTop:70,
        flex:0.8,
        flexDirection:'column' ,
        justifyContent:'space-evenly' ,
        
    },
    SelectedView:{
        backgroundColor:'grey',
        opacity:0.4,
        height:70,
        justifyContent: 'center'
    },
    UnSelected:{
        height:70,
        justifyContent: 'center'
    }
})

export default SideBarMenu