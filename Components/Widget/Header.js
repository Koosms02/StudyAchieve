import { View, Text ,StyleSheet ,TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'



const Header = ({
    name ,
    logIn ,
    SignUp ,
    profile ,
    burgerIcon,
    headerTitle,
    searchButton ,
    color ,
    loginScreen ,
    signupScreen }) => {

    const navigation = useNavigation()
  return (

    <View
       style={[style.view , {backgroundColor:color}] }>
        <View>
            <Text style = {{color:'#00C0F0' , fontSize:30 , fontWeight:'bold' ,fontFamily:'monospace'}}> StudyArchieve</Text>
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
    view:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:60,
        width:'100%',
        backgroundColor:'white',
        elevation:8,
        paddingLeft:20,
        paddingRight:20,
        borderStyle:'solid',
        borderColor:'black', 
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