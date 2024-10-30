import {StyleSheet, View, Text, Image,TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Ionicons } from '@expo/vector-icons';
import {Octicons} from '@expo/vector-icons';

export default function Signin() {
  return (
    <View  style={{width:'100%'}}>
        <Image source={require('../../Assets/Images/an.webp')} style={{width:'100%', height:300}}/>
        <View style={styles.container}>
          <Text style={styles.welcomeText}>Sign In</Text>
          {/* <Text style={{textAlign:'center', marginTop:60, fontSize:20, fontWeight:600}}>Login/Signup</Text> */}

          {/* <View style={styles.button}>
            <Ionicons style={{marginRight:10}} name="logo-google" size={20} color="white" />
            <Text style={{color:Colors.white}}>Sign In with Google</Text>
          </View> */}
          <View style={styles.forminput}>
            <Octicons name='mail' style={{color:'#5e5e5e', marginRight:8}}/>
            <TextInput placeholder='Email'/>
          </View>

          <View style={styles.forminput}>
            <Octicons name='lock' style={{color:'#5e5e5e', marginRight:8}}/>
            <TextInput placeholder='Password'/>
          </View>

          <Text style={{fontSize:14, fontWeight:500, color:'grey', textAlign:'right', width:'85%', marginTop:8}}>Forgot Password?</Text>

          <TouchableOpacity style={{backgroundColor:'#853284', width:'85%', marginTop:30, paddingVertical:10, borderRadius:9}}>
            <Text style={{color:'#fff', textAlign:'center', fontSize:17, fontWeight:500}}>Sign In</Text>
          </TouchableOpacity>

          <View style={styles.account}>
            <Text style={{color:'grey', marginRight:5}}>Don't have an account?</Text>
            <Text style={{fontWeight:600}}>Sign Up</Text>
          </View>

        </View>
          
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      paddingTop:30,
      marginTop:-30,
      backgroundColor:'#fff',
      borderTopRightRadius:30,
      borderTopLeftRadius:30,
      display: 'flex',
      alignItems:'center'
    },
    welcomeText:{
      fontSize:30,
      textAlign:'center', 
      fontWeight:'bold',
      marginBottom:20
      // color:'red'
    },
  
    button:{
      backgroundColor:Colors.primary,
      textAlign:'center',
      marginTop:70,
      width:'70%',
      flexDirection:'row',
      justifyContent:'center',
      paddingTop:10,
      paddingBottom:10,
      borderRadius:10,
    },

    forminput:{
        width:'85%',
        backgroundColor:'hsla(0, 0%, 83%, .5)',
        marginTop:20,
        display:'flex',
        flexDirection:'row',
        alignItems: 'center',
        paddingHorizontal:10,
        height:45,
        borderRadius:5,
    },

    account:{
        display:'flex',
        flexDirection:'row',
        alignItems: 'center',
        marginTop:4
    }
  });
  
  