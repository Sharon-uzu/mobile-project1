import {StyleSheet, View, Text, Image } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Ionicons } from '@expo/vector-icons';

export default function Login() {
  return (
    <View  style={{width:'100%'}}>
        <Image source={require('../../Assets/Images/an.webp')} style={{width:'100%', height:300}}/>
        <View style={styles.container}>
          <Text style={styles.welcomeText}>Welcome To Education App</Text>
          <Text style={{textAlign:'center', marginTop:60, fontSize:20, fontWeight:600}}>Login/Signup</Text>

          <View style={styles.button}>
            <Ionicons style={{marginRight:10}} name="logo-google" size={20} color="white" />
            <Text style={{color:Colors.white}}>Sign In with Google</Text>
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
  }
});

