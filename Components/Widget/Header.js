import { View, Text ,StyleSheet ,TouchableOpacity, TextInput} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';



const Header = ({
    home , search ,notification , upload , profile ,
    bool,
    logIn ,
    SignUp ,
    burgerIcon,
    headerTitle,
    searchButton ,
    color ,
    loginScreen ,
    signupScreen }) => {
  
  function Name(){
    if(bool === true){
        if( home === true){
            return 'Home'
        }else if(search === true){
            return 'Search'
        }else if(notification === true){
            return 'Notification'
        }else if(upload === true){
            return 'Upload'
        }else if(profile ===true){
            return 'Profile'
        }
    }else{
       return 'StudyArchieve'
    }

 
    
  }
  function Render(){
    if(bool === true){
        if(search === true){
            return (<View style={{height:45 , width:'40%' , justifyContent:'center' , backgroundColor:'#EEEEEE' , borderRadius:10}}>
                    <View style={{height:45 , width:'40%' , flexDirection:'row' , alignItems:'center' , paddingLeft:20,}}>
                        <AntDesign name='search1' size={20} style={{paddingRight:20,}}/>
                        <TextInput fontSize={20} placeholder='e.g Module name ,question' style={{ height:35 , width:2000}}/>
                    </View>
                 </View>)
        }else{
            return
        }
    }
  }
  const navigation = useNavigation()
  return (

    <View
       style={[style.view , {backgroundColor:color,}] }>
        <View>
            <Text style = {{color:'#00C0F0' , fontSize:30 , fontWeight:'bold' ,fontFamily:'monospace'}}> 
                {Name()}</Text>
        </View>

        {Render()}

        <View style={{flexDirection:'row'}}>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate(loginScreen)
                }}>
                <Text style={style.Text}>{logIn}</Text>
            </TouchableOpacity>
            <TouchableOpacity

            //shoud add on havor
               onPress={() => {
                navigation.navigate(signupScreen)
            }}
               >
                <Text style={style.Text}>{SignUp}</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const style = StyleSheet.create({
    view:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:70,
        width:'100%',
        backgroundColor:'white',
        elevation:8,
        paddingLeft:20,
        paddingRight:20,
        borderStyle:'solid',
        borderWidth:0.6,
        borderColor:'grey', 
        shadowColor: "rgba(171, 180, 189, 0.35)",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 1,
        shadowRadius: 20,
    },

    Text:{
        fontFamily:'monospace',
        fontWeight:'bold',
        fontColor:'white',
        fontSize: 20,
        color:'#00C0F0',
        paddingLeft:18,
        paddingRight:18,
    }
})
export default Header