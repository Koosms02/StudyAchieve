import { View, Text ,StyleSheet ,TouchableOpacity, TextInput} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { AntDesign,FontAwesome5 } from '@expo/vector-icons';



const Header = ({
    home , search ,question , upload , profile ,
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
        }else if(question === true){
            return 'Question'
        }else if(upload === true){
            return 'Upload'
        }else if(profile ===true){
            return 'Profile'
        }
    }else{
       return 'StudyArchieve'
    }
  }

  function searchBar(){
    if(search === true){
        return(

            <View style={{width:'100%', height:'80%' , flexDirection:'row' ,alignItems:'center'}}>
                <View style={{height:'100%' , width:'40%', backgroundColor:'#B0BEC5' ,justifyContent:'flex-start', flexDirection:'row' ,alignItems:'center',borderRadius:10}}>
                    <AntDesign style={{marginLeft:5,marginRight:5}}name='search1' size={18}/>
                    <TextInput style={{outline:'none' ,borderRadius:10,width:'100%' , height:'100%' ,placeholderTextColor:'#E0E0E0'}}  placeholder='notes , previouspapers'/>
                </View>
                <TouchableOpacity style={{marginLeft:'30%', height:'100%' , width:'15%' }}>
                    <View style={{borderRadius:10,flexDirection:'row' , alignItems:'center',height:'100%' , width:'100%' , backgroundColor:'#E53935' }}>
                        <FontAwesome5 style={{marginLeft:10 ,marginRight:10}} name='crown' size={10}/>
                        <Text> upgrade</Text>    
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{marginLeft:10, height:'100%' , width:'10%' }}>
                    <View style={{borderRadius:10,height:'100%' ,alignItems:'center', justifyContent:'center', width:'100%' , backgroundColor:'#E53935' }}>
                        <Text>Get tutor</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{marginLeft:10, height:'100%' , width:'10%'}}>
                    <View style={{borderRadius:10,alignItems:'center', justifyContent:'center',height:'100%' , width:'100%' , backgroundColor:'#E53935' }}>
                        <Text>Buy/Rent</Text>
                    </View>

                </TouchableOpacity>
            </View>
           

            )
    }else{
        return(

        <View style={{width:'100%', height:'80%' , flexDirection:'row' ,alignItems:'center'}}>  
            <TouchableOpacity style={{marginLeft:'60%', height:'100%' , width:'15%' }}>
                    <View style={{borderRadius:10,flexDirection:'row' , alignItems:'center',height:'100%' , width:'100%' , backgroundColor:'#E53935' }}>
                        <FontAwesome5 style={{marginLeft:10 ,marginRight:10}} name='crown' size={10}/>
                        <Text> upgrade</Text>    
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{marginLeft:10, height:'100%' , width:'10%' }}>
                    <View style={{borderRadius:10,height:'100%' ,alignItems:'center', justifyContent:'center', width:'100%' , backgroundColor:'#E53935' }}>
                        <Text>Get tutor</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{marginLeft:10, height:'100%' , width:'10%'}}>
                    <View style={{borderRadius:10,alignItems:'center', justifyContent:'center',height:'100%' , width:'100%' , backgroundColor:'#E53935' }}>
                        <Text>Buy/Rent</Text>
                    </View>

                </TouchableOpacity>
        </View>

        )
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
        <View style={{paddingLeft:40,height:'80%' , width:'80%'}}>
            {searchBar()}
        </View>


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
    notsearch:{
        marginLeft:'60%',
        height:45,
        justifyContents:'center' ,
        flexDirection:'row' ,
        alignItems:'center'
    },
    search:{
        marginLeft:'20%',
        height:45,
        justifyContents:'center' ,
        flexDirection:'row' ,
        alignItems:'center'
    },
    view:{
        flexDirection:'row',
        justifyContent:'flex-start',
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